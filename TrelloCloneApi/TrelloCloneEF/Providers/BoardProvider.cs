using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
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
        IMapper _mapper;
        public BoardProvider(IBoardContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
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

        public BoardViewModel GetBoard(long id)
        {
            var record = _context.Boards
                                 .Include(x => x.Cards)
                                 .Include("Cards.Tasks")
                                 .Include("Cards.Tasks.SubTasks")
                                 .First(x => x.Id == id);

            return _mapper.Map<BoardViewModel>(record);
        }

        public IList<TrelloViewModel> GetBoards(long userId)
        {
            var records = _context.Boards.Where(x => x.ApplicationUserId == userId)
                                  .OrderByDescending(x => x.CreatedDate)
                                  .ToList();

            return _mapper.Map<IList<TrelloViewModel>>(records);
        }

        public long CreateCard(CardRequest request)
        {
            var newCard = new Card()
            {
                Name = request.Name,
                Priority = request.Priority,
                BoardId = request.BoardId
            };

            _context.Cards.Add(newCard);
            _context.SaveChanges();

            return newCard.Id;
        }
    }
}
