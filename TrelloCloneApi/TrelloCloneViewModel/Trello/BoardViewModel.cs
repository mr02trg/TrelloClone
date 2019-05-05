using System;
using System.Collections.Generic;
using System.Text;

namespace TrelloCloneViewModel.Trello
{
    public class BoardViewModel : TrelloViewModel
    {
        public DateTime CreatedDate { get; set; }
        public long ApplicationUserId { get; set; }

        public IList<CardViewModel> Cards { get; set; } 
    }
}
