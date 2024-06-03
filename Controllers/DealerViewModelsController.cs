using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Mvc;
using UBuilder.Domain.EntityRepository;
using UBuilder.Models;
using PagedList;
using System.IO;
using OfficeOpenXml;
using UBuilder.Helper;

namespace UBuilder.Controllers
{
    public class DealerViewModelsController : Controller
    {
        IDealersRepository _DealersRepository;

        public DealerViewModelsController(IDealersRepository DealersRepository)
        {
            _DealersRepository = DealersRepository;
        }

        // GET: DealerViewModels
        public ActionResult Index()
        {
            if (Session[Constants.AdminSessionName] == null || Session[Constants.AdminSessionName].ToString() != "true")
                return RedirectToAction("Index", "AdminLogin", new { redirectUrl = Url.Action("Index", "DealerViewModels") });

            return View();
        }

        public ActionResult GetAllDealers(int? page)
        {
            //var pageNumber = (page ?? 1);

            var result = _DealersRepository.GetDealers();
            var returnResult = new List<DealerViewModel>();
            foreach (var item in result)
            {

                returnResult.Add(new DealerViewModel
                {
                    DealerID = item.DealerID,
                    DealerName = item.DealerName,
                    DealerEmail = item.DealerEmail
                });
            }
            return PartialView("_dealers", returnResult);//.ToPagedList(pageNumber, 5));
        }

        [HttpPost]
        public ActionResult Upload(HttpPostedFileBase file)
        {
            if (Session[Constants.AdminSessionName] == null || Session[Constants.AdminSessionName].ToString() != "true")
                return RedirectToAction("Index", "AdminLogin", new { redirectUrl = Url.Action("Index", "DealerViewModels") });


            if (file != null && file.ContentLength > 0)
            try
                {
                    //check if file uploaded is an excel file 
                    string fileExtension = Path.GetExtension(file.FileName);

                    if (fileExtension == ".xls" || fileExtension == ".xlsx")
                    {
                        string path = _DealersRepository.UploadExcel(file);

                        _DealersRepository.ImportExcel(path, fileExtension);

                        ViewBag.Message = "File uploaded successfully";
                    }
                    else
                    {
                        ViewBag.Message = "Please upload a valid excel file.";
                    }

                }
                catch (System.Exception ex)
                {
                    ViewBag.Message = "Error: " + ex.Message.ToString();
                }
            else
            {
                ViewBag.Message = "Please choose a file.";
            }
            return View("Index");
        }

        [HttpPost]
        public ActionResult Export()
        {
            if (Session[Constants.AdminSessionName] == null || Session[Constants.AdminSessionName].ToString() != "true")
                return RedirectToAction("Index", "AdminLogin", new { redirectUrl = Url.Action("Index", "DealerViewModels") });

            try
            {
                using (ExcelPackage pck = new ExcelPackage())
                {
                    var dealers = _DealersRepository.GetDealers();

                    ExcelWorksheet ws = pck.Workbook.Worksheets.Add("Dealers");
                    ws.Cells["A1"].LoadFromCollection<Domain.Results.DealersOut>(dealers, true);
                    ws.Row(1).Style.Font.Bold = true;
                    ws.Column(1).AutoFit();
                    ws.Column(2).AutoFit();
                    ws.Column(3).AutoFit();

                    //Write it back to the client
                    Response.ContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                    Response.AddHeader("content-disposition", "attachment;  filename=dealers_export.xlsx");
                    Response.BinaryWrite(pck.GetAsByteArray());
                    Response.End();
                }
     
                ViewBag.ExportMessage = "Dealer data has been exported successfully.";
            }
            catch (System.Exception ex)
            {
                ViewBag.ExportMessage = "Error: " + ex.Message;
            }

            return View("Index");
        }
    }
}