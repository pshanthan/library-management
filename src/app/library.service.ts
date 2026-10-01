import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../models/Book';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';
@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  constructor() {}
  books: Book[] = [];
  private book = new BehaviorSubject<Book[]>([
    {
      title: 'BookOne',
      author: 'authorOne',
      pages: 200,
      instock: true,
    },
  ]);
  getBooks(): Observable<Book[]> {
    const bookStream = this.book.asObservable();
    return bookStream;
  }
  addBook(b: Book) {
    b.id = Number(dateTimestampProvider);
  }
}
