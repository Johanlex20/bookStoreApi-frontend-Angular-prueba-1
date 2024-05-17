import { Component, Input } from '@angular/core';
import { Book } from 'src/app/interfaces/book.interface';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: []
})
export class BookCardComponent {
  @Input(/*{requiered: true}*/) book!: Book; //quiete el requierd por que me generaba conflicto

  constructor(
    private cartService:CartService
  ){}

  addBookToCart(){
    this.cartService.addItem(this.book);
  }

  removeBookFromCart(){
    this.cartService.removeItem(this.book);
  }

  bookIsInCart(){
    return this.cartService.itemAlreadyExists(this.book);
  }

}

