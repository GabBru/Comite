using System.Web.Http;
using Comite.Models;

namespace Comite.Controllers
{
    public class UserController : ApiController
    {
        [HttpGet]
        [Route("api/User")]
        [Authorize]
        public UserModel Get()
        {
            return new UserModel("BRUNET Gabriel", true);
        }
    }
}