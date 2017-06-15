import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../book";

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

    books = [
        new Book("The Shawshank Redemption","1","tt0111161"),
        new Book("The Godfather: Part II","3","tt0071562"),
    ];

    constructor(private bookService : BookService) { }

    ngOnInit() {
    }

    onDelete(book){
        console.log(book);
    }
    onEdit(book){
        console.log(book);
    }

    onAdd(book){
        this.books.unshift(book);
        console.log(book);
    }

}
