import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { LayoutComponent } from './components/layout/layout.component';


const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:[
      {
        path: '',
        component: IndexComponent,
      },
      {
        path:'books',
        component: BooksComponent
      },
      {
        path:'books/:slug',
        component: BookComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
