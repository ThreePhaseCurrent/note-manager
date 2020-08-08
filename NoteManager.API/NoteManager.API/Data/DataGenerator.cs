using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using NoteManager.Core.Models;

namespace NoteManager.API.Data
{
    public class DataGenerator
    {
        public static void InitData(NoteDbContext context)
        {

            if (context.Note.Any())
            {
                return;
            }
            
            context.Note.AddRange(
                new Note()
                {
                    Id = 1,
                    Title = "Test title 1",
                    Text = "Test note 1",
                    DateInit = DateTime.Now.Date.AddDays(-5).Date,
                    DateUpdate = DateTime.Now.Date,
                    IsActual = true
                },
                new Note()
                {
                    Id = 2,
                    Title = "Test title 2",
                    Text = "Test note 2",
                    DateInit = DateTime.Now.Date.AddDays(-4),
                    DateUpdate = DateTime.Now.Date,
                    IsActual = true
                },
                new Note()
                {
                    Id = 3,
                    Title = "Test title 3",
                    Text = "Test note 3",
                    DateInit = DateTime.Now.Date.AddDays(-2),
                    DateUpdate = DateTime.Now.Date,
                    IsActual = false
                });

            context.SaveChanges();
        }
    }
}