import { INoteHttp } from '../models/models-http/note.http';
import { from } from "rxjs";
import { INote } from './note.interface';

export class Note implements INote {
    id: number;
    title: string;
    text: string;
    dateInit: Date;
    dateUpdate: Date;
    isActual: boolean;
}