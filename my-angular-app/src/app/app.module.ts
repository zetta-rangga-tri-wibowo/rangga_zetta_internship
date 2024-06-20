import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {TodoComponent} from "./component/todo/todo.component";
import {TodoService} from "./service/todo.service";


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
