import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav', { static: true }) sidenav: any;

  listMenu = [
    {
      title: 'Movies',
      icon: 'movie',
      link: '/movie'
    },
    {
      title: 'Artists',
      icon: 'groups',
      link: '/actress'
    },
  ]

  onToggleSidenav() {
    this.sidenav.toggle();
  }
}
