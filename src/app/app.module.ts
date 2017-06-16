import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookComponent } from './book/book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import {BookService} from "./book.service";
import { FlashMessageComponent } from './flash-message/flash-message.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BookComponent,
        CreateBookComponent,
        FlashMessageComponent,
        FilterPipe
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    providers: [BookService],
    bootstrap: [AppComponent]
})
export class AppModule { }
