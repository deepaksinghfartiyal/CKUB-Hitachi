
namespace UBuilder.Domain.Repository
{
    #region

    using System;

    #endregion

    public interface IDatabaseFactory : IDisposable
    {
        IDataContext Get();
    }
}