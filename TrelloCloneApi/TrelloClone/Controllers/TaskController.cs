using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TrelloCloneInterfaces;
using TrelloCloneViewModel.Trello;

namespace TrelloClone.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : BaseController
    {
        ITaskService _service;
        public TaskController(ITaskService service)
        {
            _service = service;
        }

        [HttpPost("create")]
        public ActionResult Create([FromBody]TaskRequest request)
        {
            long taskId = _service.CreateTask(request);
            return Ok(new
            {
                data = taskId
            });
        }
    }
}