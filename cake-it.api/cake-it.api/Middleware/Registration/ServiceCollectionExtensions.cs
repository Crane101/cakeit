using System.Linq;
using System.Reflection;
using cake_it.api.domain.Configuration;
using cake_it.api.services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NetCore.AutoRegisterDi;
using Serilog;

namespace cake_it.api.Middleware.Registration
{
    public static class ServiceCollectionExtensions
    {

        public static IServiceCollection RegisterTypes(this IServiceCollection services)
        {
            services.AddSingleton(Log.Logger);

            services
                .RegisterAssemblyPublicNonGenericClasses(Assembly.GetAssembly(typeof(CakeService)))
                .Where(x => new[] { "Service" }.Any(s => x.Name.EndsWith(s)))
                .AsPublicImplementedInterfaces(ServiceLifetime.Scoped);

            return services;

        }

        public static IServiceCollection BindAppSettingsToConcreteTypes(this IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<DynamoDbSettings>(configuration.GetSection("DynamoDbSettings"));
            return services;
        }
    }
}
