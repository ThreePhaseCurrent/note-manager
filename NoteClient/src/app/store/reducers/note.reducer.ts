import { initialNoteState, INoteState } from "../state/note.state";
import { NoteActions, ENoteActions } from '../actions/note.actions';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { INote } from 'src/app/models/note.interface';

export const adapter: EntityAdapter<INote> = createEntityAdapter<INote>();

export const noteReducers = (
    state = initialNoteState,
    action: NoteActions
): INoteState => {

    console.log(action.type);
    switch(action.type){


        case ENoteActions.GET_NOTES_SUCCESS: {
            return{
                ...state,
                notes: action.payload
            };
        }

        case ENoteActions.GET_NOTE_SUCCESS: {
            return {
                ...state,
                selectedNote: action.payload
            };
        }

        case ENoteActions.REMOVE_NOTE_SUCCESS: {
            return {
                ...state,
                notes: state.notes.filter(x => x.id != action.payload)
            }
        }

        case ENoteActions.CREATE_NOTE_SUCCESS: {
            return {
                ...state,
                notes: state.notes.concat(action.note)
            }
        }

        case ENoteActions.UPDATE_NOTE_SUCCESS: {
            return {
                ...state,
                notes: state.notes.filter(x => x.id != action.note.id).concat(action.note)
            }
        }

        default:
            return state;
    }
}