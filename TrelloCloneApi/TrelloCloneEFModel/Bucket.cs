using System;
using System.Collections.Generic;
using System.Text;

namespace TrelloCloneEFModel
{
    public class Bucket : BaseModel
    {
        public int Priority { get; set; }
        public bool IsArchived { get; set; }

        public long BoardId { get; set; }
        public Board Board { get; set; }

        public ICollection<Task> Tasks { get; set; }
    }
}
