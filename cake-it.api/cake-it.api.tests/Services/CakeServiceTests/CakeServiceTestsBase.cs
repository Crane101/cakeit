using cake_it.api.domain;
using cake_it.api.domain.Configuration;
using cake_it.api.domain.Entities;
using cake_it.api.services;
using Microsoft.Extensions.Options;
using Moq;
using System;
using System.Collections.Generic;

namespace cake_it.api.tests.Services.CakeServiceTests
{
    public abstract class CakeServiceTestsBase
    {
        protected readonly Mock<IDynamoDbService> MockDynamoDbService;
        protected readonly IOptions<DynamoDbSettings> MockConfig;

        protected readonly Cake TestCake;
        protected readonly Guid TestCakeId;

        protected CakeServiceTestsBase()
        {
            MockDynamoDbService = new Mock<IDynamoDbService>();

            MockConfig = Options.Create(new DynamoDbSettings
            {
                CakeTable = "Test Cake Table Name"
            });

            TestCake = new Cake()
            {
                Name = "Test Cake Name",
                Comment = "Test Cake Comment",
                ImageUrl = "Test Cake Image URL",
                YumFactor = 3
            };

            TestCakeId = new Guid("01c9bb71-b006-4509-868b-2850f0cb575a");
        }
    }
}
