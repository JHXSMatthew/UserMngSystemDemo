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
        [StringLength(50)]
        [Index(IsUnique = true)]
        [Required]
        public string UserName { get; set; }
        //TODO: encoding
        [Required]
        [PasswordValidationAttribute()]
        public string Password { get; set; }
        [Required]
        [StringLength(100)]
        [DataType(DataType.Password)]
        public string Firstname { get; set; }
        [Required]
        [StringLength(100)]
        public string Lastname { get; set; }
        [Required]
        [DataType(DataType.EmailAddress)]
        [EmailAddress]
        public string Email { get; set; }
        public DateTime DateOfBirth { get; set; } = DateTime.MaxValue;
        [StringLength(50)]
        public string Mobile { get; set; }
        [StringLength(50)]
        public string Phone { get; set; }

    }

    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field, AllowMultiple = false)]
    sealed public class PasswordValidationAttribute : ValidationAttribute
    {

        

        public override bool IsValid(object value)
        {
            if (!(value is string))
            {
                return false;
            }
            string parsedValue = value as string;

            return !string.IsNullOrEmpty(parsedValue) &&  //not empty
                parsedValue.Length >= 8 && //min length is 8
                parsedValue.Length <= 255 && //max length (db) is 255
                parsedValue.ToLowerInvariant() != parsedValue && //contain letter at least two letters and contain at least one upper and one lower, 
                parsedValue.Any(c => char.IsDigit(c)); //contain number
        }


        public override string FormatErrorMessage(string name)
        {
            return String.Format("Password should be minimum 8 characters in length and contain both letters and numbers, at least one uppercase letter.");
        }

    }

}