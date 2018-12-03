using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace UserSystemApi.Models
{
    public class User
    {
        [Key]
        public long UserID { get; set; }
        [StringLength(16)]
        [Index(IsUnique = true)]
        [Required]
        public string UserName { get; set; }
        //TODO: encoding
        [Required]
        public string Password { get; set; }
        public string NickName { get; set; }
        public string Email { get; set; }
        public string MobilePhone { get; set; }

    }
}