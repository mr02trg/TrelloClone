﻿using System;
using System.Collections.Generic;
using System.Text;

namespace TrelloCloneEFModel
{
    public class Task : BaseModel
    {
        public string Description { get; set; }
        public int Priority { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? DueDate { get; set; }

        public long CardId { get; set; }
        public Card Card { get; set; }

        public ICollection<SubTask> SubTasks { get; set; }
    }
}
