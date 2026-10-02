import { Routes } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { AddbookComponent } from './addbook/addbook.component';

export const routes: Routes = [
  {
    path: 'bookList',
    component: BooklistComponent,
  },
  {
    path: 'add',
    component: AddbookComponent,
  },
  {
    path: 'edit/:id',
    component: AddbookComponent,
  },
];
