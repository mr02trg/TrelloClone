using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using TrelloCloneEFModel;

namespace TrelloCloneEF.Contexts
{
    public interface IBoardContext
    {
        DbSet<Board> Boards { get; set; }

        int SaveChanges();
    }
}
