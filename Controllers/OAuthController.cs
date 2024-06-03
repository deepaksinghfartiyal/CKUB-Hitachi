using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using LinqToTwitter;
using UBuilder.Models;

namespace UBuilder.Controllers
{
    public class OAuthController : AsyncController
    {
        // GET: OAuth
        public ActionResult Index(string id,string returnUrl,string CurrentUser)
        {
            TempData["imgPath"] = id;
            TempData["returnUrl"] = returnUrl;
            TempData["CurrentUser"] = CurrentUser;
            if (!new SessionStateCredentialStore().HasAllCredentials())
            {
                return RedirectToAction("Begin", "OAuth");

            }
            return RedirectToAction("UploadImage", "OAuth");
            // return View();
        }
        public async Task<ActionResult> BeginAsync()
        {
            //var auth = new MvcSignInAuthorizer
            var auth = new MvcAuthorizer
            {
                CredentialStore = new SessionStateCredentialStore
                {
                    ConsumerKey = ConfigurationManager.AppSettings["consumerKey"],
                    ConsumerSecret = ConfigurationManager.AppSettings["consumerSecret"]
                }
            };

            string twitterCallbackUrl = Request.Url.ToString().Replace("Begin", "Complete");
            Uri callBack = new Uri(twitterCallbackUrl);

            return await auth.BeginAuthorizationAsync(callBack);
        }

        public async Task<ActionResult> CompleteAsync()
        {
            var auth = new MvcAuthorizer
            {
                CredentialStore = new SessionStateCredentialStore()
            };

            await auth.CompleteAuthorizeAsync(Request.Url);

            // This is how you access credentials after authorization.
            // The oauthToken and oauthTokenSecret do not expire.
            // You can use the userID to associate the credentials with the user.
            // You can save credentials any way you want - database, 
            //   isolated storage, etc. - it's up to you.
            // You can retrieve and load all 4 credentials on subsequent 
            //   queries to avoid the need to re-authorize.
            // When you've loaded all 4 credentials, LINQ to Twitter will let 
            //   you make queries without re-authorizing.
            //
            //var credentials = auth.CredentialStore;
            //string oauthToken = credentials.OAuthToken;
            //string oauthTokenSecret = credentials.OAuthTokenSecret;
            //string screenName = credentials.ScreenName;
            //ulong userID = credentials.UserID;
            //

            return RedirectToAction("UploadImage", "OAuth");
        }
        [ActionName("UploadImage")]
        public async Task<ActionResult> UploadImageAsync()
        {
            var auth = new MvcAuthorizer
            {
                CredentialStore = new SessionStateCredentialStore()
            };

            var twitterCtx = new LinqToTwitter.TwitterContext(auth);

            string returnUrl = Convert.ToString(TempData["returnUrl"]);
            string LoggedInUser = Convert.ToString(TempData["CurrentUser"]);

            string status = $"Cliff Keen Uniform Builder " + returnUrl + "    " + "Created on the CliffKeen Athletic Uniform Builder by" + "\"" + LoggedInUser + "\"";
         //   string status = "https://google.com"; 
            string mediaCategory = "tweet_image";

            //string path = Server.MapPath("..\\Content\\CartImages\\shubham.jpg");
            string AbsolutePath = Convert.ToString(TempData["imgPath"]);
            string local = new Uri(AbsolutePath).LocalPath;
            string path = Server.MapPath(local);

            var imageUploadTasks =
                new List<Task<Media>>
                {
                    //twitterCtx.UploadMediaAsync(System.IO.File.ReadAllBytes(path), "image/jpg", mediaCategory),
                    twitterCtx.UploadMediaAsync(System.IO.File.ReadAllBytes(path)),

                };

            await Task.WhenAll(imageUploadTasks);

            List<ulong> mediaIds =
                (from tsk in imageUploadTasks
                 select tsk.Result.MediaID)
                .ToList();

            Status tweet = await twitterCtx.TweetAsync(status, mediaIds);
        
            

            return View(
                new TweetViewModel
                {
                    ImageUrl = tweet.User.ProfileImageUrl,
                    ScreenName = tweet.User.ScreenNameResponse,
                    Text = tweet.Text
                });
        }

    }
}