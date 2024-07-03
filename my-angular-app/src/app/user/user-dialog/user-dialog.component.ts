import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from "../user.service";
import SweetAlert from 'sweetalert2';
import { TranslateService } from "@ngx-translate/core";

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
      'lastName': new FormControl( null, [ Validators.required ] ),
      'firstName': new FormControl( null, [ Validators.required ] ),
      'dateOfBirth': new FormControl( null, [ Validators.required ] ),
      'gender': new FormControl( '', [ Validators.required ] ),
      'email': new FormControl( null, [ Validators.required, Validators.email ] ),
    } );
  }

  submit() {
    if ( this.myForm.invalid ) {
      SweetAlert.fire({
        title: 'Error',
        text: this.translateService.instant('error-field'),
        icon: 'error',
        allowOutsideClick: false,
      })
      return;
    } else {
      this.userService.addUser( this.myForm.value );
      console.log( this.myForm.value );
      SweetAlert.fire(
        'Success',
        'User added successfully',
        'success'
      )
      this.ref.close( this.myForm.value );
    }
  }

  closeDialog() {
    this.ref.close()
  }
}
