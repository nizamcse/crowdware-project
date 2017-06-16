import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    bookTitle: string;
    constructor(private bookService : BookService) {
        this.bookTitle = "";
    }

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
        this.bookService.setFilterText(title);
    }

}
