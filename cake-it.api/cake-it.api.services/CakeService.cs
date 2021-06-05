using cake_it.api.domain.Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using cake_it.api.domain;
using cake_it.api.domain.Configuration;
using cake_it.api.domain.Entities;
using cake_it.api.domain.Exceptions;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace cake_it.api.services
{
    public class CakeService : ICakeService
    {
        private readonly IDynamoDbService _dynamoDbService;
        private readonly DynamoDbSettings _settings;
        
        public CakeService(IDynamoDbService dynamoDbService, IOptions<DynamoDbSettings> settings)
        {
            _dynamoDbService = dynamoDbService;
            _settings = settings.Value;
        }

        public async Task<CakeEntity> GetCake(Guid cakeId)
        {
            var cake = await _dynamoDbService.GetDocument<CakeEntity>(_settings.CakeTable, cakeId.ToString());
            if (cake is null) throw new NotFoundException($"Could not find a cake with id {cakeId}.");
            
            return cake;
        }

        public async Task<IEnumerable<CakeEntity>> GetCakes(int pageSize, string fromId)
        {
            return await _dynamoDbService.GetDocuments<CakeEntity>(_settings.CakeTable, fromId, pageSize);
        }

        public async Task<Guid> CreateCake(Cake cake)
        {
            var newId = Guid.NewGuid();
            var success = await _dynamoDbService.UpsertDocument(_settings.CakeTable, newId.ToString(), cake);
            if (!success) throw new InvalidOperationException($"Unexpected error when attempting to create cake id with data: {JsonConvert.SerializeObject(cake)}.");

            return newId;
        }

        public async Task UpdateCake(Guid cakeId, Cake cake)
        {
            var success = await _dynamoDbService.UpsertDocument(_settings.CakeTable, cakeId.ToString(), cake);
            if (!success) throw new InvalidOperationException($"Unexpected error when attempting to update cake id {cakeId} with data: {JsonConvert.SerializeObject(cake)}.");
        }

        public async Task DeleteCake(Guid cakeId)
        {
            var success = await _dynamoDbService.RemoveDocument(_settings.CakeTable, cakeId.ToString());
            if (!success) throw new InvalidOperationException($"Unexpected error when attempting to delete cake id {cakeId}.");
        }
    }
}
