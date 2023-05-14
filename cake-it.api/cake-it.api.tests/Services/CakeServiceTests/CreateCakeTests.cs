using cake_it.api.domain.Exceptions;
using System;
using System.Linq;
using System.Threading.Tasks;
using FluentAssertions;
using Xunit;
using Moq;
using cake_it.api.domain.Entities;
using System.Collections.Generic;

namespace cake_it.api.tests.Services.CakeServiceTests
{
    public class CreateCakeTests : CakeServiceTestsBase
    {
        [Fact]
        public async Task CreateCake_Should_Return_New_Cake_Id()
        {
            GivenThatAddingANewCakeIsSuccessful();

            var sut = new services.CakeService(MockDynamoDbService.Object, MockConfig);

            var testResult = await sut.CreateCake(TestCake);

            var newCakeId = MockDynamoDbService
                .Invocations.Single(inv => inv.Method.Name == "UpsertDocument")
                .Arguments[1].ToString();

            testResult.Should().Be(newCakeId);
        }

        [Fact]
        public async Task CreateCake_Should_Throw_BadRequestException_If_Cake_Already_Exists()
        {
            GivenThatACakeExists(TestCake.Name);

            var sut = new services.CakeService(MockDynamoDbService.Object, MockConfig);

            Func<Task> testAction = () => sut.CreateCake(TestCake);

            await testAction.Should().ThrowAsync<BadRequestException>();
        }

        [Fact]
        public async Task CreateCake_Should_Throw_InvalidOperationException_If_Cake_Creation_Fails()
        {
            GivenThatAddingANewCakeFails();

            var sut = new services.CakeService(MockDynamoDbService.Object, MockConfig);

            Func<Task> testAction = () => sut.CreateCake(TestCake);

            await testAction.Should().ThrowAsync<InvalidOperationException>();
        }

        private void GivenThatAddingANewCakeIsSuccessful()
        {
            MockDynamoDbService
                .Setup(mock => mock.UpsertDocument(MockConfig.Value.CakeTable, It.IsAny<string>(), TestCake))
                .ReturnsAsync(true);
        }

        private void GivenThatAddingANewCakeFails()
        {
            MockDynamoDbService
                .Setup(mock => mock.UpsertDocument(MockConfig.Value.CakeTable, It.IsAny<string>(), TestCake))
                .ReturnsAsync(false);
        }
        private void GivenThatACakeExists(string cakeName)
        {
            var testCakesList = new List<CakeEntity>
            {
                new CakeEntity { Name = "Test Cake 1" },
                new CakeEntity { Name = cakeName },
                new CakeEntity { Name = "Test Cake 2" },
            };

            MockDynamoDbService
                .Setup(mock => mock.GetDocuments<CakeEntity>(MockConfig.Value.CakeTable, null, null))
                .ReturnsAsync(testCakesList);
        }
    }
}