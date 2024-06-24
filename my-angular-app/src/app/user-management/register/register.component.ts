import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup = new FormGroup({});
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'id': new FormControl(null, Validators.required),
      'name': new FormControl(null, Validators.required),
      'age': new FormControl(null, [Validators.required]),
      'gender': new FormControl('male'),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'position': new FormControl(null),
      'maritalStatus': new FormControl(null),
      'addresses': new FormArray([])
    });
  }

  get addresses() {
    return (this.registerForm.get('addresses') as FormArray);
  }

  onAddAddress() {
    const newAddressGroup = new FormGroup({
      'address': new FormControl(null, Validators.required),
      'zipCode': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'country': new FormControl(null, Validators.required)
    });
    this.addresses.push(newAddressGroup);
  }

  onDeleteAddress(index: number) {
    this.addresses.removeAt(index);
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value)
      this.userService.addUser(this.registerForm.value);
      this.registerForm.reset();
      this.router.navigate(['/users']);
    }
      // console.log(this.registerForm.value)
      // this.userService.addUser(this.registerForm.value);
  }
}
