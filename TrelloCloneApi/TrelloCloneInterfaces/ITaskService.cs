using System;
using System.Collections.Generic;
using System.Text;
using TrelloCloneViewModel.Trello;

namespace TrelloCloneInterfaces
{
    public interface ITaskService
    {
        long CreateTask(TaskRequest request);
    }
}
