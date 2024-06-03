
using UBuilder.Domain.Repository;
namespace UBuilder.Domain.Repository
{
    public partial class DatabaseFactory : IDatabaseFactory
    {
        private IDataContext _datacontext;

        public IDataContext Get()
        {
            return this._datacontext ?? (_datacontext = new DataContext());
        }

        public void Dispose()
        {
            // TODO: Check what ninject does, because if we dispose this it will crash!
        }
    }
}