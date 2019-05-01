using AutoMapper;
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

        public TrelloViewModel GetBoard(long id)
        {
            var record = _context.Boards.First(x => x.Id == id);

            return _mapper.Map<TrelloViewModel>(record);
        }

        public IList<TrelloViewModel> GetBoards(long userId)
        {
            var records = _context.Boards.Where(x => x.ApplicationUserId == userId)
                                  .OrderByDescending(x => x.CreatedDate)
                                  .ToList();

            return _mapper.Map<IList<TrelloViewModel>>(records);
        }
    }
}
