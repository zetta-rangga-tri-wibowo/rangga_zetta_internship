import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page/user-page.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { MaterialModule } from "../material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { TranslateModule } from "@ngx-translate/core";
import { MatMenuModule } from "@angular/material/menu";
import { TranslationService } from "../translation.service";


@NgModule( {
  declarations: [
    UserPageComponent,
    UserDialogComponent,
  ],
  exports: [
    UserPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    TranslateModule,
    MatMenuModule,
    // TranslationService,
  ]
})
export class UserModule { }
