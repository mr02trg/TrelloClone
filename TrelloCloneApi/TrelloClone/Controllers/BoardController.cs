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
    [Route("api/[controller]")]
    public class BoardController : ControllerBase
    {
        private IBoardService _service;

        public BoardController(IBoardService service)
        {
            _service = service;
        }

        [HttpGet]
        public ActionResult Get()
        {
            IList<TrelloViewModel> boards = _service.GetBoards(0);
            return Ok(
            new
            {
                data = boards
            });
        }

        // GET api/<controller>/{id}
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(TrelloViewModel), 200)]
        public ActionResult Get(int id)
        {
            var board = _service.GetBoard(id);
            return Ok(new {
                data = board
            });
        }

        [HttpPost]
        public ActionResult Create([FromBody]TrelloRequest request)
        {
            long boardId = _service.CreateBoard(1, request);
            return Ok(new
            {
                data = boardId
            });
        }
    }
}