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
  constructor(private libraryService: LibraryService, private activatedRoute :ActivatedRoute) {}
  addBookForm = new FormGroup({
    author: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    pages: new FormControl('', Validators.required),
    inStock: new FormControl('', Validators.required),
  });
  
   editingID  : number  | null = null;
   this.editingID =  Number(this.activatedRoute.snapshot.paramMap.get('id'));
  ngOnInit(): void {
    if(editingID){

  }
  onSubmit() {
    const b = this.addBookForm.getRawValue();
    const addedBook: Book = {
      title: String(b.title),
      pages: Number(b.pages),
      author: String(b.author),
      instock: Boolean(b.inStock),
    };
    this.libraryService.addBook(addedBook);
    this.addBookForm.reset();
  }
}
