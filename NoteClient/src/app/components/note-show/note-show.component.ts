import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { GetNote, RemoveNote, UpdateNote } from 'src/app/store/actions/note.actions';
import { selectSelectedNote, removeNote, updateNote } from 'src/app/store/selectors/note.selector';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-note-show',
  templateUrl: './note-show.component.html',
  styleUrls: ['./note-show.component.css'],
  providers:[DatePipe]
})
export class NoteShowComponent implements OnInit {

  id: number;
  sub: any;
  
  changeFlag = false;

  updateForm: FormGroup;
  updatedNote:Note;
  note: Note;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private _store: Store<IAppState>,
    private router: Router) { 

      // this._store.pipe(select(selectSelectedNote)).subscribe(x => );
      this.createUpdateForm();
    }
    
    note$ = this._store.pipe(select(selectSelectedNote));

    createUpdateForm(){
      this.updateForm = this.fb.group({
        id: '',
        title: '',
        text: '',
        dateInit: '',
        dateUpdate: '',
        isActual: ''
      });
      
    }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this._store.dispatch(new GetNote(this.id));
   });
  }

  onSave() {
    this.updatedNote = this.updateForm.value;

    this._store.dispatch(new UpdateNote(this.updatedNote));
    this._store.pipe(select(updateNote));
    alert('Was saved!');
  }

  onChange() {
    this.changeFlag = true;

    this._store.dispatch(new GetNote(this.id));
    this._store.pipe(select(selectSelectedNote)).subscribe(x => {
      this.updateForm.patchValue(x);
      this.note = x;
    });
  }

  onRemove() {
    this._store.dispatch(new RemoveNote(this.id));
    this._store.pipe(select(removeNote));
    this.router.navigate(['/home']);
  }

  onCancle() {
    this.changeFlag = false;
    this.ngOnInit();
  }

  backToList() {
    this.router.navigate(['/home']);
  }

  back() {
    if(this.changeFlag) {
      this.onCancle();
    } else {
      this.backToList();
    }
  }

}
