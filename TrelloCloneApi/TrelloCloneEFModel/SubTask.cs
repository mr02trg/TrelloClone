using System;
using System.Collections.Generic;
using System.Text;

namespace TrelloCloneEFModel
{
    public class SubTask : BaseModel
    {
        public bool IsCompleted { get; set; }

        public long TaskId { get; set; }
        public Task Task { get; set; }
    }
}
