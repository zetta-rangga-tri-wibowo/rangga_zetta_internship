import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookManagementService } from '../book-management.service';
import { Subscription } from 'rxjs';
import {Book} from "../book-management.model";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {
  // The selected book is empty by default
  selectedBook: Book | null = null;
  // Subscription to the selected book value is empty by default
  private subscription: Subscription = Subscription.EMPTY;

  // Inject the BookManagementService
  constructor(private bookManagementService: BookManagementService) {}

  ngOnInit(): void {
    // Subscribe to the selected book value
    this.subscription = this.bookManagementService.selectedBook$.subscribe(
      book => this.selectedBook = book
    );
  }

  // Unsubscribe from the selected book value
  removeDetailBook() {
    this.bookManagementService.removeSelectedBook();
  }

  ngOnDestroy(): void {
    // Unsubscribe from the selected book value
    this.subscription.unsubscribe();
  }
}
