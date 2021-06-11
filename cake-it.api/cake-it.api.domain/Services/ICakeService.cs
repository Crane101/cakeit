using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using cake_it.api.domain.Entities;

namespace cake_it.api.domain.Services
{
 public   interface ICakeService
    {
        Task<CakeEntity> GetCake(Guid cakeId);

        Task<IEnumerable<CakeEntity>> GetCakes(int? pageSize = null, string fromId = null);

        Task<Guid> CreateCake(Cake cake);

        Task UpdateCake(Guid cakeId, Cake cake);

        Task DeleteCake(Guid cakeId);
        
    }
}
