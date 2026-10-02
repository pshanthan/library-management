import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { Book } from '../../models/Book';
@Component({
  selector: 'app-booklist',
  imports: [],
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css',
})
export class BooklistComponent implements OnInit {
  constructor(private libraryService: LibraryService) {}

  books: Book[] = [];

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.libraryService.getBooks().subscribe((b) => (this.books = b));
  }
}
