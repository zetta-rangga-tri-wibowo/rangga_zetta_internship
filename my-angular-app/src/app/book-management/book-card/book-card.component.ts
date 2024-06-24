import { Component, Input } from '@angular/core';
import { BookManagementService } from '../book-management.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() book: any;

  constructor(private bookManagementService: BookManagementService) {}

  selectBook() {
    this.bookManagementService.selectBook(this.book);
  }
}
