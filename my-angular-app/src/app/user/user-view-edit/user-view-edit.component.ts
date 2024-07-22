// *************** Angular Imports ***************
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// *************** Application Services Imports ***************
import { UserService } from '../user.service';
// *************** Third-Party Library Imports ***************
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-view-edit',
  templateUrl: './user-view-edit.component.html',
  styleUrls: ['./user-view-edit.component.css'],
})
export class UserViewEditComponent implements OnInit {
  userForm: FormGroup;

  /**
   * @param formBuilder FormBuilder service to create reactive forms
   * @param route ActivatedRoute service to access route parameters
   * @param userService Service for user-related API calls
   * @param router Router service to navigate between routes
   */
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
    // Initialize the form with validation rules
    this.userForm = this.formBuilder.group({
      civility: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  listUser: any;

  /**
   * Initializes the component, retrieves user data if an ID is present in the route parameters
   */
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const userId = params.get('id');
      if (userId) {
        this.userService.getOneUser(userId).subscribe((user: any) => {
          this.listUser = user;
          this.userForm.patchValue({
            civility: user.civility,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
          });
        });
      } else {
        this.router.navigate(['/user']);
      }
    });
  }

  /**
   * Saves the user data if the form is valid
   * Displays a success message and navigates back to the user list page
   */
  saveUser(): void {
    if (this.userForm.valid) {
      const userInput = {
        civility: this.userForm.value.civility,
        first_name: this.userForm.value.firstName,
        last_name: this.userForm.value.lastName,
        email: this.userForm.value.email,
      };
      this.userService
        .updateUser(this.route.snapshot.params['id'], userInput)
        .subscribe((result: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Edit Successful',
            text: 'You have been successfully Edited.',
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/user']);
            }
          });
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fix the errors in the form before submitting.',
      });
    }
  }
}
