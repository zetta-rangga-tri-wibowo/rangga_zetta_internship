import { Component } from '@angular/core'; // *************** Angular Imports ***************
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // *************** Angular Imports ***************
import { UserService } from '../user.service'; // *************** Application Services Imports ***************
import { Router } from '@angular/router'; // *************** Angular Imports ***************
import Swal from 'sweetalert2'; // *************** Third-Party Library Imports ***************

@Component({
  selector: 'app-user-add', // *************** Component Metadata ***************
  templateUrl: './user-add.component.html', // *************** Path to HTML Template ***************
  styleUrls: ['./user-add.component.css'], // *************** Path to CSS File ***************
})
export class UserAddComponent {
  // *************** Decorator Variables ***************
  userForm!: FormGroup; // FormGroup instance to manage the user form

  constructor(
    private userService: UserService, // *************** Application Services Imports ***************
    private fb: FormBuilder, // *************** Angular Imports ***************
    private router: Router // *************** Angular Imports ***************
  ) {
    this.createForm(); // Initialize the form when the component is created
  }

  // *************** Section: Form Initialization ***************
  createForm() {
    this.userForm = this.fb.group({
      civility: ['', Validators.required], // Field for civility with required validation
      firstName: ['', Validators.required], // Field for first name with required validation
      lastName: ['', Validators.required], // Field for last name with required validation
      email: ['', [Validators.required, Validators.email]], // Field for email with required and email format validation
      lang: ['en', Validators.required], // Field for language with a default value and required validation
    });
  }

  // *************** Section: Form Submission ***************
  onSubmit() {
    if (this.userForm.valid) {
      // Ensure form validity
      const userInput = {
        civility: this.userForm.value.civility,
        first_name: this.userForm.value.firstName,
        last_name: this.userForm.value.lastName,
        email: this.userForm.value.email,
      };
      const lang = this.userForm.value.lang; // Extract the language from the form

      // Call the UserService to register the user
      this.userService.registerUser(lang, userInput).subscribe({
        next: (response) => {
          // Handle successful registration
          Swal.fire({
            icon: 'success', // Use success alert
            title: 'Registration Successful',
            text: 'You have been successfully registered.',
          }).then((result) => {
            if (result.isConfirmed) {
              // Redirect after closing the alert
              this.router.navigate(['/user']);
            }
          });
        },
        error: (error) => {
          // Handle registration errors
          console.error('Error registering user', error); // Log errors to the console
          Swal.fire({
            icon: 'error', // Use error alert
            title: 'Registration Failed',
            text: 'There was a problem with your registration. Please try again.',
          });
        },
      });
    }
  }
}
