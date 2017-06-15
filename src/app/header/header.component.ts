import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private bookService : BookService) { }

  ngOnInit() {
  }

  onCreateNew(e){
    this.bookService.setCreateBook();
    console.log("create");
  }

  onGridView(e){
    this.bookService.gridView();
    console.log("grid");
  }
  onListView(e){
    this.bookService.listViewStyle();
    console.log("list");
  }
  onChangeInput(title){
    //.bookService.setFilterText(title);
  }

  returnId(): string{
    let id:string = "tt"+Math.floor(Date.now());
    return id.substring(0,9);
  }

}
