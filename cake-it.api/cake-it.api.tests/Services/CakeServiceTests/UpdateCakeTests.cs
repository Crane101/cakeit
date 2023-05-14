using Moq;
using System;
using System.Threading.Tasks;
using FluentAssertions;
using Xunit;

namespace cake_it.api.tests.Services.CakeServiceTests
{
    public class UpdateCakeTests : CakeServiceTestsBase
    {
        [Fact]
        public async Task UpdateCake_Should_Update_The_Cake_Record()
        {
            GivenThatUpdatingACakeIsSuccessful();

            var sut = new services.CakeService(MockDynamoDbService.Object, MockConfig);

            await sut.UpdateCake(TestCakeId, TestCake);

            MockDynamoDbService.Verify();
        }

        [Fact]
        public async Task UpdateCake_Should_Throw_InvalidOperationException_When_The_Update_Fails()
        {
            GivenThatUpdatingACakeFails();

            var sut = new services.CakeService(MockDynamoDbService.Object, MockConfig);

            Func<Task> testAction = () => sut.UpdateCake(TestCakeId, TestCake);

            await testAction.Should().ThrowAsync<InvalidOperationException>();
            MockDynamoDbService.Verify();
        }

        private void GivenThatUpdatingACakeIsSuccessful()
        {
            MockDynamoDbService
                .Setup(mock => mock.UpsertDocument(MockConfig.Value.CakeTable, TestCakeId.ToString(), TestCake))
                .ReturnsAsync(true)
                .Verifiable();
        }

        private void GivenThatUpdatingACakeFails()
        {
            MockDynamoDbService
                .Setup(mock => mock.UpsertDocument(MockConfig.Value.CakeTable, TestCakeId.ToString(), TestCake))
                .ReturnsAsync(false)
                .Verifiable();
        }
    }
}
