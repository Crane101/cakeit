using System;
using System.Threading.Tasks;
using cake_it.api.domain.Entities;
using cake_it.api.domain.Exceptions;
using FluentAssertions;
using Moq;
using Xunit;

namespace cake_it.api.tests.Services.CakeServiceTests
{
    public class GetCakeTests : CakeServiceTestsBase
    {
        [Fact]
        public async Task GetCake_Should_Retrieve_Cake_By_Id()
        {
            var testCake = GivenThatACakeCanBeRetrievedById();

            var sut = new services.CakeService(MockDynamoDbService.Object, MockConfig);

            var testResult = await sut.GetCake(TestCakeId);

            testResult.Should().Be(testCake);
        }

        [Fact]
        public async Task GetCake_Should_Throw_NotFoundException_When_Cake_Does_Not_Exist()
        {
            var sut = new services.CakeService(MockDynamoDbService.Object, MockConfig);

            Func<Task> testAction = () => sut.GetCake(TestCakeId);

            await testAction.Should().ThrowAsync<NotFoundException>();
        }

        private CakeEntity GivenThatACakeCanBeRetrievedById()
        {
            var testCake = new CakeEntity();

            MockDynamoDbService
                .Setup(mock => mock.GetDocument<CakeEntity>(MockConfig.Value.CakeTable, TestCakeId.ToString()))
                .ReturnsAsync(testCake);

            return testCake;
        }
    }
}
