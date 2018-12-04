using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Reflection.Emit;
using System.Web;

namespace UserSystemApi.Models
{
    public class UserContext : DbContext
    {
        public UserContext() : base("User")
        {

        }


        public DbSet<User> User { get; set; }
    }
}