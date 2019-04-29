using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Autofac;
using TrelloCloneDBInterfaces;
using TrelloCloneEF;
using TrelloCloneEF.Contexts;
using TrelloCloneEF.Providers;
using TrelloCloneInterfaces;
using TrelloCloneServices;

namespace TrelloClone
{
    public class AutofacModule: Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            // The generic ILogger<TCategoryName> service was added to the ServiceCollection by ASP.NET Core.
            // It was then registered with Autofac using the Populate method. All of this starts
            // with the services.AddAutofac() that happens in Program and registers Autofac
            // as the service provider.

            #region Services - Business Logic
            builder.RegisterType<BoardService>()
                    .As<IBoardService>()
                    .InstancePerLifetimeScope();
            #endregion

            #region Providers - Data Repository
            builder.RegisterType<BoardProvider>()
                    .As<IBoardProvider>()
                    .InstancePerLifetimeScope();
            #endregion

            #region DbContext
            builder.RegisterType<ApplicationDbContext>()
                    .As<IBoardContext>()
                    .InstancePerLifetimeScope();
            #endregion



            // assemblies scanning - in progress
            //var assemblies = Assembly.GetEntryAssembly()
            //                         .GetReferencedAssemblies()
            //                         .Select(Assembly.Load)
            //                         .Where(t => t.FullName.Contains("TrelloClone"));

            //foreach (var assembly in assemblies)
            //{
            //    builder.RegisterAssemblyTypes(assembly)
            //           .AsImplementedInterfaces();
            //}
        }
    }
}
