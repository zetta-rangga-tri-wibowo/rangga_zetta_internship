import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { User } from "../../user/user.model"

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnChanges {
  @Input() user!: User;
  showPassword: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('User detail changes:', changes);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}
