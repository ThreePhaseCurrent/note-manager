import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component'
import { NoteShowComponent } from '../components/note-show/note-show.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'note/:id', component: NoteShowComponent}
]