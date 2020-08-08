import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { INote } from '../models/note.interface';
import { INoteHttp } from '../models/models-http/note.http';
import { baseURL } from '../components/shared/baseUrl';
import { Note } from '../models/note';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(
    private http: HttpClient
  ) { }

  getNotes(): Observable<Note[]>{
    return this.http.get<Note[]>(`${baseURL}notes`);
  }

  getNote(id): Observable<Note>{
    return this.http.get<Note>(`${baseURL}notes/${id}`);
  }

  removeNote(id): Observable<number> {
    return this.http.delete<number>(`${baseURL}notes/${id}`);
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(`${baseURL}notes`, {
      Id: note.id,
      Title: note.title,
      Text: note.text,
      DateInit: note.dateInit,
      DateUpdate: note.dateUpdate,
      IsActual: note.isActual
    });
  }

  updateNote(note: Note) {
    return this.http.put<Note>(`${baseURL}notes/${note.id}`, {
      Id: note.id,
      Title: note.title,
      Text: note.text,
      DateInit: note.dateInit,
      DateUpdate: note.dateUpdate,
      IsActual: note.isActual
    });
  }
}
