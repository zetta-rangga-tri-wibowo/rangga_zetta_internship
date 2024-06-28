import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserCardComponent } from './user-card/user-card.component';
import {RouterModule, Routes} from "@angular/router";
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFilterComponent } from './user-filter/user-filter.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CombineWordsPipe} from "../pipe/combine-words.pipe";
import {RemoveAccentPipe} from "../pipe/remove-accent.pipe";
import {IgnoreCasePipe} from "../pipe/ignore-case.pipe";
import {RemoveSpecialCharactersPipe} from "../pipe/remove-special-characters.pipe";
import {CountAgePipe} from "../pipe/count-age.pipe";

const routes: Routes = [
  {
    path: '', component: UserHomepageComponent,
    children: [
      {
        path: 'user',
        component: UserHomepageComponent
      }
    ]
  },
  {
    path: ':id', component: UserDetailComponent
  }
]

@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent,
    UserCardComponent,
    UserHomepageComponent,
    UserDetailComponent,
    UserFilterComponent,
    CombineWordsPipe,
    RemoveAccentPipe,
    IgnoreCasePipe,
    RemoveSpecialCharactersPipe,
    CountAgePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class UserModule { }
