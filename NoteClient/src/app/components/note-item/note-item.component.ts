import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/models/note';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { RemoveNote } from 'src/app/store/actions/note.actions';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  constructor(
    private router: Router,
    private store: Store<IAppState>) { }

  @Input() note: Note;

  ngOnInit(): void {
  }

  onClick(){
    this.router.navigate(['/note', this.note.id]);
  }

  onRemove() {
    this.store.dispatch(new RemoveNote(this.note.id));
  }
  
}
