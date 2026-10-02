import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { Book } from '../../models/Book';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-booklist',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css',
})
export class BooklistComponent implements OnInit {
  constructor(private libraryService: LibraryService) {}

  books: Book[] = [];
  bookList = new FormGroup({
    name: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    pages: new FormControl('', Validators.required),
    inStock: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.libraryService.getBooks().subscribe((b) => (this.books = b));
  }
}
