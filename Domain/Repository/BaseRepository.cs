
namespace UBuilder.Domain.Repository
{
    #region

    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Data.Entity;
    using System.Linq;
    using System.Linq.Expressions;
    using UBuilder.Domain.Repository;

    #endregion

    /// <summary>
    /// An abstract baseclass handling basic CRUD operations against the context.
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public abstract class BaseRepository<T> : IDisposable, IRepository<T> where T : DomainObject
    {
        protected readonly IDbSet<T> _dbset;
        protected readonly IDatabaseFactory _databaseFactory;
        private IDataContext _context;

        protected BaseRepository(IDatabaseFactory databaseFactory)
        {
            this._databaseFactory = databaseFactory;
            this._dbset = this.DataContext.DbSet<T>();
        }

        public virtual IQueryable<T> Query
        {
            get { return _dbset; }
        }

        public IDataContext DataContext
        {
            get { return this._context ?? (this._context = this._databaseFactory.Get()); }
        }

        protected string EntitySetName { get; set; }

        public virtual void SaveOrUpdate(T entity)
        {
            if (UnitOfWork.IsPersistent(entity))
            {
                this.DataContext.Entry(entity).State = EntityState.Modified;
            }
            else
                this._dbset.Add(entity);

            this.DataContext.ObjectContext().SaveChanges();
        }

        public virtual T GetById(int id)
        {
            return this.Query.FirstOrDefault(e => e.ID == id);
        }

        public virtual IQueryable<T> GetAll()
        {
            return this.Query;
        }

        public virtual IQueryable<T> GetAllReadOnly()
        {
            return this.Query.AsNoTracking();
        }

        public virtual void Delete(T entity)
        {
            this._dbset.Remove(entity);
        }

        public void BulkDelete(List<int> keys)
        {
            keys.ForEach(i => Delete(GetById(i)));
        }

        public virtual IEnumerable<T> Find(Expression<Func<T, bool>> expression, int maxHits = 100)
        {
            return this.Query.Where(expression).Take(maxHits);
        }

        public long Count()
        {
            return _dbset.LongCount();
        }

        public long Count(Expression<Func<T, bool>> expression)
        {
            return expression != null ? _dbset.Where(expression).LongCount() : Count();
        }

        public void Dispose()
        {
            DataContext.ObjectContext().Dispose();
        }

        

    }
}