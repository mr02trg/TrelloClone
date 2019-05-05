using System;
using System.Collections.Generic;
using System.Text;
using TrelloCloneViewModel.Trello;

namespace TrelloCloneDBInterfaces
{
    public interface ITaskProvider
    {
        long CreateTask(TaskRequest request);
    }
}
