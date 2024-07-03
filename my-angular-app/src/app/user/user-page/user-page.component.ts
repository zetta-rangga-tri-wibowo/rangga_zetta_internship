import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from "../user-dialog/user-dialog.component";
import { UserService } from "../user.service";
import { User } from "../user.model";
import { TranslationService } from "../../translation.service";

@Component( {
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: [ './user-page.component.css' ]
} )
export class UserPageComponent implements OnInit {

  users: User[] = []

  constructor( public dialog: MatDialog, private userService: UserService, private translate: TranslationService) {
    this.userService.users$.subscribe( users => {
      this.users = users;
    })
  }

  ngOnInit(): void {
  }

  switchLanguage(lang: string) {
    this.translate.changeLanguage(lang)
  }

  openDialog() {
    let dialogRef = this.dialog.open( UserDialogComponent, {
      data: { name: "John", title: "Add User" },
      width: '40%'
    } );
    dialogRef.afterClosed().subscribe( result => {
      console.log( `Dialog result: `, result );
    } );
  }

  // editUser(id: number) {
  //   let dialogRef = this.dialog.open( UserDialogComponent, {
  //     data: { user: id, title: "Edit User" },
  //     width: '40%'
  //   } );
  //   dialogRef.afterClosed().subscribe( result => {
  //     console.log( `Dialog result: `, result );
  //   } );
  // }
}
