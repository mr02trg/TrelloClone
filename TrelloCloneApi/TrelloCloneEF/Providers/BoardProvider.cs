using System;
using System.Collections.Generic;
using System.Text;
using TrelloCloneDBInterfaces;
using TrelloCloneEF.Contexts;
using TrelloCloneEFModel;
using TrelloCloneViewModel.Trello;

namespace TrelloCloneEF.Providers
{
    public class BoardProvider : IBoardProvider
    {
        IBoardContext _context;
        public BoardProvider(IBoardContext context)
        {
            _context = context;
        }

        public long CreateBoard(long userId, TrelloRequest request)
        {
            var newBoard = new Board()
            {
                Name = request.Name,
                Description = request.Description,
                CreatedDate = DateTime.UtcNow,
                ApplicationUserId = userId
            };

            _context.Boards.Add(newBoard);
            _context.SaveChanges();

            return newBoard.Id;
        }

        public TrelloViewModel GetBoard(long id)
        {
            throw new NotImplementedException();
        }

        public IList<TrelloViewModel> GetBoards(long userId)
        {
            throw new NotImplementedException();
        }
    }
}
