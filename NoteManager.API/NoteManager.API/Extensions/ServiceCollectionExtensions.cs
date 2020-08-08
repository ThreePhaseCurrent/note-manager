using Microsoft.Extensions.DependencyInjection;
using NoteManager.API.Services;
using NoteManager.API.Services.Interfaces;
using NoteManager.Core.Repositories;
using NoteManager.Core.Repositories.Interfaces;

namespace NoteManager.API.Extensions
{
    public static class ServiceCollectionExtensions
    {
        /// <summary>
        /// Register services
        /// </summary>
        /// <param name="services"></param>
        public static void AddServices(this IServiceCollection services)
        {
            services.AddTransient(typeof(INoteService), typeof(NoteService));        
        }
    }
}