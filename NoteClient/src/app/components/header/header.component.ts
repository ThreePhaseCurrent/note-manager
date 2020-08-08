import { Component, OnInit } from '@angular/core';
import { CreateNoteComponent } from '../create-note/create-note.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createNote() {
    this.dialog.open(CreateNoteComponent, {width: '500px', height: '450px'});
  }

}
