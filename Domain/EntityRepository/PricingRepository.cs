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
using System.IO;
using System.Xml;
using System.Xml.Linq;
using System.Net.Http.Headers;
using System.Net.Http;
using System.Threading.Tasks;
using System.Net;
//using UBuilder.PricingLookup;


namespace UBuilder.Domain.EntityRepository
{
    public class PricingRepository : BaseRepository<Pricing>, IPricingRepository
    {
        public PricingRepository(IDatabaseFactory databaseFactory)
            : base(databaseFactory)
        {
        }


        #region ckstore_and_www_cliffkeen_com_latest
        public List<PriceObjOut> GetPriceForASMX(List<string> productCode, string userGUID)
        {
            List<PriceObjOut> PoList = new List<PriceObjOut>();
            string s = "";
            for (int i = 0; i < productCode.Count; i++)
            {
                PriceObjOut po = new PriceObjOut();
                po.ProductCode = productCode[i];
                com.cliffkeen.www.ItemPricing obj = new com.cliffkeen.www.ItemPricing();
                //com.ckatesting.ckstore.ItemPricing obj = new com.ckatesting.ckstore.ItemPricing();
                //WriteErrorLog(obj.Url);
                try
                {
                    s = obj.InitializePrices(productCode[i], userGUID, "1");
                    po = Price(po, s);
                }
                catch (System.Exception ex)
                {
                    po.DiscountPrice = 0;
                    po.ProductCode = productCode[i];
                    po.Quantity = 1;
                    po.TotalPrice = 0;
                    po.UnitPrice = 0;
                }
                PoList.Add(po);
            }
            return PoList;
        }
        public PriceObjOut Price(PriceObjOut po, string s)
        {
            s = s.Substring(51, s.Length - 51);
            s = s.Replace("\n", "");
            s = @"<?xml version='1.0'?>" + s;
            XDocument doc = XDocument.Parse(s);
            var elements = doc.Root.DescendantsAndSelf().Elements().Where(d => d.Name.LocalName == "Quantity");
            foreach (var e in elements)
            {
                po.Quantity = int.Parse(e.Value);
            }
            elements = doc.Root.DescendantsAndSelf().Elements().Where(d => d.Name.LocalName == "TotalPrice");
            foreach (var e in elements)
            {
                po.TotalPrice = double.Parse(e.Value);
            }
            elements = doc.Root.DescendantsAndSelf().Elements().Where(d => d.Name.LocalName == "DiscountPrice");
            foreach (var e in elements)
            {
                po.DiscountPrice = double.Parse(e.Value);
            }
            elements = doc.Root.DescendantsAndSelf().Elements().Where(d => d.Name.LocalName == "UnitPrice");
            foreach (var e in elements)
            {
                po.UnitPrice = double.Parse(e.Value);
            }
            return po;
        }
        #endregion

