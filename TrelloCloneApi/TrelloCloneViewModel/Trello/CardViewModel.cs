using System;
using System.Collections.Generic;
using System.Text;

namespace TrelloCloneViewModel.Trello
{
    public class CardViewModel : TrelloViewModel
    {
        public int Priority { get; set; }
        public bool IsArchived { get; set; }

        public long BoardId { get; set; }

        public IList<TaskViewModel> Tasks { get; set; }
    }
}
