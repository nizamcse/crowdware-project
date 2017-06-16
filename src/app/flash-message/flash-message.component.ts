import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";

@Component({
    selector: 'app-flash-message',
    templateUrl: './flash-message.component.html',
    styleUrls: ['./flash-message.component.css']
})
export class FlashMessageComponent implements OnInit {

    constructor(public bookService: BookService) { }

    ngOnInit() {
    }

    onClose(e){

    }


}
