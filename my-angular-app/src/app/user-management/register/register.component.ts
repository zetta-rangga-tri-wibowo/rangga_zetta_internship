import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from "../user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  user: User | undefined;
  firstFamilyMemberAdded = false;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  isEditMode = false;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'id': new FormControl(null, Validators.required),
      'name': new FormControl(null, Validators.required),
      'age': new FormControl(null, [Validators.required]),
      'gender': new FormControl('male'),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'position': new FormControl(null),
      'maritalStatus': new FormControl(null),
      'addresses': new FormArray([]),
      'family': new FormArray([])
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.isEditMode = true;
      this.user = this.userService.getUserById(id);
      if (this.user) {
        this.registerForm.patchValue(this.user);
        const addressesFormArray = (this.registerForm.get('addresses') as FormArray);
        addressesFormArray.clear();
        this.user.addresses.forEach(address => {
          const addressFormGroup = new FormGroup({
            'address': new FormControl(address.address, Validators.required),
            'zipCode': new FormControl(address.zipCode, Validators.required),
            'city': new FormControl(address.city, Validators.required),
            'country': new FormControl(address.country, Validators.required)
          });
          addressesFormArray.push(addressFormGroup);
        });
      } else {
        this.router.navigate(['/users']);
      }
    }

    this.registerForm.valueChanges.subscribe(value => {
      console.log('Form value has changed:', value);
    });

    this.registerForm.statusChanges.subscribe(status => {
      console.log('Form status has changed:', status);
    });
  }

  get addresses() {
    return (this.registerForm.get('addresses') as FormArray);
  }

  get family() {
    return (this.registerForm.get('family') as FormArray);
  }

  familyMemberAddresses(index: number) {
    return (this.family.at(index).get('addresses') as FormArray);
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

  onAddFamilyMember() {
    let newFamilyMemberGroup;

    if (!this.firstFamilyMemberAdded) {
      newFamilyMemberGroup = new FormGroup({
        'name': new FormControl(null, Validators.required),
        'age': new FormControl(null, Validators.required),
        'addresses': new FormArray([])
      });
      this.firstFamilyMemberAdded = true;
    } else {
      newFamilyMemberGroup = new FormGroup({
        'name': new FormControl(null),
        'age': new FormControl(null),
        'addresses': new FormArray([])
      });
    }

    this.family.push(newFamilyMemberGroup);
  }

  onDeleteFamilyMember(index: number) {
    this.family.removeAt(index);
  }

  onAddFamilyMemberAddress(familyMemberIndex: number) {
    const newAddressGroup = new FormGroup({
      'address': new FormControl(null, Validators.required),
      'zipCode': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
      'city': new FormControl(null, Validators.required),
      'country': new FormControl(null, Validators.required)
    });
    this.familyMemberAddresses(familyMemberIndex).push(newAddressGroup);
  }

  onDeleteFamilyMemberAddress(familyMemberIndex: number, addressIndex: number) {
    this.familyMemberAddresses(familyMemberIndex).removeAt(addressIndex);
  }

  onSubmit() {
    if (this.registerForm.valid) {
      if (this.user) {
        this.userService.editUser(this.user.id, this.registerForm.value);
      } else {
        this.userService.addUser(this.registerForm.value);
      }
      this.registerForm.reset();
      this.router.navigate(['/users']);
    }
  }
}
