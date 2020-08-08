import { INote } from "../../models/note.interface";

export interface INoteState {
    notes: INote[];
    selectedNote: INote;
}

export const initialNoteState: INoteState = {
    notes: null,
    selectedNote: null
}