import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components//home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components//footer/footer.component';

import { appReducers } from './store/reducers/app.reducer';
import { NoteEffects } from './store/effects/note.effects';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import { baseURL } from './components/shared/baseUrl';
import { NoteService } from './services/note.service';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteItemComponent } from './components/note-item/note-item.component';
import { NoteShowComponent } from './components/note-show/note-show.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';

export const ROOT_REDUCER = new InjectionToken<any>('Root Reducer', 
{factory: () => (appReducers)});

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NoteListComponent,
    NoteItemComponent,
    NoteShowComponent,
    CreateNoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatDialogModule,
    StoreModule.forRoot(ROOT_REDUCER),
    EffectsModule.forRoot([NoteEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [{provide: 'BaseUrl', useValue: baseURL}, NoteService, DatePipe],
  entryComponents: [CreateNoteComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
