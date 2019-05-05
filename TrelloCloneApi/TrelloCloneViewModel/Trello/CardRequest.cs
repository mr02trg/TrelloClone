using System;
using System.Collections.Generic;
using System.Text;

namespace TrelloCloneViewModel.Trello
{
    public class CardRequest
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public int Priority { get; set; }
        public long BoardId { get; set; }
    }
}
