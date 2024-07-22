import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

/**
 * *************** Component: UserPageComponent ***************
 * Component for managing the user page with tab navigation.
 */
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  /**
   * *************** State Variable: tabUserIndex ***************
   * Holds the index of the currently selected tab.
   */
  tabUserIndex: number = 0;

  /**
   * *************** Constructor ***************
   * Initializes the component.
   */
  constructor() {}

  /**
   * *************** OnInit Lifecycle Hook ***************
   * Initializes component properties and states.
   */
  ngOnInit(): void {}

  /**
   * *************** Event Handler: onTabUserClick ***************
   * Updates the tabUserIndex based on the selected tab index.
   * @param event - The tab change event containing the index of the selected tab.
   */
  onTabUserClick(event: MatTabChangeEvent): void {
    this.tabUserIndex = event.index;
  }
}
