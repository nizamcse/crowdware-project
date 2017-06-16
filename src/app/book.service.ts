import { Injectable } from '@angular/core';
import { Book } from './book';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';


@Injectable()
export class BookService {

    filterText:string;
    createBook:boolean;
    listView: boolean;
    flasMessage: string;
    msgStatus: boolean;
    books = [
        new Book("The Shawshank Redemption","1","tt0111161"),
        new Book("The Godfather: Part II","3","tt0071562"),
    ];

    constructor(private http: Http) {
        this.createBook = false;
        this.listView = false;
        this.filterText = "";
        this.flasMessage = "";
        this.msgStatus = false;
    }

    getFilterText(){
        return this.filterText;
    }
    setFilterText(text){
        this.filterText = text;
        console.log(text);
    }

    setCreateBook(){
        this.createBook = true;
    }

    getCreateBook(){
        return this.createBook;
    }

    cancelCreateBook(){
        this.createBook = false;
    }

    gridView(){
        this.listView = false;
    }

    listViewStyle(){
        this.listView = true;
    }

    getBooks(): Array<Book>{
        return this.books;
    }

    fetchAll() : Observable<Book[]> {
        return this.http.get('./assets/books.json').map((response: Response) => {
            this.books = response.json() as Book[];
            return this.books;
        });
    }

    returnId(): string{
        let id:string = "tt"+Math.floor(Date.now());
        return id.substring(0,9);
    }

    addBook(book:Book){
        if(this.books.unshift(book)){
            return true;
        }
        return false;
    }

    setFlash(msg: string, status: boolean){
        this.flasMessage = msg;
        this.msgStatus = status;
    }

}
