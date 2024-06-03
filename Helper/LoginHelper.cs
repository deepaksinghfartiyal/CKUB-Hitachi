using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.IO;
using Newtonsoft.Json.Linq;

namespace UBuilder.Helper
{
    public class LoginHelper
    {
        public class CurrentUser
        {
            public string ID { get; set; }
            public string email { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public bool IsDealer { get; set; }
            public string userGUID { get; set; }
        }

        public static bool UserIsLoggedIn()
        {
            bool bLoggedIn = false;

            //SetCookie();

            //check if cookie is there 
            if (HttpContext.Current.Request.Cookies.AllKeys.Contains(Constants.CookieName))
            {
                if (HttpContext.Current.Request.Cookies[Constants.CookieName].Value != null)
                {
                    bLoggedIn = true;
                }
                else
                {
                    bLoggedIn = false;
                }
            }
            else
            {
                bLoggedIn = false;
            }

            return bLoggedIn;
        }

        public static bool UserStandard(ref CurrentUser cs)
        {
            bool bLoggedIn = false;
            cs = new CurrentUser();
            string cstring = "";
            //check if cookie is there 
            //WriteErrorForLogin("Entry");
            if (HttpContext.Current.Request.Cookies.AllKeys.Contains(Constants.CookieName))
            {
                if (HttpContext.Current.Request.Cookies[Constants.CookieName].Value != null)
                {
                    cstring = HttpContext.Current.Request.Cookies[Constants.CookieName].Value;
                    bool result = cstring.Contains("~");
                    //Get cookies from Hitachi
                    if(result)
                    {
                        char[] delimiterChars = { '~' };
                        cstring = HttpContext.Current.Request.Cookies[Constants.CookieName].Value;
                        string[] words = cstring.Split(delimiterChars);
                        string ID;
                        try
                        {
                            ID = words[1];
                            if (ID.Substring(0, 3) == "INT")
                            {
                                ID = ID.Substring(3, words[1].Length - 3);
                            }
                        }
                        catch
                        {
                            return false;
                        }
                        cs.email = words[0];
                        //  HttpContext.Current.Session["BuilderEmail"] = cs.email;

                        cs.email = cs.email.Replace("Value", "");
                        //HttpContext.Current.Session["BuilderEmail"] = cs.email;

                        try
                        {
                            cs.ID = ID;
                        }
                        catch
                        {
                            //return false;
                        }

                        cs.FirstName = words[2];
                        cs.LastName = words[3];

                        // harcode for now

                        if (words.Length < 5)
                        {
                            cs.IsDealer = false;
                        }
                        else
                        {
                            try
                            {
                                if (words[4] == "3")
                                {
                                    cs.IsDealer = true;
                                }
                                else
                                {
                                    cs.IsDealer = false;
                                }

                            }
                            catch
                            {
                                cs.IsDealer = false;
                            }

                        }

                        // reminder - 4 is the user type
                        cs.userGUID = words[5];

                        bLoggedIn = true;
                    }
                    else
                    {
                        //Get cookies from Magento
                        string decodedJasonString = System.Web.HttpUtility.UrlDecode(cstring);
                        JObject json = JObject.Parse(decodedJasonString);
                        cs = json.ToObject<CurrentUser>();
                        bLoggedIn = true;
                    }
                }
                else
                {
                    bLoggedIn = false;
                }
            }
            else
            {
                bLoggedIn = false;
            }
            return bLoggedIn;
        }

