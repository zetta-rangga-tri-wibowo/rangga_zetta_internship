import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from "../user-dialog/user-dialog.component";
import { UserService } from "../user.service";
import { User } from "../user.model";
import { TranslationService } from "../../translation.service";
import SweetAlert from 'sweetalert2';


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
      data: { title: "Add User", type: "add" },
      width: '40%'
    } );
    dialogRef.afterClosed().subscribe( result => {
      console.log( `Dialog result: `, result );
    } );
  }

  editUser(id: number) {
    let userData = this.userService.getUser(id)
    let dialogRef = this.dialog.open( UserDialogComponent, {
      data: { title: "Edit User", data: userData, type: "edit"},
      width: '40%'
    } );
    dialogRef.afterClosed().subscribe( result => {
      console.log( `Dialog result: `, result );
    } );
  }

  deleteUser(id: number) {
    SweetAlert.fire( {
      title: 'Success',
      text: 'User deleted successfully',
      icon: 'success',
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    } ).then((result) => {
      if ( result.isConfirmed ) {
        this.userService.deleteUser(id);
        // Place the code to delete the user here
        SweetAlert.fire(
          'Deleted!',
          'User deleted successfully.',
          'success'
        )
      }
    })
  }
}
