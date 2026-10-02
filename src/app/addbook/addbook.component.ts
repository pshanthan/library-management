import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LibraryService } from '../library.service';
import { Book } from '../../models/Book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addbook',
  imports: [ReactiveFormsModule],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css',
})
export class AddbookComponent implements OnInit {
  constructor(
    private libraryService: LibraryService,
    private activatedRoute: ActivatedRoute,
  ) {}
  addBookForm = new FormGroup({
    author: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    pages: new FormControl('', Validators.required),
    inStock: new FormControl('', Validators.required),
  });

  editingID: number | null = null;

  ngOnInit(): void {
    const idParam = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (idParam) {
      this.editingID = Number(idParam);
      this.libraryService.getBooks().subscribe((books) => {
        const found = books.find((b) => b.id === this.editingID);
        if (found) {
          this.addBookForm.patchValue({
            author: found.author,
            title: found.title,
            pages: String(found.pages),
            inStock: found.instock,
          });
        }
      });
    }
  }
  onSubmit() {
    const b = this.addBookForm.getRawValue();
    const addedBook: Book = {
      title: String(b.title),
      pages: Number(b.pages),
      author: String(b.author),
      instock: Boolean(b.inStock),
    };
    if (this.editingID) {
      addedBook.id = this.editingID;
      this.libraryService.updateBook(addedBook);
    } else {
      this.libraryService.addBook(addedBook);
    }
    this.addBookForm.reset();
  }
}
