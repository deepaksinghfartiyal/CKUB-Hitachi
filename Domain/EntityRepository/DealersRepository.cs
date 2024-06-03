using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UBuilder.Domain;
using UBuilder.Domain.Repository;
using UBuilder.Domain.Results;
using UBuilder.Helper;
using System.Data;
using System.Data.OleDb;
using OfficeOpenXml;

namespace UBuilder.Domain.EntityRepository
{
    public class DealersRepository : BaseRepository<Dealers>, IDealersRepository
    {
        public DealersRepository(IDatabaseFactory databaseFactory)
            : base(databaseFactory)
        {
        }

        /// <summary>
        /// Get all dealers
        /// </summary>
        /// <returns>List of dealers</returns>
        public List<DealersOut> GetDealers()
        {
            var query = GetAll().OrderBy(x => x.DealerName );

            var result = (from re in query
                          select new DealersOut
                          {
                              DealerID = re.DealerID,
                              DealerName = re.DealerName,
                              DealerEmail = re.DealerEmail 
                          });

            return new List<DealersOut>(result);
        }


        /// <summary>
        /// Uploads an excel file 
        /// </summary>
        /// <param name="file"></param>
        /// <returns></returns>
        public string UploadExcel(HttpPostedFileBase file)
        {
            string path = Constants.basicPath + "\\" + Constants.exlFolder;
            Helper.FileHelper.CheckFileExistsOrCreate(path);

            var filePath = path + "\\" + file.FileName;
            Helper.FileHelper.CheckFileExistsOrDelete(filePath);
            file.SaveAs(filePath);
            
            return filePath;
        }

        /// <summary>
        /// Imports an excel file 
        /// </summary>
        /// <param name="fileLocation"></param>
        /// <param name="fileExtension"></param>
        /// <returns></returns>
        public void ImportExcel(string fileLocation, string fileExtension)
        {
            try
            {
                using (ExcelPackage pck = new ExcelPackage(new System.IO.FileInfo(fileLocation)))
                {
                    if (pck.Workbook != null && pck.Workbook.Worksheets != null && pck.Workbook.Worksheets.Count > 0)
                    {
                        // Assume first sheet is our sheet
                        var sheet = pck.Workbook.Worksheets[1];
                        var dimention = sheet.Dimension;

                        if (dimention.Rows > 1)
                        {
                            DeleteAllDealers();

                            for (int i = 2; i <= dimention.Rows; i++)
                            {
                                string dealerID = sheet.GetValue<string>(i, 1);
                                string dealerName = sheet.GetValue<string>(i, 2);
                                string dealerEmail = sheet.GetValue<string>(i, 3);

                                SaveDealer(dealerID, dealerName, dealerEmail);
                            }
                        }
                    }
                }
            }
            catch (System.Exception ex)
            {
                throw;
            }            
        }

        /// <summary>
        /// Delete all from dealer table 
        /// </summary>
        /// <returns></returns>
        public void DeleteAllDealers()
        {
            var query = GetAll();
            
            foreach (Dealers re in query)
            {
                Delete(re);
                
            }

            DataContext.ObjectContext().SaveChanges();

        }

        /// <summary>
        /// Deletes a dealer
        /// </summary>
        /// <param name="dealerID"></param>
        //public void DeleteDealer(int dealerID)
        //{
        //    var query = GetById(dealerID);
        //    Delete(query);
        //    DataContext.ObjectContext().SaveChanges();
        //}

        /// <summary>
        /// Save excel file info into table  
        /// </summary>
        /// <param name="dealerID"></param>
        /// <param name="dealerName"></param>
        /// <param name="dealerEmail"></param>
        /// <returns></returns>
        public void SaveDealer(string dealerID, string dealerName, string dealerEmail)
        {
            Dealers dealerObj = new Dealers();

            dealerObj.DealerID = dealerID;
            dealerObj.DealerName = dealerName;
            dealerObj.DealerEmail = dealerEmail; 
            
            SaveOrUpdate(dealerObj);
        }

    }

    public interface IDealersRepository : IRepository<Dealers>
    {
        List<DealersOut> GetDealers();
        string UploadExcel(HttpPostedFileBase file);
        void ImportExcel(string fileLocation, string fileExtension);
        void DeleteAllDealers();
        void SaveDealer(string dealerID, string dealerName, string dealerEmail);
    }
}