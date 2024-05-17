import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { BooksComponent } from './components/books/books.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BookComponent } from './components/book/book.component';
import { LayoutComponent } from './components/layout/layout.component';



@NgModule({
  declarations: [
    IndexComponent,
    BooksComponent,
    BookComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule,
    InfiniteScrollModule
  ]
})
export class HomeModule { }
