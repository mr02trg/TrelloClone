using System;
using System.Collections.Generic;
using System.Text;
using TrelloCloneViewModel.Trello;

namespace TrelloCloneInterfaces
{
    public interface IBoardService
    {
        IList<TrelloViewModel> GetBoards(long userId);
        BoardViewModel GetBoard(long id);
        long CreateBoard(long userId, TrelloRequest request);
        long CreateCard(CardRequest request);
    }
}
