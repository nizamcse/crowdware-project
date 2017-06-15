import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  constructor(private bookService : BookService) { }

  ngOnInit() {
    console.log(this.bookService.listView);
  }

}
