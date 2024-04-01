namespace Comite.Models
{
    public class UserModel
    {
        public string Fullname { get; set; }
        public bool IsAuthorized { get; set; }

        public UserModel(string fullname, bool isAuthorized)
        {
            Fullname = fullname;
            IsAuthorized = isAuthorized;
        }
    }
}