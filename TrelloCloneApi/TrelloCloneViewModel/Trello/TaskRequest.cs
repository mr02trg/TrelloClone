using System;
using System.Collections.Generic;
using System.Text;

namespace TrelloCloneViewModel.Trello
{
    public class TaskRequest : TrelloViewModel
    {
        public int Priority { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? DueDate { get; set; }

        public long CardId { get; set; }
    }
}
