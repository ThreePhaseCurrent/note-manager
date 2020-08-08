import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { NoteService } from '../../services/note.service';
import { 
    GetNote, ENoteActions, GetNotes, GetNoteSuccess, 
    GetNotesSuccess, RemoveNote, RemoveNoteSuccess, CreateNote, 
    CreateNoteSuccess, UpdateNote, UpdateNoteSuccess 
} from "../actions/note.actions";
import { of } from "rxjs";
import { Note } from '../../models/note';

@Injectable()
export class NoteEffects {

    @Effect()
    getNote$ = this._actions$.pipe(
        ofType<GetNote>(ENoteActions.GET_NOTE),
        switchMap((action) => {
            return this._noteService.getNote(action.payload).pipe(
                map((note: Note) => new GetNoteSuccess(note))
            );
        })
    );

    @Effect()
    getNotes$ = this._actions$.pipe(
        ofType<GetNotes>(ENoteActions.GET_NOTES),
        switchMap(() => this._noteService.getNotes()),
        switchMap((note: Note[]) => of(new GetNotesSuccess(note)))
    );

    @Effect()
    removeNote$ = this._actions$.pipe(
        ofType<RemoveNote>(ENoteActions.REMOVE_NOTE),
        switchMap((action) => {
            return this._noteService.removeNote(action.payload).pipe(
                map((id) => new RemoveNoteSuccess(id))
            );
        })
    );

    @Effect()
    createNote$ = this._actions$.pipe(
        ofType<CreateNote>(ENoteActions.CREATE_NOTE),
        switchMap((action) => {
            return this._noteService.createNote(action.note).pipe(
                map((note) => new CreateNoteSuccess(note))
            );
        })
    );

    @Effect()
    updateNote$ = this._actions$.pipe(
        ofType<UpdateNote>(ENoteActions.UPDATE_NOTE),
        switchMap((action) => {
            return this._noteService.updateNote(action.note).pipe(
                map((note) => new UpdateNoteSuccess(note))
            );
        })
    );

    constructor(
        private _actions$: Actions,
        private _noteService: NoteService,
        private _store: Store<IAppState>
    ) {}
}