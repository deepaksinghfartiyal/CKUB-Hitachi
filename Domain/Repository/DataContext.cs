
namespace UBuilder.Domain.Repository
{
    #region

    using System.Data.Entity;

    #endregion

    public partial class DataContext : BaseContext<DataContext>
    {
        public virtual DbSet<Designs> Designs { get; set; }

        //qz 10/20/2015
        public virtual DbSet<Dealers> Dealers { get; set; }

        public virtual DbSet<Registration> Registration { get; set;}

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<UserAttributeValue>().HasKey(p => new { p.UserID, p.UserGuidID });
            //modelBuilder.Entity<UserAttributeValue>().HasKey(p => new { p.AttributeID });
        }

        public System.Data.Entity.DbSet<UBuilder.Models.DesignViewModel> DesignViewModels { get; set; }

    }
}