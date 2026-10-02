import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../models/Book';
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
    b.id = Date.now();
    this.book.next([...this.book.value, b]);
  }
  updateBook(updated: Book) {
    const current = this.book.value;
    const nextList = current.map((b) => (b.id === updated.id ? updated : b));
    this.book.next(nextList);
  }
}
