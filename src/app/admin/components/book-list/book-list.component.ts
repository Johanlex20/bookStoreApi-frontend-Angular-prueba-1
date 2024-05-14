import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book, BookPage } from '../../../interfaces/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: []
})
export class BookListComponent implements OnInit {
  
  books? :Book[];

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(){
    this.bookService.paginate()
    .subscribe(bookPage => {
      this.books = bookPage.content;
    });
  }

  deleteBook(book: Book){
    if(confirm('Estas Seguro de eliminar este libro?')){
      this.bookService.delete(book)
      .subscribe(()=>{
          this.loadBooks();
      });
    }
  }

}
