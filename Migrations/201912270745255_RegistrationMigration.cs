namespace UBuilder.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RegistrationMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Registration",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        UserName = c.String(maxLength: 100),
                        Email = c.String(maxLength: 100),
                        Password = c.String(maxLength: 50),
                        Record_Created = c.DateTime(nullable: false),
                        Last_Modified = c.DateTime(),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Registration");
        }
    }
}
