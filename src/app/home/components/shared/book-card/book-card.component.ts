import { Component, Input } from '@angular/core';
import { Book } from 'src/app/interfaces/book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: []
})
export class BookCardComponent {
  @Input(/*{requiered: true}*/) book!: Book; //quiete el requierd por que me generaba conflicto

}

