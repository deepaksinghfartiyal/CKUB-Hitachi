
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;

namespace UBuilder.Domain
{
    #region

    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    #endregion

    public abstract class DomainObject : IValidatableObject
    {
        [Key]
        public int ID { get; set; }

        [DataMember, Column("Record_Created")]
        public DateTime Created { get; set; }

        [DataMember, Column("Last_Modified")]
        public DateTime? LastUpdated { get; set; }

        public virtual IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            // Override this method to implement custom validation in your entities

            // This is only for making it compile... and returning null will give an exception.
            if (false)
                yield return new ValidationResult("Well, this should not have happened...");
        }
    }

    public abstract class DomainObject_GUID : IValidatableObject
    {
        [Key]
        public Guid ID { get; set; }

        [DataMember, Column("Record_Created")]
        public DateTime Created { get; set; }

        [DataMember, Column("Last_Modified")]
        public DateTime? LastUpdated { get; set; }

        public virtual IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            // Override this method to implement custom validation in your entities

            // This is only for making it compile... and returning null will give an exception.
            if (false)
                yield return new ValidationResult("Well, this should not have happened...");
        }
    }
}