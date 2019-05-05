using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using TrelloCloneEF.Contexts;
using TrelloCloneEFModel;

namespace TrelloCloneEF
{
    public class ApplicationDbContext: IdentityDbContext<ApplicationUser, IdentityRole<long>, long>,
                                       IBoardContext,
                                       ITaskContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        {
        }

        public DbSet<Board> Boards { get; set; }
        public DbSet<Card> Cards { get; set; }
        public DbSet<Task> Tasks { get; set; }
        public DbSet<SubTask> SubTasks { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            #region Customise table
            builder.Entity<ApplicationUser>(b =>
            {
                b.ToTable("Users");
            });

            builder.Entity<IdentityUserClaim<long>>(b =>
            {
                b.ToTable("UserClaims");
            });

            builder.Entity<IdentityUserLogin<long>>(b =>
            {
                b.ToTable("UserLogins");
            });

            builder.Entity<IdentityUserToken<long>>(b =>
            {
                b.ToTable("UserTokens");
            });

            builder.Entity<IdentityRole<long>>(b =>
            {
                b.ToTable("Roles");
            });

            builder.Entity<IdentityRoleClaim<long>>(b =>
            {
                b.ToTable("RoleClaims");
            });

            builder.Entity<IdentityUserRole<long>>(b =>
            {
                b.ToTable("UserRoles");
            });
            #endregion

            #region Seed
            builder.Entity<IdentityRole<long>>().HasData(
                new IdentityRole<long>()
                {
                    Id = 1,
                    Name = "Admin",
                    NormalizedName = "ADMIN"
                },
                new IdentityRole<long>()
                {
                    Id = 2,
                    Name = "End User",
                    NormalizedName = "EU"
                }
                );
            #endregion
        }
    }
}
