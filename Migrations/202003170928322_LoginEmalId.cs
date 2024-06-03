namespace UBuilder.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class LoginEmalId : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Designs", "LoginEmail", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Designs", "LoginEmail");
        }
    }
}
