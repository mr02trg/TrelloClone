using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using TrelloCloneEFModel;

namespace TrelloCloneEF.Contexts
{
    public interface ITaskContext
    {
        DbSet<Task> Tasks { get; set; }
        DbSet<SubTask> SubTasks { get; set; }

        int SaveChanges();
    }
}
