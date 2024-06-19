import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { User } from "../../user/user.model"

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  encapsulation: ViewEncapsulation.None // Change to None or ShadowDom as needed (ENCAPSULATION STYLE)
})
export class UserListComponent implements OnInit, OnDestroy, AfterViewInit {
  // init users | array
  users: User[] = [];
  // init selectedUser | null
  selectedUser: User | null = null;
  // init loadingText | null
  isLoading: boolean;


  // ViewChild decorator
  @ViewChild('loadingText') loadingText: ElementRef;

  constructor() {
    this.users = [] // Initialize users
    this.isLoading = true; // Initialize loading state
    this.loadingText = new ElementRef(null); // Initialize loadingText
  }

  //
  selectUser(user: User): void {
    this.selectedUser = user; // Set the selected user
  }

  addUser(user: User): void {
    this.users.push(user); // Add a new user to the list
  }


  ngOnInit(): void {
    // Initialization that depends on external data
    this.fetchData();
  }

  fetchData(): void {
    // Simulate fetching data from an API or service
    setTimeout(() => {
      this.users = [
        {  name: 'John', password: '123' },
      ];
      this.isLoading = false; // Update loading state
    }, 2000); // 2000 milliseconds delay
  }


  ngAfterViewInit(): void {
    // Access the header element and modify its style
    this.loadingText.nativeElement.style.color = 'red';
  }

  ngOnDestroy() {

    // ?????
  }

}
