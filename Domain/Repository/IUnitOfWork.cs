
namespace UBuilder.Domain.Repository
{
    public interface IUnitOfWork
    {
        int Commit();
    }
}