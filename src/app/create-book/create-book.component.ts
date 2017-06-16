import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../book";

@Component({
    selector: 'app-create-book',
    templateUrl: './create-book.component.html',
    styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
    boookTitle: string;
    id: string;
    rank: string;
    constructor(public bookService : BookService) {
        this.boookTitle = "";
        this.id = "";
        this.rank = "";
    }

    ngOnInit() {

    }

    saveBook(){
        let book = new Book(this.boookTitle,this.rank,this.bookService.returnId());
        if(this.bookService.addBook(book)){
            this.bookService.setFlash("Book has been added",true);
            this.boookTitle = "";
            this.rank = "";
            this.bookService.cancelCreateBook();
        }
        else{
            this.bookService.setFlash("Something wrong with the form submission",false);
        }
    }

}
