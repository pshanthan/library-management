import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../models/Book';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  constructor() {}
  book = new BehaviorSubject<Book[]>([
    {
      title: 'BookOne',
      author: 'authorOne',
      pages: 200,
      instock: true,
    },
  ]);
}
