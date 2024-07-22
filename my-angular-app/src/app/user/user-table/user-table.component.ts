import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../user.service';
import { SubSink } from 'subsink';
import { User } from '../user.model';
import { PageEvent } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

interface UserType {
  _id: string;
  name_with_entity: string;
  name: string;
}

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit, OnChanges, OnDestroy {
  @Input() tabIndex: any; // Input property for tracking the active tab index
  private subs = new SubSink(); // Subscription manager to handle multiple subscriptions

  userList: User[] = []; // Array to hold the list of users
  userType: any = []; // Array to hold user types for dropdown
  dropdownClasses: any; // Dropdown classes data
  selectedUserType: UserType | null = null; // Selected user type for filtering
  selectedTitleFilter: any; // Selected title filter for dropdown
  selectedIdTitle: any; // Selected ID for title dropdown
  selectedFilterClasses: any; // Selected classes for filtering
  selectedSchoolId: any; // Selected school ID for filtering
  schoolId: any; // School ID
  selectedNameSchool: any; // Selected school name
  dropdownSchool: any; // Dropdown schools data
  dropdownTitle: any; // Dropdown titles data
  loading = true; // Flag to indicate loading state
  pagination = {
    // Pagination parameters
    page: 0,
    limit: 10,
  };
  sort = {}; // Sorting parameters
  filter = {}; // Filter parameters
  statusUser: string | undefined = undefined; // Status of the user
  userActiveClass: boolean | undefined = false; // Flag to indicate active class status
  totalUser: number | undefined = 0; // Total number of users
  filterTable = {
    // Filters for the table
    full_name: '',
    created_date: '',
    school: [],
    userType: [] as string[],
  };

  schoolName: string[] = []; // Array to hold school names for rendering

  // Table column definitions
  displayedColumns: string[] = [
    'first_name',
    'created_date',
    'school',
    'title',
    'class',
    'user_type',
    'entity',
    'status',
    'action',
  ];
  displayedColumnFilters: string[] = [
    'full_name',
    'created_date_filter',
    'school_filter',
    'title_filter',
    'class_filter',
    'user_type_filter',
    'entity_filter',
    'status_filter',
  ];
  dataSource = new MatTableDataSource<User>([]); // Data source for the table
  private nameFilterSubject = new Subject<string>(); // Subject for name filter
  private dateFilterSubject = new Subject<string>(); // Subject for date filter
  dateFilter = new FormControl(''); // Form control for date filter
  private filterType = new Subject(); // Subject for user type filter
  searchUserType = ''; // Search term for user type
  rncpId: any; // RNCP ID

  /**
   * Gets the formatted school names for the given user.
   * @param data The user data
   */
  getSchoolColumn(data: User) {
    let dataRender: string[] = [];
    if (!data) {
      dataRender.push('Tidak Ada Data');
    }

    if (data.entities) {
      const uniqueNames = new Set(); // Collect unique school names
      data.entities.forEach((item) => {
        let dataOfSchool = item.school?.short_name ?? '';
        uniqueNames.add(dataOfSchool); // Add to set to ensure uniqueness
      });

      // Convert Set to Array, then join with comma and space, and finally push to dataRender
      if (uniqueNames.size > 0) {
        const formattedSchoolNames = Array.from(uniqueNames).join(', ');
        dataRender.push(formattedSchoolNames);
      }
    }
    this.schoolName = dataRender;
  }

  constructor(private userService: UserService, private route: Router) {}

  /**
   * Navigates to the user add page.
   */
  addUser() {
    this.route.navigate(['user/add']);
  }

  /**
   * Placeholder for edit and details functionality.
   */
  editAndDetails() {}

  /**
   * Fetches user data based on various filters and parameters.
   * @param pagination Pagination parameters
   * @param sort Sorting parameters
   * @param filter Filter parameters
   * @param should_in_active_class Indicates if the class should be active
   * @param status User status
   * @param full_name Full name filter
   * @param created_date Created date filter
   * @param school Array of school names to filter
   * @param title Array of titles to filter
   * @param class_name Array of classes to filter
   * @param user_type Array of user types to filter
   */
  private getUser(
    pagination: any,
    sort?: any,
    filter?: any,
    should_in_active_class?: boolean,
    status?: string,
    full_name?: string,
    created_date?: string,
    school?: string[],
    title?: string[],
    class_name?: string[],
    user_type?: string[]
  ) {
    console.log(school, class_name, title);
    this.loading = true;
    this.subs.sink = this.userService
      .getUser(
        pagination,
        sort,
        filter,
        should_in_active_class,
        status,
        full_name,
        created_date,
        school,
        title,
        class_name,
        user_type
      )
      .subscribe({
        next: (result) => {
          if (result) {
            this.userList = result;
            this.dataSource.data = result;
            this.totalUser = result[0]?.count_document;
            this.loading = false;
          }
        },
        error: (error) => {
          console.log(error);
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        },
      });
  }

  /**
   * Fetches user types for dropdown.
   */
  getUserType() {
    this.subs.sink = this.userService.getUseType().subscribe((result) => {
      this.userType = result;
    });
  }

  /**
   * Applies the current filters and fetches user data based on the filters.
   */
  appyFilter() {
    this.getDataBasedTabUser();
  }

  resetFilter() {
    this.getUser(this.pagination, this.sort, this.filter, this.userActiveClass);
    this.selectedTitleFilter = null;
    this.selectedFilterClasses = null;
    this.selectedSchoolId = null;
    this.schoolId = null; // School ID
    this.selectedNameSchool = null; // Selected school name
    this.dropdownSchool = null; // Dropdown schools data
    // this.dropdownTitle = null;
    this.dropdownClasses = null;
  }

  /**
   * Initializes component data and setups filter subscriptions.
   */
  ngOnInit(): void {
    this.getDataBasedTabUser();
    this.setupFilterSubscriptions();
    this.getUserType();
    this.getDropDownTitle();
  }

  /**
   * Responds to changes in the `tabIndex` input property.
   * @param changes Changes object
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.loading = true;
    if (changes['tabIndex']) {
      this.updateParametersBasedOnTab();
    }
  }

  /**
   * Fetches dropdown titles.
   */
  getDropDownTitle() {
    this.userService.getTitleDropdown().subscribe((result) => {
      this.dropdownTitle = result;
    });
  }

  /**
   * Fetches dropdown classes based on title ID.
   * @param id Title ID
   */
  getDropdownClasses(id: string) {
    this.userService.getClassesDropdown(id).subscribe({
      next: (result) => {
        this.dropdownClasses = result;
      },
    });
  }

  /**
   * Fetches classes based on selected title.
   */
  getClassesByRncp() {
    this.getDropdownClasses(this.selectedIdTitle);
  }

  /**
   * Fetches school dropdown data.
   */
  getSchoolDropdown() {
    this.userService
      .getSchoolDropdown(
        this.selectedIdTitle,
        this.selectedFilterClasses,
        [''],
        ''
      )
      .subscribe({
        next: (result) => {
          this.dropdownSchool = result;
        },
      });
  }

  /**
   * Fetches schools based on selected classes.
   */
  getSchoolByIdClasses() {
    this.getSchoolDropdown();
  }

  /**
   * Placeholder for handling school ID changes.
   */
  getSchoolId() {
    // this.schoolId = event._id;
  }

  /**
   * Sets up subscriptions for filter changes.
   */
  setupFilterSubscriptions(): void {
    this.subs.sink = this.nameFilterSubject
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.filterTable.full_name = value;
        this.getDataBasedTabUser();
      });

    this.subs.sink = this.dateFilter.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.filterTable.created_date = value ?? '';
        this.getDataBasedTabUser();
      });

    this.subs.sink = this.filterType
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.filterTable.userType = [];
        let id = value;
        this.filterTable.userType.push(id as string);
        this.getDataBasedTabUser();
      });
  }

  /**
   * Updates parameters based on the selected tab index.
   */
  updateParametersBasedOnTab() {
    if (this.tabIndex === 0) {
      this.userActiveClass = true;
    } else if (this.tabIndex === 1) {
      this.userActiveClass = false;
    } else {
      this.userActiveClass = undefined;
      this.statusUser = 'deleted';
    }
    this.getDataBasedTabUser();
  }

  /**
   * Handles page changes for pagination.
   * @param event Page event
   */
  onPageChange(event: PageEvent) {
    this.pagination.limit = event.pageSize;
    this.pagination.page = event.pageIndex;
    this.getDataBasedTabUser();
  }

  /**
   * Handles name filter input changes.
   * @param event Input event
   */
  filterName(event: any) {
    this.nameFilterSubject.next(event.target.value);
  }

  /**
   * Handles date filter input changes.
   * @param event Input event
   */
  filterDate(event: any) {
    let value = event.target.value;
    this.filterTable.created_date = value;
    this.dateFilterSubject.next(value);
  }

  /**
   * Handles user type filter changes.
   * @param event Filter event
   */
  filterUserType2(event: any) {
    let id = event._id;
    this.filterType.next(id);
  }

  /**
   * Handles title filter changes.
   * @param event Filter event
   */
  filterTitle(event: any) {
    this.selectedIdTitle = event._id;
  }

  /**
   * Handles class filter changes.
   * @param event Filter event
   */
  filterClases(event: any) {
    this.selectedSchoolId = event;
  }

  /**
   * Handles school filter changes.
   * @param event Filter event
   */
  filterSchool(event: any) {
    this.selectedNameSchool = event.short_name;
  }

  /**
   * Fetches user data based on current filters and parameters.
   */
  getDataBasedTabUser() {
    this.getUser(
      this.pagination,
      this.sort,
      this.filter,
      this.userActiveClass,
      this.statusUser,
      this.filterTable.full_name,
      this.filterTable.created_date,
      this.selectedNameSchool,
      this.selectedIdTitle?._id,
      this.selectedFilterClasses,
      this.filterTable.userType
    );
  }

  /**
   * Gets unique entities based on assigned RNCP titles.
   * @param entities Array of entities
   * @returns Array of unique entities
   */
  getUniqueEntities(entities: any[]): any[] {
    const uniqueTitles = new Map();
    entities.forEach((entity) => {
      if (
        entity.assigned_rncp_title &&
        !uniqueTitles.has(entity.assigned_rncp_title.short_name)
      ) {
        uniqueTitles.set(entity.assigned_rncp_title.short_name, entity);
      }
    });
    return Array.from(uniqueTitles.values());
  }

  /**
   * Gets unique entities based on a specified key.
   * @param entities Array of entities
   * @param key Key for uniqueness check
   * @returns Array of unique entities
   */
  getUniqueEntitiesCustom(entities: any[], key: string): any[] {
    const uniqueMap = new Map();
    entities.forEach((entity) => {
      const keyValue = entity[key];
      if (!uniqueMap.has(keyValue)) {
        uniqueMap.set(keyValue, entity);
      }
    });
    return Array.from(uniqueMap.values());
  }

  /**
   * Navigates to the edit/view page for a specific user.
   * @param id User ID
   */
  onEditView(id: string) {
    this.route.navigate(['user/edit-view', id]);
  }

  /**
   * Unsubscribes from all subscriptions to avoid memory leaks.
   */
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
