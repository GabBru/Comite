using System;
using System.Web.Mvc;

namespace Comite.Controllers
{
    public class AppController : Controller
    {
        public void Index()
        {
            string content = System.IO.File.ReadAllText(Server.MapPath("~/wwwroot/browser/index.html"));
            Response.Write(content);
        }
    }
}