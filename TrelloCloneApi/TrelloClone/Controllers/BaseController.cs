using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TrelloClone.Controllers
{
    [ApiController]
    public class BaseController : ControllerBase
    {
        public long UserId
        {
            get
            {
                return Convert.ToInt64(User.Claims.FirstOrDefault(x => x.Type == "uid").Value);
            }
        }
    }
}