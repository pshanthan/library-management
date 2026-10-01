import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../models/Book';
@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  constructor() {}
  public book = new BehaviorSubject<Book[]>([
    {
      title: 'BookOne',
      author: 'authorOne',
      pages: 200,
      instock: true,
    },
  ]);
}
