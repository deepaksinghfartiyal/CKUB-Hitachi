namespace UBuilder.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using UBuilder.Domain;

    internal sealed class Configuration : DbMigrationsConfiguration<UBuilder.Domain.Repository.DataContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(UBuilder.Domain.Repository.DataContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            context.Designs.Add(new Designs
            {
                Category = "Category 1",
                Created = DateTime.Now,
                Customization = "XML String",
                DealerId = "100",
                DesignGUID = Guid.NewGuid(),
                EmailBody = "Email Body Text1",
                EmailFrom = "test1@test.com",
                EmailMessage = "EMail Message1",
                EmailTo = "emailto@test.com",
                Image_path = "ImagePath1",
                LastUpdated = DateTime.Now,
                Notes = "Notes 1",
                ProductId = "300",
                Quantities ="30",
                UserId = "3000",
                Zip_path = "Zip-Path1",
                Status = "Add to Cart"
            });
            context.Designs.Add(new Designs
            {
                Category = "Category 2",
                Created = DateTime.Now,
                Customization = "XML String",
                DealerId = "100",
                DesignGUID = Guid.NewGuid(),
                EmailBody = "Email Body Text2",
                EmailFrom = "test1@test.com",
                EmailMessage = "EMail Message2",
                EmailTo = "emailto@test.com",
                Image_path = "ImagePath2",
                LastUpdated = DateTime.Now,
                Notes = "Notes 2",
                ProductId = "300",
                Quantities = "30",
                UserId = "3000",
                Zip_path = "Zip-Path2",
                Status = "Ordered"
            });
            context.Designs.Add(new Designs
            {
                Category = "Category 3",
                Created = DateTime.Now,
                Customization = "XML String",
                DealerId = "300",
                DesignGUID = Guid.NewGuid(),
                EmailBody = "Email Body Text3",
                EmailFrom = "test1@test.com",
                EmailMessage = "EMail Message3",
                EmailTo = "emailto@test.com",
                Image_path = "ImagePath3",
                LastUpdated = DateTime.Now,
                Notes = "Notes 3",
                ProductId = "300",
                Quantities = "30",
                UserId = "3000",
                Zip_path = "Zip-Path3",
                Status = ""
            });
            context.Designs.Add(new Designs
            {
                Category = "Category 4",
                Created = DateTime.Now,
                Customization = "XML String",
                DealerId = "400",
                DesignGUID = Guid.NewGuid(),
                EmailBody = "Email Body Text4",
                EmailFrom = "test1@test.com",
                EmailMessage = "EMail Message4",
                EmailTo = "emailto@test.com",
                Image_path = "ImagePath4",
                LastUpdated = DateTime.Now,
                Notes = "Notes 4",
                ProductId = "400",
                Quantities = "40",
                UserId = "4000",
                Zip_path = "Zip-Path4",
                Status = ""
            });
        }
    }
}
