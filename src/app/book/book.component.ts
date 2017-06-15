import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

    books = [
        {
            "title": "The Shawshank Redemption",
            "rank": "1",
            "id": "tt0111161"
        },
        {
            "title": "The Godfather",
            "rank": "2",
            "id": "tt0068646"
        },
        {
            "title": "The Godfather: Part II",
            "rank": "3",
            "id": "tt0071562"
        },
        {
            "title": "Pulp Fiction",
            "rank": "4",
            "id": "tt0110912"
        }
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
