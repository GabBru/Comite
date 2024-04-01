using System;
using System.Web.UI;

namespace Comite.Views
{
    public partial class app : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // Read and write index.html content to the response
            ServeIndexHtml(Server.MapPath("~/wwwroot/browser/index.html"));
        }

        private void ServeIndexHtml(string indexPath)
        {
            string content = System.IO.File.ReadAllText(indexPath);
            Response.Write(content);
        }
    }
}