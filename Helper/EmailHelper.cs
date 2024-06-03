using System;
using System.Web;
using System.Net; 
using System.Net.Mail;
using System.IO;
using System.Configuration;
using System.Text;



namespace UBuilder.Helper
{
    public class EmailHelper
    {
        public string ToAddress { get; set; }
        public string ToName { get; set; }
        public string FromAddress { get; set; }
        public string FromName { get; set; }
        public string CCAddress { get; set; }
        public string BCCAddress { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
        public string Attachment { get; set; }
        public bool IsHtml { get; set; }

        public EmailHelper()
        {
            FromAddress = ConfigurationManager.AppSettings["siteEmailFromAddress"];
            FromName = ConfigurationManager.AppSettings["siteEmailFrom"];
        }

        public void Logger(string Message)
        {
            string filepath = HttpContext.Current.Server.MapPath("~/LogFile/");  //text file path

            if (!Directory.Exists(filepath))
            {
                Directory.CreateDirectory(filepath);

            }
            filepath = filepath + DateTime.Today.ToString("dd-mm-yy") + ".txt";   //text file name
            if (!File.Exists(filepath))
            {


                File.Create(filepath).Dispose();

            }
            using (StreamWriter sw = File.AppendText(filepath))
            {


                sw.WriteLine("Console Message -----------" + Message + "  *************" + DateTime.Now.ToString() + "-----------------");
                sw.WriteLine("-------------------------------------------------------------------------------------");

                sw.Flush();
                sw.Close();

            }
        }
        // public void SendEmailSubmit(string Front, string Back, string Left, string Right)
        public void SendEmailSubmit(string[] CaptureImagePath)
        {
            bool b;
            string emailToFile;

            emailToFile = ConfigurationManager.AppSettings["emailToFile"];

            if (!bool.TryParse(emailToFile, out b))
            {
                b = false;
            }

            if (b)
            {
                WriteEmailToFile();
            }
            else
            {
                SendEmailViaSMTPSubmit(CaptureImagePath);
                //  SendEmailViaSMTPSubmit(Front, Back, Left, Right);
            }
        }
        //private void SendEmailViaSMTPSubmit(string Front, string Back, string Left, string Right)
        private void SendEmailViaSMTPSubmit(string[] CaptureImagePath)
        {
            string[] ToAddrs;
            string[] CCAddrs;
            string[] BCCAddrs;
            string[] Attachments;

            string[] emailSeparators = new string[] { ";" };
            string[] attachmentSeparators = new string[] { "^" };

            ToAddrs = ToAddress.Split(emailSeparators, StringSplitOptions.RemoveEmptyEntries);

            if (String.IsNullOrEmpty(CCAddress))
            {
                CCAddress = "";
            }
            CCAddrs = CCAddress.Split(emailSeparators, StringSplitOptions.RemoveEmptyEntries);

            if (String.IsNullOrEmpty(BCCAddress))
            {
                BCCAddress = "";
            }
            BCCAddrs = BCCAddress.Split(emailSeparators, StringSplitOptions.RemoveEmptyEntries);

            if (String.IsNullOrEmpty(Attachment))
            {
                Attachment = "";
            }
            Attachments = Attachment.Split(attachmentSeparators, StringSplitOptions.RemoveEmptyEntries);

            string mailServer = ConfigurationManager.AppSettings["emailServer"];
            string mailUser = ConfigurationManager.AppSettings["emailServerUser"];
            string mailPwd = ConfigurationManager.AppSettings["emailServerPwd"];
            int mailPort = int.Parse(ConfigurationManager.AppSettings["emailPort"]);
            string mailSSL = ConfigurationManager.AppSettings["emailServerSSL"].Trim();

            bool enableSSL = false;
            if (mailSSL.ToUpper() == "N")
            {
                enableSSL = false;
            }
            else
            {
                enableSSL = true;
            }

            MailMessage mailMsg = new MailMessage();


            //Embedded Image As Attachment  (13/3/2019)

            //if (Front != null && Back != null && Left != null && Right != null)
            //{
            //    mailMsg.Attachments.Add(new System.Net.Mail.Attachment(Front));
            //    if (Back != "")
            //        mailMsg.Attachments.Add(new System.Net.Mail.Attachment(Back));
            //    if (Left != "")
            //        mailMsg.Attachments.Add(new System.Net.Mail.Attachment(Left));
            //    if (Right != "")
            //        mailMsg.Attachments.Add(new System.Net.Mail.Attachment(Right));
            //}
            if (CaptureImagePath != null || CaptureImagePath.Length>0)
            {
               foreach(string image in CaptureImagePath)
                {
                    mailMsg.Attachments.Add(new System.Net.Mail.Attachment(image));
                }
            }
                       
            if ((!String.IsNullOrEmpty(FromName)) && (FromName.Trim() != ""))
            {
                //mailMsg.From = new MailAddress(FromAddress, FromName);
                mailMsg.From = new MailAddress(mailUser, FromName);              
            }
            else
            {             
                mailMsg.From = new MailAddress(mailUser);
                WriteErrorLog(mailMsg.From);
                Logger(FromAddress);
            }

            if (ToAddrs.Length > 1)
            {
                for (int i = 0; i < ToAddrs.Length; i++)
                {
                    mailMsg.To.Add(ToAddrs[i]);
                }
            }
            else
            {
                if ((!string.IsNullOrEmpty(ToName)) && (ToName.Trim() != ""))
                {
                    mailMsg.To.Add(new MailAddress(ToAddress, ToName));                   
                }
                else
                {
                    mailMsg.To.Add(new MailAddress(ToAddress));
                }
            }

            for (int i = 0; i < CCAddrs.Length; i++)
            {
                mailMsg.CC.Add(new MailAddress(CCAddrs[i]));
            }

            for (int i = 0; i < BCCAddrs.Length; i++)
            {
                mailMsg.Bcc.Add(new MailAddress(BCCAddrs[i]));
            }

            for (int i = 0; i < Attachments.Length; i++)
            {
                mailMsg.Attachments.Add(new Attachment(Attachments[i]));
            }

            mailMsg.Body = Body;
            mailMsg.Subject = Subject;
            mailMsg.IsBodyHtml = IsHtml;

            SmtpClient smtp = new SmtpClient(mailServer, mailPort);

            smtp.ServicePoint.MaxIdleTime = 90000;
            smtp.Timeout = 90000;
            // smtp.Host= "smtp.gmail.com";
            System.Threading.Thread.Sleep(1000);

            smtp.UseDefaultCredentials = true;
            smtp.DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network;
            if (mailUser.Trim() != "")
            {
                smtp.Credentials = new NetworkCredential(mailUser, mailPwd);
            }

            smtp.EnableSsl = enableSSL;
            //  smtp.TargetName= "STARTTLS/smtp.gmail.com";
            smtp.Send(mailMsg);

            mailMsg.Dispose();

        }
        public void SendEmail()
        {
            bool b;
            string emailToFile;

            emailToFile = ConfigurationManager.AppSettings["emailToFile"];

            if (!bool.TryParse(emailToFile, out b))
            {
                b = false;
            }

            if (b)
            {
                WriteEmailToFile();
            }
            else
            {
                SendEmailViaSMTP();
            }
        }

        private void SendEmailViaSMTP()
        {
            string[] ToAddrs;
            string[] CCAddrs;
            string[] BCCAddrs;
            string[] Attachments;

            string[] emailSeparators = new string[] {";"};
            string[] attachmentSeparators = new string[] {"^"};

            ToAddrs = ToAddress.Split(emailSeparators, StringSplitOptions.RemoveEmptyEntries);
            
            if (String.IsNullOrEmpty (CCAddress)) 
            {
                CCAddress = "";
            }
            CCAddrs = CCAddress.Split(emailSeparators, StringSplitOptions.RemoveEmptyEntries);

            if (String.IsNullOrEmpty(BCCAddress))
            {
                BCCAddress = "";
            }
            BCCAddrs = BCCAddress.Split(emailSeparators, StringSplitOptions.RemoveEmptyEntries);

            if (String.IsNullOrEmpty(Attachment))
            {
                Attachment = "";
            }
            Attachments = Attachment.Split(attachmentSeparators, StringSplitOptions.RemoveEmptyEntries);

            string mailServer = ConfigurationManager.AppSettings["emailServer"];
            string mailUser = ConfigurationManager.AppSettings["emailServerUser"];
            string mailPwd = ConfigurationManager.AppSettings["emailServerPwd"];
            int mailPort = int.Parse(ConfigurationManager.AppSettings["emailPort"]);
            string mailSSL = ConfigurationManager.AppSettings["emailServerSSL"].Trim();

            bool enableSSL = false;
            if (mailSSL.ToUpper() == "N")
            {
                enableSSL = false;
            }
            else
            {
                enableSSL = true; 
            }

            MailMessage mailMsg = new MailMessage();

            if ((!String.IsNullOrEmpty(FromName)) && (FromName.Trim() != ""))
            {
                mailMsg.From = new MailAddress(FromAddress, FromName);
            }
            else
            {
                mailMsg.From = new MailAddress(FromAddress);
            }

            if (ToAddrs.Length > 1)
            {
                for (int i = 0; i < ToAddrs.Length; i++)
                {
                    mailMsg.To.Add(ToAddrs[i]);
                }
            }
            else
            {
                if ((!string.IsNullOrEmpty(ToName)) && (ToName.Trim() != ""))
                {                    
                     mailMsg.To.Add(new MailAddress(ToAddress, ToName));
                }
                else
                {
                    mailMsg.To.Add(new MailAddress(ToAddress));
                }
            }

            for (int i = 0; i < CCAddrs.Length; i++)
            {
                mailMsg.CC.Add(new MailAddress(CCAddrs[i]));
            }

            for (int i = 0; i < BCCAddrs.Length; i++)
            {
                mailMsg.Bcc.Add(new MailAddress(BCCAddrs[i]));
            }
            
            for (int i=0; i < Attachments.Length; i++)
            {
                mailMsg.Attachments.Add (new Attachment (Attachments[i]));
            }

            mailMsg.Body = Body;
            mailMsg.Subject = Subject; 
            mailMsg.IsBodyHtml = IsHtml; 
            
            SmtpClient smtp = new SmtpClient(mailServer, mailPort);

            smtp.ServicePoint.MaxIdleTime = 90000;
            smtp.Timeout = 90000;
           // smtp.Host= "smtp.gmail.com";
            System.Threading.Thread.Sleep(1000);

            smtp.UseDefaultCredentials = true;
            smtp.DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network;
            if (mailUser.Trim() != ""){
                smtp.Credentials = new NetworkCredential (mailUser, mailPwd);
            }

            smtp.EnableSsl = enableSSL; 
          //  smtp.TargetName= "STARTTLS/smtp.gmail.com";
            smtp.Send (mailMsg);
        
            mailMsg.Dispose();
        
        }
        
        private void WriteEmailToFile()
        {
            string emailFile;
            FileStream file;
            string emailContent;

            emailFile = ConfigurationManager.AppSettings["EmailFile"];
            if (File.Exists(emailFile))
            {
                file = File.Create(emailFile);
                file.Close(); 
            }

            emailContent = "===============================================================\r\n";
            emailContent += "Email Date/Time: " + DateTime.Now + "\r\n";
            if (String.IsNullOrEmpty(FromName))
            {
                emailContent += "From: " + FromAddress + "\r\n";
            }
            else
            {
                emailContent += "From: " + FromName + " (" + FromAddress + ")\r\n";
            }
            if (string.IsNullOrEmpty(ToName))
            {
                emailContent += "To: " + ToAddress + "\r\n";
            }
            else
            {
                emailContent += "To: " + ToName + " (" + ToAddress + ")\r\n";
            }
            if (!string.IsNullOrEmpty(CCAddress))
            {
                emailContent += "CC: " + CCAddress + "\r\n";
            }
            if (!string.IsNullOrEmpty(BCCAddress))
            {
                emailContent += "BCC: " + BCCAddress + "\r\n";
            }
            emailContent += "Subject: " + Subject + "\r\n";
            emailContent += "Body: " + Body + "\r\n";

            if (!String.IsNullOrEmpty (Attachment))
            {
                emailContent += "Attachment: " + Attachment + "\r\n";
            }
            emailContent = "===============================================================\r\n";

            file = File.Open(emailFile, FileMode.Append);

            Byte[] info = new UTF8Encoding(true).GetBytes(emailContent);
            file.Write(info, 0, info.Length);
            file.Close();

        }
        
      public void WriteErrorLog_1(string ex)
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
                    stwriter.WriteLine("From User Email 123:-" + ex.ToString());
                    stwriter.WriteLine("-------------------End----------------------------");
                }
            }
            else
            {
                StreamWriter stwriter = System.IO.File.CreateText(path);
                stwriter.WriteLine("-------------------Error Log Start-----------as on " + DateTime.Now.ToString("hh:mm tt"));
                // stwriter.WriteLine("WebPage Name :" + webPageName);
                stwriter.WriteLine("From User Email123:-: " + ex.ToString());
                stwriter.WriteLine("-------------------End----------------------------");
                stwriter.Close();
            }
        }

        public void WriteErrorLog(dynamic ex)
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
                    stwriter.WriteLine("From User Email:-" + ex.ToString());
                    stwriter.WriteLine("-------------------End----------------------------");
                }
            }
            else
            {
                StreamWriter stwriter = System.IO.File.CreateText(path);
                stwriter.WriteLine("-------------------Error Log Start-----------as on " + DateTime.Now.ToString("hh:mm tt"));
                // stwriter.WriteLine("WebPage Name :" + webPageName);
                stwriter.WriteLine("From User Email:-: " + ex.ToString());
                stwriter.WriteLine("-------------------End----------------------------");
                stwriter.Close();
            }
        }


    }

}