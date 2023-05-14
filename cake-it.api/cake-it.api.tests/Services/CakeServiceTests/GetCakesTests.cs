using System.Collections.Generic;
using System.Threading.Tasks;
using cake_it.api.domain.Entities;
using FluentAssertions;
using Moq;
using Xunit;

namespace cake_it.api.tests.Services.CakeServiceTests
{
    public class GetCakesTests : CakeServiceTestsBase
    {
        [Fact]
        public async Task GetCakes_Should_Return_All_Cakes()
        {
            var testCakesList = GivenThatAListOfCakesCanBeRetrieved();

            var sut = new services.CakeService(MockDynamoDbService.Object, MockConfig);

            var testResult = await sut.GetCakes();

            testResult.Should().BeEquivalentTo(testCakesList);
        }

        private List<CakeEntity> GivenThatAListOfCakesCanBeRetrieved()
        {
            var testCakesList = new List<CakeEntity>
            {
                new CakeEntity {Name = "Test Cake 1"},
                new CakeEntity {Name = "Test Cake 2"},
                new CakeEntity {Name = "Test Cake 3"},
            };

            MockDynamoDbService
                .Setup(mock => mock.GetDocuments<CakeEntity>(MockConfig.Value.CakeTable, null, null))
                .ReturnsAsync(testCakesList);

            return testCakesList;
        }
    }
}
