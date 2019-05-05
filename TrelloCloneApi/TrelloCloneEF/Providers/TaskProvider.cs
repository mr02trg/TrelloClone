using System;
using System.Collections.Generic;
using System.Text;
using TrelloCloneDBInterfaces;
using TrelloCloneEF.Contexts;
using TrelloCloneEFModel;
using TrelloCloneViewModel.Trello;

namespace TrelloCloneEF.Providers
{
    public class TaskProvider : ITaskProvider
    {
        private ITaskContext _context;
        public TaskProvider(ITaskContext context)
        {
            _context = context;
        }

        public long CreateTask(TaskRequest request)
        {
            Task newTask = new Task()
            {
                CardId = request.CardId,
                CreatedDate = DateTime.UtcNow,
                Priority = request.Priority,
                Name = request.Name
            };

            _context.Tasks.Add(newTask);
            _context.SaveChanges();

            return newTask.Id;
        }
    }
}
