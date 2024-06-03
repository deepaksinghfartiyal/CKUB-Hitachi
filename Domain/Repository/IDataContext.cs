
using System.Data.Entity.Core.Objects;

namespace UBuilder.Domain.Repository
{
    #region

    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;

    #endregion

    public interface IDataContext
    {
        ObjectContext ObjectContext();
        IDbSet<T> DbSet<T>() where T : DomainObject;
        DbEntityEntry Entry<T>(T entity) where T : DomainObject;

        void Dispose();
    }
}