import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css'],
})
export class DashboardLayoutComponent implements OnInit {
  isActiveRoute = false;
  userLoginEmail = '';
  jwtHelper = new JwtHelperService();

  constructor(private route: Router, private activeRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.parseToken();
    console.log(this.activeRouter.parent);
  }

  getLocalStorage() {
    return localStorage.getItem('token') || '';
  }

  decodeToken() {
    return this.jwtHelper.decodeToken(this.getLocalStorage());
  }

  parseToken() {
    // console.log(jwtDecode(this.getLocalStorage()));
    let decodeToken = this.decodeToken();
    console.log(decodeToken.email);
    // this.userLoginEmail = decodeToken.email;
  }

  // isActive(instruction: any[]): boolean {
  //   // return this.route.isActive(this.route.generate(instruction));
  // }
}
