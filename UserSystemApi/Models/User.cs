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
        [Required]
        public long UserID { get; set; }
        [StringLength(50)]
        [Index(IsUnique = true)]
        [Required]
        public string UserName { get; set; }
        //TODO: encoding
        [Required]
        [StringLength(128)]
        public string Password { get; set; }
        [Required]
        [StringLength(100)]
        public string Firstname { get; set; }
        [Required]
        [StringLength(100)]
        public string Lastname { get; set; }
        [Required]
        public string Email { get; set; }
        public DateTime DateOfBirth { get; set; }
        [StringLength(50)]
        public string Mobile { get; set; }
        [StringLength(50)]
        public string Phone { get; set; }

    }
}