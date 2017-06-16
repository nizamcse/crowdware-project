import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(books: any, title: string = null): any {
        if(!title){
            return books;
        }

        return books.filter(function (book) {
            return book.title.toUpperCase().includes(title.toUpperCase());
        })
    }


}
