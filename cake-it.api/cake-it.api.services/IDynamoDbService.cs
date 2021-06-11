using System.Collections.Generic;
using System.Threading.Tasks;
using cake_it.api.domain.Entities;

namespace cake_it.api.services
{
    public interface IDynamoDbService
    {
        Task<bool> UpsertDocument(string tableName, string documentId, object documentContent);

        Task<T> GetDocument<T>(string tableName, string documentId) where T : IEntity;

        Task<IEnumerable<T>> GetDocuments<T>(string tableName, string afterKey = null, int? resultsQuantity = null) where T : IEntity;

        Task<bool> RemoveDocument(string tableName, string documentId);
    }
}