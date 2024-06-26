import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  user: User | undefined;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.userService.getUserById(id);
    if (!this.user) {
      this.router.navigate(['/users']);
    }
  }

  backToList() {
    //using navigate route
    this.router.navigate(['/users']);
  }

  deleteUser() {
    if (this.user) {
      this.userService.deleteUser(this.user.id);
      this.router.navigate(['/users']);
    }
  }

  editUser() {
    if (this.user) {
      this.router.navigate(['/edit', this.user.id]);
    }
  }
}
