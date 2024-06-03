using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;

namespace UBuilder.Migrations
{
    public class _20170927114900_DealerIDChange : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Dealers", "DealerID", c => c.String(maxLength: 250));
        }

        public override void Down()
        {
        }
    }
}