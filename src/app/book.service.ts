import { Injectable } from '@angular/core';

@Injectable()
export class BookService {

    filterText:string;
    createBook:boolean;
    listView: boolean;

    constructor() {
        this.createBook = false;
        this.listView = false;
        this.filterText = "";
    }

    getFilterText(){
        return this.filterText;
    }
    setFilterText(text){
        this.filterText = text;
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

}
