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
    editItem: number;
    editTitle:string;
    editRank:string;
    constructor(public bookService : BookService) {
        this.editItem = -1;
        this.editTitle = "";
        this.editRank = "";
    }

    ngOnInit() {
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
        this.bookService.setEditBook();
        this.editItem = this.books.indexOf(book);
        this.editTitle = book.title;
        this.editRank = book.rank;
    }

    onAdd(book){
        this.books.unshift(book);
    }

    onUpdate(){
        this.books[this.editItem].title = this.editTitle;
        this.books[this.editItem].rank = this.editRank;
        this.editItem = -1;
        this.editTitle = "";
        this.editRank = "";
        this.bookService.cancelEditBook();
        this.bookService.setFlash("Book has been Updated",true);
    }

}
