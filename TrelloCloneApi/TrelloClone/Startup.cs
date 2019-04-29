using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Autofac;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using TrelloCloneEF;
using TrelloCloneEFModel;

namespace TrelloClone
{
    public class Startup
    {
        private readonly IConfiguration _config;
        public IConfigurationRoot Configuration { get; private set; }

        public Startup(IConfiguration config, IHostingEnvironment env)
        {
            _config = config;

            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddEnvironmentVariables();
            this.Configuration = builder.Build();
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            #region Register DB Context
            services.AddDbContext<ApplicationDbContext>(
                                option => option.UseSqlServer(_config.GetConnectionString("DefaultConnection")));
            #endregion

            #region Register Identity Framework
            services.AddIdentity<ApplicationUser, IdentityRole<long>>(
                option =>
                {
                    option.Password.RequireDigit = false;
                    option.Password.RequiredLength = 4;
                    option.Password.RequireUppercase = false;
                    option.Password.RequireLowercase = false;
                    option.Password.RequireNonAlphanumeric = false;
                }
            )
            .AddEntityFrameworkStores<ApplicationDbContext>()
            .AddDefaultTokenProviders();
            #endregion

            #region Register JWT Authentication
            services.AddAuthentication(option =>
            {
                option.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                option.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                option.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.SaveToken = true;
                options.RequireHttpsMetadata = true;
                options.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidAudience = _config["Jwt:Site"],
                    ValidIssuer = _config["Jwt:Site"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:SigningKey"]))
                };

            });
            #endregion

            services.AddMvc();

            #region Register Swagger
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v2", new Swashbuckle.AspNetCore.Swagger.Info()
                {
                    Title = "Trello Clone Core Api",
                });
            });
            #endregion

            #region Register AutoMapper
            var config = new MapperConfiguration(
                cfg => cfg.AddProfile(new AutoMapperConfig()));

            var mapper = config.CreateMapper();
            services.AddSingleton(mapper);
            #endregion
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseAuthentication();
            app.UseMvc();

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v2/swagger.json", "Trello Clone Core Api");
            });

            // ensure db is always created
            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
                context.Database.EnsureCreated();
            }

            app.Run(async (context) =>
            {
                await context.Response.WriteAsync("Hello World!");
            });

        }

        public void ConfigureContainer(ContainerBuilder builder)
        {
            // Add any Autofac modules or registrations.
            // This is called AFTER ConfigureServices so things you
            // register here OVERRIDE things registered in ConfigureServices.
            //
            // You must have the call to AddAutofac in the Program.Main
            // method or this won't be called.
            builder.RegisterModule(new AutofacModule());
        }
    }
}
