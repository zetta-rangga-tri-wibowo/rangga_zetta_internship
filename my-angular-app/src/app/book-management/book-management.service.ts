import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Book} from "./book-management.model";


@Injectable({
  providedIn: 'root'
})
export class BookManagementService {
  private booksSubject = new BehaviorSubject<Book[]>([
    { name: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', publishDate: '2021-01-01', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
    { name: 'Book 2', author: 'Author 2', publisher: 'Publisher 2', publishDate: '2022-02-02', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { name: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', publishDate: '2023-03-03', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }
  ]);
  private selectedBookSubject = new BehaviorSubject<Book | null>(null);

  books$ = this.booksSubject.asObservable();
  selectedBook$ = this.selectedBookSubject.asObservable();

  selectBook(book: Book) {
    this.selectedBookSubject.next(book);
  }

  removeSelectedBook() {
    this.selectedBookSubject.next(null);
  }
}
