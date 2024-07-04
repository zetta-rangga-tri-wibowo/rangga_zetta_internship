import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from "../user.service";
import SweetAlert from 'sweetalert2';
import { TranslateService } from "@ngx-translate/core";
import { User } from "../user.model";

@Component( {
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: [ './user-dialog.component.css' ]
} )
export class UserDialogComponent implements OnInit {
  myForm: FormGroup = new FormGroup( {} );

  constructor(
    @Inject( MAT_DIALOG_DATA ) public data: any,
    private ref: MatDialogRef<UserDialogComponent>,
    private userService: UserService,
    private translateService: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.myForm = new FormGroup( {
      'civility': new FormControl( null, Validators.required ),
      'lastName': new FormControl( null, [ Validators.required, Validators.min( 4 ) ] ),
      'firstName': new FormControl( null, [ Validators.required, Validators.min( 4 ) ] ),
      'dateOfBirth': new FormControl( null, [ Validators.required ] ),
      'gender': new FormControl( '', [ Validators.required ] ),
      'email': new FormControl( null, [ Validators.required, Validators.email, Validators.min( 4 ) ] ),
      'id': new FormControl( Math.floor( Math.random() * 1000 ) + 1, Validators.required ),
    } );
    if ( this.data.type === 'edit' ) {
      console.log( this.data );
      this.myForm.patchValue( this.data.data );
    }
  }

  addUser( user: User ) {
    this.userService.addUser( user );
    this.ref.close();
  }

  editUser( user: User ) {
    this.userService.editUser( user );
    this.ref.close();
  }

  submit() {
    if ( this.myForm.invalid ) {
      SweetAlert.fire( {
        title: 'Error',
        text: this.translateService.instant( 'error-field' ),
        icon: 'error',
        allowOutsideClick: false,
      } )
      return;
    }
    if ( this.data.type === 'add' ) {
      this.addUser( this.myForm.value );
      SweetAlert.fire( {
        title: 'Success',
        text: this.translateService.instant( 'success-add' ),
        icon: 'success',
        allowOutsideClick: false,
      } )
    }
    if ( this.data.type === 'edit' ) {
      this.editUser( this.myForm.value );
      SweetAlert.fire( {
        title: 'Success',
        text: this.translateService.instant( 'success-edit' ),
        icon: 'success',
        allowOutsideClick: false,
      } )
    }
    // {
    //    this.userService.addUser( this.myForm.value );
    //    console.log( this.myForm.value );
    //    SweetAlert.fire(
    //      'Success',
    //      'User added successfully',
    //      'success'
    //    )
    //    this.ref.close( this.myForm.value );
    //  }
  }

  closeDialog() {
    this.myForm.reset()
    this.ref.close()
  }
}
