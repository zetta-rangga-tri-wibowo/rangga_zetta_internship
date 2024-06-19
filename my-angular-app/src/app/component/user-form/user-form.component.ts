import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../user/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Output() newUser = new EventEmitter<User>();
  passwordData: string = '';
  maskedPassword: string = '';

  addUser(name: string): void {
    this.newUser.emit({ name, password: this.passwordData });
    this.passwordData = '';
  }
  onPasswordChange(password: string): void {
    this.passwordData = password;
    this.maskedPassword = '*'.repeat(password.length);
  }
}
