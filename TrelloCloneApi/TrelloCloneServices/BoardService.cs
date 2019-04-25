using System;
using System.Collections.Generic;
using System.Text;
using TrelloCloneDBInterfaces;
using TrelloCloneInterfaces;
using TrelloCloneViewModel.Trello;

namespace TrelloCloneServices
{
    public class BoardService : IBoardService
    {
        IBoardProvider _provider;
        public BoardService(IBoardProvider provider)
        {
            _provider = provider;
        }

        public long CreateBoard(long userId, TrelloRequest request)
        {
            return _provider.CreateBoard(userId, request);
        }

        public TrelloViewModel GetBoard(long id)
        {
            var board = new TrelloViewModel()
            {
                Id = 1,
                Name = "Board 1",
                Description = "Dummy Data"
            };
            return board;
        }

        public IList<TrelloViewModel> GetBoards(long userId)
        {
            return new List<TrelloViewModel>();
        }
    }
}
