// user-filter.component.ts
import {AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.css']
})
export class UserFilterComponent implements AfterViewInit{

  // Variable to store the search value
  search = new FormControl('');

  // Output event to emit the search value
  @Output() searchChange = new EventEmitter<string>();

  // get a reference to the input element | @ViewChild Decorator
  @ViewChild('inputSearch') searchInput?: ElementRef<HTMLInputElement>;

  // AfterViewInit is a lifecycle hook that is called after Angular has fully initialized a component's view.
  ngAfterViewInit(): void {
    // Focus the input element
    this.searchInput?.nativeElement.focus();
  }

  constructor() {
    // Subscribe to the value changes of the search input
    this.search.valueChanges.pipe(
      // Debounce the value changes
      debounceTime(300)
    ).subscribe(value => {
      // Check if the value is not null
      if (value !== null) {
      // Emit the search value when the value changes
        this.searchChange.emit(value);
      }
    });
  }

}
