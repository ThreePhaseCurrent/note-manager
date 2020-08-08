import { Action } from "@ngrx/store";
import { INote } from "../../models/note.interface";
import { Note } from 'src/app/models/note';

export enum ENoteActions {
    GET_NOTES = '[Note] Get Notes',
    GET_NOTES_SUCCESS = '[Note] Get Notes Success',
    GET_NOTE = '[Note] Get Note',
    GET_NOTE_SUCCESS = '[Note] Get Note Success',

    REMOVE_NOTE = '[Note] Remove Note',
    REMOVE_NOTE_SUCCESS = '[Note] Remove Note Success',

    CREATE_NOTE = '[Note] Create Note',
    CREATE_NOTE_SUCCESS = '[Note] Create Note SUCCESS',

    UPDATE_NOTE = '[Note] Update Note',
    UPDATE_NOTE_SUCCESS = '[Note] Update Note SUCCESS'
}

export class GetNotes implements Action {
    public readonly type = ENoteActions.GET_NOTES;
}

export class GetNotesSuccess implements Action {
    public readonly type = ENoteActions.GET_NOTES_SUCCESS;
    constructor(public payload: INote[]){}
}

export class GetNote implements Action {
    public readonly type = ENoteActions.GET_NOTE;
    constructor(public payload: number) {}
}

export class GetNoteSuccess implements Action {
    public readonly type = ENoteActions.GET_NOTE_SUCCESS;
    constructor(public payload: INote) {}
}

export class RemoveNote implements Action {
    public readonly type = ENoteActions.REMOVE_NOTE;
    constructor(public payload: number){}
}

export class RemoveNoteSuccess implements Action {
    public readonly type = ENoteActions.REMOVE_NOTE_SUCCESS;
    constructor(public payload: number){}
}

export class CreateNote implements Action {
    public readonly type = ENoteActions.CREATE_NOTE;
    constructor(public note: Note) {}
}

export class CreateNoteSuccess implements Action {
    public readonly type = ENoteActions.CREATE_NOTE_SUCCESS;
    constructor(public note: Note) {}
}

export class UpdateNote implements Action {
    public readonly type = ENoteActions.UPDATE_NOTE;
    constructor(public note: Note) {}
}

export class UpdateNoteSuccess implements Action {
    public readonly type = ENoteActions.UPDATE_NOTE_SUCCESS;
    constructor(public note: Note) {}
}

export type NoteActions = GetNotes | GetNotesSuccess | GetNote | GetNoteSuccess 
| RemoveNote | RemoveNoteSuccess | CreateNote | CreateNoteSuccess | UpdateNote 
| UpdateNoteSuccess;