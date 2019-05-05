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

        public long CreateCard(CardRequest request)
        {
            return _provider.CreateCard(request);
        }

        public BoardViewModel GetBoard(long id)
        {
            return _provider.GetBoard(id);
        }

        public IList<TrelloViewModel> GetBoards(long userId)
        {
            return _provider.GetBoards(userId);
        }
    }
}
