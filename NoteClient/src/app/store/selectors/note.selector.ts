import { IAppState } from "../state/app.state";
import { createSelector } from "@ngrx/store";
import { INoteState } from "../state/note.state";

const selectNotes = (state: IAppState) => state.notes;

export const selectNoteList = createSelector(
    selectNotes,
    (state: INoteState) => state.notes
);

export const selectSelectedNote = createSelector(
    selectNotes,
    (state: INoteState) => state.selectedNote
)

export const removeNote = createSelector(
    selectNotes,
    (state: INoteState) => true
)

export const createNote = createSelector(
    selectNotes,
    () => true
)

export const updateNote = createSelector(
    selectNotes,
    () => true
)