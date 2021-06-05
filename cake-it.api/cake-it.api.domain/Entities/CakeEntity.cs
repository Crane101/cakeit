using System;

namespace cake_it.api.domain.Entities
{
    public class CakeEntity: Cake, IEntity
    {
        public Guid Id { get; set; }
     
    }
}
