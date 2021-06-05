using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Text.Json;
using System.Text.Json.Serialization;
using cake_it.api.Middleware.ErrorHandling;
using cake_it.api.Middleware.Registration;
using cake_it.api.Middleware.Validation;
using cake_it.api.Validation;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Localization;
using Serilog;
using Serilog.Formatting.Compact;

namespace cake_it.api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Debug()
                .Enrich.FromLogContext()
                .WriteTo.Console(new CompactJsonFormatter())
                .CreateLogger();

            Log.Information("Logger initialised");
            
            services
                .Configure<RequestLocalizationOptions>(options => { options.DefaultRequestCulture = new RequestCulture("en-GB"); })
                .BindAppSettingsToConcreteTypes(Configuration)
                .RegisterTypes()
                .AddHttpClient()
                .AddMvc()
                .AddFluentValidation(config => config.RegisterValidatorsFromAssemblyContaining<CakeValidator>())
                .AddJsonOptions(JsonSetup);
            
            services.Configure<ApiBehaviorOptions>(options =>
            {
                options.InvalidModelStateResponseFactory = ctx => new ValidationProblemDetailsResult(Log.Logger);
            });

            services.AddControllers();

            services.AddSwaggerGen();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILogger logger)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.ConfigureExceptionHandler(logger)
                .UseAuthentication()
                .UseAuthorization()
                .UseHttpsRedirection()
                .UseRouting()
                .UseEndpoints(endpoints => { endpoints.MapControllers(); })
                //.UseMiddleware<SerilogMiddleware>(Log.ForContext<SerilogMiddleware>()) XXX_TEXT___XXX
                .UseRequestLocalization()
                .UseHttpsRedirection()
                .UseSwagger()
                .UseSwaggerUI(options =>
                {
                    options.SwaggerEndpoint($"{(env.IsProduction() ? "/Prod" : string.Empty)}/swagger/v1/swagger.json", "Cake It Web API");
                    options.RoutePrefix = string.Empty;
                });
        }

        private void JsonSetup(JsonOptions options)
        {
            options.JsonSerializerOptions.IgnoreNullValues = true;
            options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
            options.JsonSerializerOptions.PropertyNameCaseInsensitive = true;
            options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
        }

    }
}