        public static void WriteErrorLog(string ex)
        {
            // string webPageName = Path.GetFileName(Request.Path);
            string errorLogFilename = "ErrorLog_" + DateTime.Now.ToString("dd-MM-yyyy") + ".txt";
            string path = System.Web.HttpContext.Current.Server.MapPath("~/Content/MyGoogleStorage/" + errorLogFilename);
            if (System.IO.File.Exists(path))
            {
                using (StreamWriter stwriter = new StreamWriter(path, true))
                {
                    stwriter.WriteLine("-------------------Cookie value-----------as on " + DateTime.Now.ToString("hh:mm tt"));
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


        public static bool UserTemp(ref CurrentUser cs)
        {
            bool bLoggedIn = false;

            cs = new CurrentUser();

            string ID = "";

            //LoginHelper.SetTempCookieTest(string.Empty);

            //check if cookie is there 
            if (HttpContext.Current.Request.Cookies.AllKeys.Contains(Constants.TempCookieName))
            {
                if (HttpContext.Current.Request.Cookies[Constants.TempCookieName].Value != null)
                {
                    ID = HttpContext.Current.Request.Cookies[Constants.TempCookieName].Value;

                    //string cookievalue = "";
                    //if(HttpContext.Current.Request.Cookies[Constants.WebStore_SessionId]== null)
                    //{
                    //    WriteErrorLog("cookie1234hithere------returning null values");
                    //}
                    //else
                    //{
                    //    cookievalue = HttpContext.Current.Request.Cookies[Constants.WebStore_SessionId].Value;
                    //    WriteErrorLog("cookie1234hithere------" + cookievalue);
                    //}

                    try
                    {
                        cs.ID = ID;
                    }
                    catch
                    {
                        return false;
                    }

                    cs.FirstName = string.Empty;
                    cs.LastName = string.Empty;

                    // harcode for now
                    cs.IsDealer = false;

                    bLoggedIn = true;
                    cs.userGUID = string.Empty;
                }
                else
                {
                    bLoggedIn = false;
                }
            }
            else
            {
                // if cookie not found, create temp
                int tempID = LoginHelper.GenerateTempID();

                LoginHelper.SetTempCookie(tempID.ToString());


                ID = HttpContext.Current.Request.Cookies[Constants.TempCookieName].Value;

                try
                {
                    cs.ID = ID;
                }
                catch
                {
                    return false;
                }

                cs.FirstName = string.Empty;
                cs.LastName = string.Empty;
                cs.userGUID = string.Empty;

                cs.IsDealer = false;
                bLoggedIn = true;
            }

            return bLoggedIn;
        }
        public static bool UserTempExists(ref CurrentUser cs)
        {
            bool bLoggedIn = false;

            cs = new CurrentUser();

            string ID = "";

            //check if cookie is there 
            if (HttpContext.Current.Request.Cookies.AllKeys.Contains(Constants.TempCookieName))
            {
                if (HttpContext.Current.Request.Cookies[Constants.TempCookieName].Value != null)
                {
                    ID = HttpContext.Current.Request.Cookies[Constants.TempCookieName].Value;


                    try
                    {
                        cs.ID = ID;
                    }
                    catch
                    {
                        return false;
                    }

                    cs.FirstName = string.Empty;
                    cs.LastName = string.Empty;

                    // harcode for now
                    cs.IsDealer = false;

                    bLoggedIn = true;
                    cs.userGUID = string.Empty;
                }
                else
                {
                    bLoggedIn = false;
                }
            }
            else
            {
                bLoggedIn = false;

            }

            return bLoggedIn;
        }

        public static int GenerateTempID()
        {
            Random random = new Random();
            int randomNumber = random.Next(0, 100000) * -1;

            return randomNumber;

            //TODO add check to db to ensure not used prior
        }

        public static void SetTempCookie(string tempID)
        {
            HttpCookie cookie = new HttpCookie(Constants.TempCookieName);

            cookie.Value = tempID;

            HttpContext.Current.Response.Cookies.Add(cookie);
        }

        //public static void SetTempCookieTest(string tempID)
        //{
        //    HttpCookie cookie = new HttpCookie(Constants.WebStore_SessionId);

        //    cookie.Value = "50miuum1ynt2vngmhlnzilld";

        //    HttpContext.Current.Response.Cookies.Add(cookie);
        //}
        public static void DeleteTempCookie()
        {
            HttpCookie cookie = new HttpCookie(Constants.TempCookieName);

            cookie.Expires = DateTime.Now.AddDays(-1d);

            HttpContext.Current.Response.Cookies.Add(cookie);
        }

        public static void Logout()
        {
            if (HttpContext.Current.Request.Cookies.AllKeys.Contains(Constants.CookieName))
            {
                HttpContext.Current.Request.Cookies.Remove(Constants.CookieName);
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
                    stwriter.WriteLine("-------------------Cookie value-----------as on " + DateTime.Now.ToString("hh:mm tt"));
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
}