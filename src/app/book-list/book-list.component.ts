import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book, BookPage } from '../interfaces/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: []
})
export class BookListComponent implements OnInit {
  books? :Book[];

  constructor(
    private BookService: BookService
  ) { }

  ngOnInit(): void {
    this.BookService.paginate()
    .subscribe(bookPage => {
      this.books = bookPage.content;
    })
  }


}
