using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Comite
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            // Ignorer la route pour le répertoire wwwroot/browser
            routes.IgnoreRoute("browser/{*pathInfo}");

            // Route par défaut pour Angular
            routes.MapRoute(
                name: "AngularApp",
                url: "{*url}",
                defaults: new { controller = "App", action = "Index" }
            );
        }
    }
}