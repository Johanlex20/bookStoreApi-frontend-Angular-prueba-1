import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { LayoutComponent } from './components/layout/layout.component';


const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children:[
        {
          path: 'books',
          component: BookListComponent
        },
        {
          path: 'books/new',
          component: BookFormComponent
        },
        {
          path: 'books/:id/edit',
          component: BookFormComponent
        },
        {
          path: 'users',
          component: UserListComponent
        },
        {
          path: 'users/new/user',
          component: UserFormComponent
        },
        {
          path: 'users/:id/edit',
          component: UserFormComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
