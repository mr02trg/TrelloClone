using System;
using System.Collections.Generic;
using System.Text;
using TrelloCloneViewModel.Trello;

namespace TrelloCloneDBInterfaces
{
    public interface IBoardProvider
    {
        IList<TrelloViewModel> GetBoards(long userId);
        BoardViewModel GetBoard(long id);
        long CreateBoard(long userId, TrelloRequest request);
        long CreateCard(CardRequest request);
    }
}
