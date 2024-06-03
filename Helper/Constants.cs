using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UBuilder.Helper
{
    public static class Constants
    {
        public static string imgFolder = "imgFolder";
        public static string zipFolder = "zipFolder";
        public static string basicPath = System.Web.HttpContext.Current.Server.MapPath("~/UploadFiles");

        //qz 10/21/15
        public static string exlFolder = "exlFolder";

        //qz 11/30/15 
        public static string CookieName = "Clifkeen_UserNameInfo";
        public static string TempCookieName = "Clifkeen_TempInfo";

        public static string AdminSessionName = "CLIFFADMIN";

        public static string WebStore_SessionId = "WebStore_SessionId";

        //public static string AdminWebStore_SessionId = "WebStore_SessionId";

        //public static string Adminuserdata = "userdata";


    }
}