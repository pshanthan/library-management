import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { Book } from '../../models/Book';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-booklist',
  imports: [CommonModule, RouterLink],
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
  updateBook(b: Book) {
    this.libraryService.updateBook(b);
  }
}
