import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { Note } from 'src/app/models/note';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CreateNote } from 'src/app/store/actions/note.actions';
import { createNote } from 'src/app/store/selectors/note.selector';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  noteForm: FormGroup;
  note: Note;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateNoteComponent>,
    private store: Store<IAppState>,
    private datePipe: DatePipe) { 

      this.noteFormCreate();
    }

  ngOnInit(): void {
  }

  noteFormCreate(){
    this.noteForm = this.fb.group({
      title: '',
      text: ''
    });
  }

  onCreate(){
    this.note = this.noteForm.value;

    this.note.dateInit = new Date;
    this.note.dateUpdate = this.note.dateInit;
    this.note.isActual = true;

    this.store.dispatch(new CreateNote(this.note));
    this.store.pipe(select(createNote)).subscribe(x => {
      this.dialogRef.close();
    });
  }

  onCancel(){
    this.dialogRef.close();
  }

}
