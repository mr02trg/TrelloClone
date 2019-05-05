using System;
using System.Collections.Generic;
using System.Text;

namespace TrelloCloneViewModel.Trello
{
    public class TaskViewModel : TrelloViewModel
    {
        public DateTime CreatedDate { get; set; }
        public DateTime? DueDate { get; set; }

        public long CardId { get; set; }

        public IList<SubTaskViewModel> SubTasks { get; set; }
    }
}
