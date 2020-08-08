import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { routerReducer } from "@ngrx/router-store";
import { noteReducers } from '../reducers/note.reducer';
import { from } from "rxjs";

export const appReducers: ActionReducerMap<IAppState> = {
    router: routerReducer,
    notes: noteReducers
}