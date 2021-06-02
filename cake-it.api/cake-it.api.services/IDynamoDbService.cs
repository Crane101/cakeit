using System.Collections.Generic;
using System.Threading.Tasks;
using cake_it.api.domain.Entities;

namespace cake_it.api.services
{
    public interface IDynamoDbService
    {
        /// <summary>
        /// Create or update a specific document
        /// </summary>
        /// <param name="tableName">The name of the table that contains the document to upsert</param>
        /// <param name="documentId">Document key value to update</param>
        /// <param name="documentContent">
        /// The updated document content. Note that the entire content attribute will be replace with this value,
        /// so to to perform a partial update, execute a GetDocument request first and apply any updates manually.
        /// </param>
        /// <param name="lifeTime">Timespan value to automatically remove the document after it has elapsed</param>
        /// <returns></returns>
        Task<bool> UpsertDocument(string tableName, string documentId, object documentContent);

        /// <summary>
        /// Retrieves a document with the specified key
        /// </summary>
        /// <param name="tableName">Name of the table that contains the document</param>
        /// <param name="documentId">Document key value to search for</param>
        /// <returns></returns>
        Task<T> GetDocument<T>(string tableName, string documentId) where T : IEntity;

        Task<IEnumerable<T>> GetDocuments<T>(string tableName, string afterKey, int resultsQuantity  ) where T : IEntity;

        Task<bool> RemoveDocument(string tableName, string documentId);
    }
}