import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../book";

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {


    books = [];
    constructor(private bookService : BookService) { }

    ngOnInit() {
        //console.log(this.bookService.fetchAll());
        //this.books = this.bookService.getBooks();
        this.bookService.fetchAll().subscribe((books) => {
            this.books = books;
        });
    }

    onDelete(book){
        let index: number = this.books.indexOf(book);
        //this.books.filter(item => item.id !== id);
        if(this.books.splice(index,1)){
            this.bookService.setFlash("Book has been deleted",false);
        }
    }
    onEdit(book){
        console.log(book);
    }

    onAdd(book){
        this.books.unshift(book);
        console.log(book);
    }

}
