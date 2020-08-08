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