import { AppPage, Note } from './app.po';
import { browser, logging, element, by } from 'protractor';
import { protractor } from 'protractor/built/ptor';

//my tests
describe('first page test', () => {

  //not work :c
  let note = new Note();

  beforeEach(() => {
    //browser.waitForAngularEnabled(false);
    browser.get('/');
  });

  it('should be get count notes', () => {
    expect(note.getNotes().count()).toBe(3);
  });

  it('remove one note, should be 2 notes', () => {
    element.all(by.css('.btn-remove')).get(0).click()
    expect(note.getNotes().count()).toBe(2);
  });

  it('test modal window for create note', () => {
    note.openCreateNoteWindow();
  });

  it('should create new note', () => {
    note.openCreateNoteWindow();

    element(by.css('input[formcontrolname=title]')).sendKeys('Test title 4');
    element(by.css('textarea[formcontrolname=text]')).sendKeys('Test text 4');
    element(by.id('create-new-note')).click();
    
    expect(note.getNotes().count()).toBe(3);
  });
  
});