        #region Magento_Latest
        public List<PriceObjOut> GetPrice(List<string> productCode, string CustomerId)
        {
            //Hosted web API REST Service base url
            // string Baseurl = "https://mcstaging.cliffkeen.com/";
            GetPricingOut result = new GetPricingOut();
            string Baseurl = "https://mcprod.cliffkeen.com/";
            List<PriceObjOut> poList = new List<PriceObjOut>();
            for (int i = 0; i < productCode.Count; i++)
            {
                PriceObjOut po = new PriceObjOut();
                po.ProductCode = productCode[i];
                //WriteErrorForLogin(CustomerId);
                var StoreId = "1";
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(Baseurl);
                    client.DefaultRequestHeaders.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    var Res = client.GetAsync("itempricing?ItemCode=" + productCode[i] + "&CustomerId=" + CustomerId + "&StoreId=" + StoreId).GetAwaiter().GetResult();
                    if (Res.IsSuccessStatusCode)
                    {
                        //Storing the response details recieved from web api
                        string s = Res.Content.ReadAsStringAsync().Result;
                        if (!string.IsNullOrEmpty(s))
                        {
                            if (s.Length > 100)
                            {
                                s = s.Substring(92, s.Length - 92);
                                s = s.Remove(s.Length - 10, 10);
                                s = s.Replace("\n", "");
                                s = @"<?xml version='1.0'?>" + s;
                                XDocument doc = XDocument.Parse(s);
                                var elements = doc.Root.DescendantsAndSelf().Elements().Where(d => d.Name.LocalName == "Quantity");
                                foreach (var e in elements)
                                {
                                    po.Quantity = int.Parse(e.Value);
                                }
                                elements = doc.Root.DescendantsAndSelf().Elements().Where(d => d.Name.LocalName == "TotalPrice");
                                foreach (var e in elements)
                                {
                                    po.TotalPrice = double.Parse(e.Value);
                                }
                                elements = doc.Root.DescendantsAndSelf().Elements().Where(d => d.Name.LocalName == "DiscountPrice");
                                foreach (var e in elements)
                                {
                                    po.DiscountPrice = double.Parse(e.Value);
                                }
                                elements = doc.Root.DescendantsAndSelf().Elements().Where(d => d.Name.LocalName == "UnitPrice");
                                foreach (var e in elements)
                                {
                                    po.UnitPrice = double.Parse(e.Value);
                                }
                            }
                        }
                    }
                    poList.Add(po);
                }
            }
            return poList;
        }
        #endregion
        public void WriteErrorLog(string ex)
        {
            // string webPageName = Path.GetFileName(Request.Path);
            string errorLogFilename = "ErrorLog_" + DateTime.Now.ToString("dd-MM-yyyy") + ".txt";
            string path = System.Web.HttpContext.Current.Server.MapPath("~/Content/MyGoogleStorage/" + errorLogFilename);
            if (System.IO.File.Exists(path))
            {
                using (StreamWriter stwriter = new StreamWriter(path, true))
                {
                    stwriter.WriteLine("-------------------Error Log Start-----------as on " + DateTime.Now.ToString("hh:mm tt"));
                    // stwriter.WriteLine("WebPage Name :" + webPageName);
                    stwriter.WriteLine("pricing url==" + ex.ToString());
                    stwriter.WriteLine("-------------------End----------------------------");
                }
            }
            else
            {
                StreamWriter stwriter = System.IO.File.CreateText(path);
                stwriter.WriteLine("-------------------Error Log Start-----------as on " + DateTime.Now.ToString("hh:mm tt"));
                // stwriter.WriteLine("WebPage Name :" + webPageName);
                stwriter.WriteLine("pricing url=== " + ex.ToString());
                stwriter.WriteLine("-------------------End----------------------------");
                stwriter.Close();
            }
        }
        public static void WriteErrorForLogin(string ex)
        {
            // string webPageName = Path.GetFileName(Request.Path);
            string errorLogFilename = "ErrorLog_" + DateTime.Now.ToString("dd-MM-yyyy") + ".txt";
            string path = System.Web.HttpContext.Current.Server.MapPath("~/Content/MyGoogleStorage/" + errorLogFilename);
            if (System.IO.File.Exists(path))
            {
                using (StreamWriter stwriter = new StreamWriter(path, true))
                {
                    stwriter.WriteLine("-------------------Customer id-----------as on " + DateTime.Now.ToString("hh:mm tt"));
                    // stwriter.WriteLine("WebPage Name :" + webPageName);
                    stwriter.WriteLine(ex.ToString());
                    stwriter.WriteLine("-------------------End----------------------------");
                }
            }
            else
            {
                StreamWriter stwriter = System.IO.File.CreateText(path);
                stwriter.WriteLine("-------------------Error Log Start-----------as on " + DateTime.Now.ToString("hh:mm tt"));
                // stwriter.WriteLine("WebPage Name :" + webPageName);
                stwriter.WriteLine("cookie value=== " + ex.ToString());
                stwriter.WriteLine("-------------------End----------------------------");
                stwriter.Close();
            }
        }
    }
    public interface IPricingRepository : IRepository<Pricing>
    {
        List<PriceObjOut> GetPrice(List<string> productCode, string CustomerId);
        List<PriceObjOut> GetPriceForASMX(List<string> productCode, string userGUID);
    }
}