namespace UBuilder.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddFirstName_LastName : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Designs", "FirstName", c => c.String());
            AddColumn("dbo.Designs", "LastName", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Designs", "LastName");
            DropColumn("dbo.Designs", "FirstName");
        }
    }
}
