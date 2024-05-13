import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'new',
    component: BookFormComponent
  },
  {
    path:':id/edit',
    component:BookFormComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'new/user',
    component: UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
