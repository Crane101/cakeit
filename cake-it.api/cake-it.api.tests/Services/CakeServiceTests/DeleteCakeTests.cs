using Moq;
using System;
using System.Threading.Tasks;
using FluentAssertions;
using Xunit;

namespace cake_it.api.tests.Services.CakeServiceTests
{
    public class DeleteCakeTests : CakeServiceTestsBase
    {
        [Fact]
        public async Task DeleteCake_Should_Update_The_Cake_Record()
        {
            GivenThatDeletingACakeIsSuccessful();

            var sut = new services.CakeService(MockDynamoDbService.Object, MockConfig);

            await sut.DeleteCake(TestCakeId);

            MockDynamoDbService.Verify();
        }

        [Fact]
        public async Task DeleteCake_Should_Throw_InvalidOperationException_When_The_Update_Fails()
        {
            GivenThatDeletingACakeFails();

            var sut = new services.CakeService(MockDynamoDbService.Object, MockConfig);

            Func<Task> testAction = () => sut.DeleteCake(TestCakeId);

            await testAction.Should().ThrowAsync<InvalidOperationException>();
            MockDynamoDbService.Verify();
        }

        private void GivenThatDeletingACakeIsSuccessful()
        {
            MockDynamoDbService
                .Setup(mock => mock.RemoveDocument(MockConfig.Value.CakeTable, TestCakeId.ToString()))
                .ReturnsAsync(true)
                .Verifiable();
        }

        private void GivenThatDeletingACakeFails()
        {
            MockDynamoDbService
                .Setup(mock => mock.RemoveDocument(MockConfig.Value.CakeTable, TestCakeId.ToString()))
                .ReturnsAsync(false)
                .Verifiable();
        }
    }
}
