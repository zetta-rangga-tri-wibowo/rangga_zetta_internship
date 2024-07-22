import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { School, SchoolFilter } from '../school.model';
import { SchoolService } from '../school.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-table-school',
  templateUrl: './table-school.component.html',
  styleUrls: ['./table-school.component.css'],
})
export class TableSchoolComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() tabIndex: number = 0;

  schoolList: any[] = [];
  loading = false;
  pagination = {
    limit: 10,
    page: 0,
  };
  totalSchools = 0;
  currentPageSize = 20; // Default page size
  sortingSchool = {};
  filterSchool: SchoolFilter = {};
  displayedColumns: string[] = [
    'short_name',
    'long_name',
    'school_address',
    'preparation_center_ats',
    'certifier_ats',
    'class',
    'status',
    'actions',
  ];
  dataSource = new MatTableDataSource<any>([]);

  constructor(private schoolService: SchoolService) {}

  // Paginator
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  ngOnInit(): void {
    this.getSchoolList(this.pagination, this.filterSchool);
  }

  //
  ngOnChanges() {
    if (this.tabIndex === 0) {
      this.filterSchool = { should_have_active_class: true };
      this.getSchoolList(this.pagination, this.filterSchool);
    } else {
      this.filterSchool = {};
      this.getSchoolList(this.pagination, this.filterSchool);
    }
  }

  // After view init, set paginator
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
  }

  private getSchoolList(pagination: object, filter?: object) {
    this.loading = true;
    this.schoolService
      .getSchoolList(pagination, this.sortingSchool, filter)
      .subscribe((schools) => {
        this.schoolList = schools;
        this.totalSchools = schools[0].count_document;
        this.dataSource.data = schools;
        this.loading = false;
      });
  }

  // private mapData;

  onPageChange(event: PageEvent) {
    this.currentPageSize = event.pageSize;
    this.getSchoolList(this.pagination, this.filterSchool);
  }
}
