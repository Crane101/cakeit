using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DocumentModel;
using Amazon.Util;
using cake_it.api.domain.Entities;
using Newtonsoft.Json;
using Serilog;

namespace cake_it.api.services
{
    public class DynamoDbService : IDynamoDbService
    {
        private const string IdPropertyName = "id";

        private readonly ILogger _logger;

        public DynamoDbService(ILogger logger)
        {
            _logger = logger;
        }

        public async Task<bool> UpsertDocument(string tableName, string documentId, object documentContent)
        {
            try
            {
                using var dynamoDbClient = new AmazonDynamoDBClient();
                var dynamoTable = Table.LoadTable(dynamoDbClient, tableName);
                var updateTime = DateTime.UtcNow;

                Document document = Document.FromJson(JsonConvert.SerializeObject(documentContent));
                document.Add(IdPropertyName, documentId);
                document.Add("LastUpdated", AWSSDKUtils.ConvertToUnixEpochSeconds(updateTime));

                await dynamoTable.UpdateItemAsync(document);

                return true;
            }
            catch (Exception ex)
            {
                _logger.Error(ex, $"Failed to upsert document into DynamoDB table {tableName} with id {documentId}.");
                return false;
            }
        }

        public async Task<T> GetDocument<T>(string tableName, string documentId) where T : IEntity
        {
            try
            {
                using var dynamoDbClient = new AmazonDynamoDBClient();
                var dynamoTable = Table.LoadTable(dynamoDbClient, tableName);
                var result = await dynamoTable.GetItemAsync(documentId);

                if (result is null)
                {
                    return default;
                }

                return JsonConvert.DeserializeObject<T>(result.ToJson());
            }
            catch (Exception ex)
            {
                _logger.Error(ex, $"Failed to retrieve document from DynamoDB table {tableName} with key {documentId}.");
                return default;
            }
        }

        public async Task<IEnumerable<T>> GetDocuments<T>(string tableName, string afterKey, int resultsQuantity) where T : IEntity
        {
            try
            {
                using var dynamoDbClient = new AmazonDynamoDBClient();
                var dynamoTable = Table.LoadTable(dynamoDbClient, tableName);

                var scan = dynamoTable.Scan(new ScanOperationConfig() { Limit = resultsQuantity, PaginationToken = afterKey });
                var result = await scan.GetRemainingAsync();

                return result.Select(r => JsonConvert.DeserializeObject<T>(r.ToJson()));
            }
            catch (Exception ex)
            {
                _logger.Error(ex, $"Failed to retrieve documents from DynamoDB table {tableName} of quantity {resultsQuantity} from key {afterKey}.");
                return null;
            }
        }

        public async Task<bool> RemoveDocument(string tableName, string documentId)
        {
            try
            {
                using var dynamoDbClient = new AmazonDynamoDBClient();
                var dynamoTable = Table.LoadTable(dynamoDbClient, tableName);
                await dynamoTable.DeleteItemAsync(documentId);

                return true;
            }
            catch (Exception ex)
            {
                _logger.Error(ex, $"Failed to remove document from DynamoDB table {tableName} with key {documentId}.");
                return false;
            }
        }
    }
}