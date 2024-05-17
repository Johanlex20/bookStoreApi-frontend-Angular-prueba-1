import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Book } from 'src/app/interfaces/book.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: []
})
export class BookComponent implements OnInit{

  book?: Book;

  constructor(
    private homeService:HomeService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug')!;

    this.homeService.getBook(slug)
    .subscribe(book=>{
        this.book = book;
    })
  }

}
