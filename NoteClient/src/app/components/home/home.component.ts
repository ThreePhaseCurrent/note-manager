import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { selectNoteList } from 'src/app/store/selectors/note.selector';
import { GetNotes } from 'src/app/store/actions/note.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _store: Store<IAppState>){}

  notes$;

  ngOnInit(): void {
    this.getData();
    this.notes$ = this._store.pipe(select(selectNoteList));
  }

  getData() {
    this._store.dispatch(new GetNotes());
  }
}
