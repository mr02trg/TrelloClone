using System;
using System.Collections.Generic;
using System.Text;

namespace TrelloCloneEFModel
{
    public class Board : BaseModel
    {
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }

        public long ApplicationUserId { get; set; }
        ApplicationUser ApplicationUser { get; set; }

        public ICollection<Card> Cards { get; set; }
    }
}
