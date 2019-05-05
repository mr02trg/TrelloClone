using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrelloCloneEFModel;
using TrelloCloneViewModel.Trello;

namespace TrelloClone
{
    public class AutoMapperConfig : AutoMapper.Profile
    {
        public AutoMapperConfig()
        {
            CreateMap<Board, TrelloViewModel>();
            CreateMap<Board, BoardViewModel>().ReverseMap();
            CreateMap<Card, CardViewModel>().ReverseMap();
            CreateMap<TrelloCloneEFModel.Task, TaskViewModel>().ReverseMap();
            CreateMap<SubTask, SubTaskViewModel>().ReverseMap();
        }
    }
}
