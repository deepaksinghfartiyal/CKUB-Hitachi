using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace UBuilder.Helper
{
    public static class FileHelper
    {
        public static void CheckFileExistsOrCreate(string Path)
        {            
            try
            {
                // If the directory doesn't exist, create it.
                if (!Directory.Exists(Path))
                {
                    Directory.CreateDirectory(Path);
                }
            }
            catch (System.Exception)
            {
                // Fail silently
            }
        }


        //qz 10/22/15
        public static void CheckFileExistsOrDelete(string filePathAndName)
        {
            try
            {
                //if the file exists, delete it 
                if (File.Exists(filePathAndName))
                {
                    File.Delete(filePathAndName);
                }
            }
            catch (System.Exception)
            {
                //fail silently
            }
        }
    }
}