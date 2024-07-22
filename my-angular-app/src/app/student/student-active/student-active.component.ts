import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SchoolFilter } from "../../school/school.model";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { StudentService } from "../student.service";
import { IPagination } from "../../global.model";

@Component({
  selector: 'app-student-active',
  templateUrl: './student-active.component.html',
  styleUrls: ['./student-active.component.css']
})
export class StudentActiveComponent implements OnInit, AfterViewInit {

  tabIndex: number = 0;
  schoolList: any[] = [];
  loading = false;
  pagination: IPagination = {
    limit: 10,
    page: 0
  };
  totalSchools = 0;
  currentPageSize = 20; // Default page size
  sortingSchool = {};
  filterSchool: SchoolFilter = {};
  displayedColumns: string[] = ['short_name', 'long_name', 'school_address', 'preparation_center_ats', 'certifier_ats', "class", "status", "actions" ];
  dataSource = new MatTableDataSource<any>([]);

  constructor(private studentService: StudentService) {
  }


  // Paginator
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  ngOnInit(): void {
    // this.getListSchool(this.pagination, this.filterSchool);
  }

  //
  ngOnChanges() {
    if (this.tabIndex === 0) {
      this.filterSchool = { should_have_active_class: true };
      this.getListSchool(this.pagination, this.filterSchool)
    } else {
      this.filterSchool = {};
      this.getListSchool(this.pagination, this.filterSchool);
    }
  }

  // After view init, set paginator
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
  }



  private getListSchool(pagination : IPagination ,filter?: object) {
    this.loading = true;
    this.studentService.getStudent(pagination, this.sortingSchool).subscribe(student => {
      console.log(student)
      // this.schoolList = schools;
      // this.totalSchools = schools[0].count_document;
      // this.dataSource.data = schools;
      // this.loading = false;
    });
  }

  onPageChange(event: PageEvent) {
    this.currentPageSize = event.pageSize;
    this.getListSchool(this.pagination, this.filterSchool);
  }

}
