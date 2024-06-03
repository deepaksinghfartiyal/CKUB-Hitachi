using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UBuilder.Domain.Results
{
    public abstract class CallResult
    {
        public bool Success { get; set; }
        public string ErrorCode { get; set; }
        public string ErrorText { get; set; }
        public int LockerCount { get; set; }
    }
}