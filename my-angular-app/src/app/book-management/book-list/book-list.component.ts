import { Component, OnInit } from '@angular/core';
import { BookManagementService } from '../book-management.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books$ = this.bookManagementService.books$;

  constructor(private bookManagementService: BookManagementService) {}

  ngOnInit(): void {}
}
