import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { DataService } from './services/data.service';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';
import { TodoComponent } from './components/todo/todo.component';

const appRoutes: Routes = [
  {
    path: '',
    component:UserComponent
  },
  {
    path: 'about',
    component:AboutComponent
  },
  {
    path: 'todo',
    component:TodoComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
