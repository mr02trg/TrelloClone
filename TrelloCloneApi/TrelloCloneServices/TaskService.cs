using System;
using System.Collections.Generic;
using System.Text;
using TrelloCloneDBInterfaces;
using TrelloCloneInterfaces;
using TrelloCloneViewModel.Trello;

namespace TrelloCloneServices
{
    public class TaskService : ITaskService
    {
        private ITaskProvider _provider;
        public TaskService(ITaskProvider provider)
        {
            _provider = provider;
        }

        public long CreateTask(TaskRequest request)
        {
            return _provider.CreateTask(request);
        }
    }
}
