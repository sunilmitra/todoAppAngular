import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodohomeComponentComponent } from './todohome-component/todohome-component.component';
import { TodolistComponentComponent } from './todolist-component/todolist-component.component';
import { TodoDetailsComponentComponent } from './todo-details-component/todo-details-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TodohomeComponentComponent,
    TodolistComponentComponent,
    TodoDetailsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
