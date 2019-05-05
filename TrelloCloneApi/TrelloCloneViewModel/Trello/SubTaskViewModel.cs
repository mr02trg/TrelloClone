using System;
using System.Collections.Generic;
using System.Text;

namespace TrelloCloneViewModel.Trello
{
    public class SubTaskViewModel : TrelloViewModel
    {
        public bool IsCompleted { get; set; }

        public long TaskId { get; set; }
    }
}
