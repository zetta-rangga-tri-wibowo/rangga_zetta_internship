import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import { RegisterComponent } from './user-management/register/register.component';
import { CardUserComponent } from './user-management/card-user/card-user.component';
import { ListUserComponent } from './user-management/list-user/list-user.component';
import { DetailUserComponent } from './user-management/detail-user/detail-user.component';
import { EditUserComponent } from './user-management/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    CardUserComponent,
    ListUserComponent,
    DetailUserComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
