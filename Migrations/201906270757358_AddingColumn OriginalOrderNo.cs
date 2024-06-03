namespace UBuilder.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddingColumnOriginalOrderNo : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Designs", "OriginalOrderNo", c => c.String(maxLength: 50));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Designs", "OriginalOrderNo");
        }
    }
}
