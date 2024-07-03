import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatSort } from "@angular/material/sort";
import { DataService } from "./data.service";
import { MatTableDataSource } from "@angular/material/table";
import { Observable } from "rxjs";
import {map, startWith} from 'rxjs';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'Table Angular Material';
  controlStatus = new FormControl("All");
  dataSources: any = [];
  nameFilter: string = '';
  userTypeFilter: string = '';
  emailFilter: string = '';
  statusFilter: string = '';
  displayedColumns: string[] = ['_id', 'fullName', 'email', 'userType', 'userStatus'];
  optionStatus: string[] = ['All', 'Pending', 'Active'];
  filterOptions: Observable<string[]> | undefined




  @ViewChild(MatSort) sort: MatSort | undefined;
  // Additional 'filter' column list
  displayedColumnFilters: string[] = [
    '_idFilter', 'fullNameFilter', 'emailFilter', 'userTypeFilter', 'userStatusFilter'
  ];


  constructor(private dataService: DataService) {
    console.log(this.dataSources = this.controlStatus.valueChanges.pipe(
      startWith(''),
      map(value => this.filterStatusAuto(value || ''))
    ))
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      data.forEach(( item: { fullName: string; civility: any; last_name: any; first_name: any; }) => {
        item.fullName = `${item.last_name} ${item.first_name}`;
      });
      this.dataSources = new MatTableDataSource(data);
      this.dataSources.sort = this.sort;
    });

    // this.filterOptions = this.controlStatus.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this.filterStatusAuto(value || ''))
    // );
  }

  ngAfterViewInit() {
    this.dataSources.sort = this.sort;
  }

  filterStatusAuto(value: string) {
    const filterValue = value ? value.toLowerCase() : '';
    return this.dataSources.filter(( option: { name: string; }) => option.name.toLowerCase().includes(filterValue));
  };

  filterName(event: any) {
    this.nameFilter = event.target.value;
    this.dataSources.filter = this.nameFilter.trim().toLowerCase();
    this.dataSources.filterPredicate = (data: any, filter: string) => {
      return data.fullName.toLowerCase().includes(filter);
    };
  }

  filterEmail(event: any) {
    this.emailFilter = event.target.value;
    this.dataSources.filter = this.emailFilter.trim().toLowerCase();

    this.dataSources.filterPredicate = (data: any, filter: string) => {
      return data.email.toLowerCase().includes(filter);
    };
  }

  filterUserType(event: any) {
    this.userTypeFilter = event.target.value;
    this.dataSources.filter = this.userTypeFilter.trim().toLowerCase();

    this.dataSources.filterPredicate = (data: any, filter: string) => {
      // console.log(data.company.user_type)
      return data.company.user_type && data.company.user_type.toLowerCase().includes(filter);
    };
  }

  filterStatus() {
    this.dataSources.filter = this.statusFilter;
    this.dataSources.filterPredicate = (data: any, filter: string) => {
      // console.log(filter)
      return data.user_status === filter || filter === '';
    };
  }
  // applyFilter() {
  //   this.dataSources.filterPredicate = (data: any, filter: string) => {
  //     return data.fullName.toLowerCase().includes(this.nameFilter.toLowerCase())
  //       && data.user_type.toLowerCase().includes(this.userTypeFilter.toLowerCase())
  //       && data.email.toLowerCase().includes(this.emailFilter.toLowerCase())
  //       && (this.statusFilter ? data.user_status === this.statusFilter : true);
  //   };
  //   this.dataSources.filter = Math.random().toString();  // Trigger data refresh
  // }

}
