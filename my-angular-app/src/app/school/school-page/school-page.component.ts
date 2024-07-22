import { Component, OnInit } from '@angular/core';
import { SchoolService } from "../school.service";
import { School, SchoolFilter } from "../school.model";
import { MatTabChangeEvent } from "@angular/material/tabs";

@Component({
  selector: 'app-school-page',
  templateUrl: './school-page.component.html',
  styleUrls: ['./school-page.component.css']
})
export class SchoolPageComponent implements OnInit {
  constructor(private schoolService: SchoolService) {}

  schoolListActive: School[] = [];
  schoolListNonActive: School[] = [];
  loading: boolean = false;
  pagination = {
    limit: 1,
    page: 0
  };
  sortingSchool = {};
  filterSchool: SchoolFilter = {};
  currentTabIndex: number = 0;



  ngOnInit(): void {
    // this.getSchoolList();
  }

  // private getSchoolList() {
  //   this.loading = true;
  //   this.schoolService.getSchoolList(this.pagination, this.sortingSchool, this.filterSchool).subscribe(schools => {
  //      if (this.currentTabIndex === 0) {
  //         this.schoolListActive = schools;
  //       } else {
  //         this.schoolListNonActive = schools;
  //       }
  //       this.loading = false;
  //   });
  // }

  onTabClick(event: MatTabChangeEvent) {
    this.currentTabIndex = event.index;
    if (this.currentTabIndex === 0) {
      this.currentTabIndex = 0;
      this.filterSchool = {};
    } else {
      this.currentTabIndex = 1;
      this.filterSchool = { should_have_active_class: true };
    }
  }
}
