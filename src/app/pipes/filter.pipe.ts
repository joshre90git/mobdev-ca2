
/**  Title: ionic 4+: Search Bar - Módulos - Filtros
*    Author: Herrera, Fernando
*    Date: 18/March/2019
*    Code version: N/A
*    Availability: https://www.youtube.com/watch?v=T5pdU0s4J6w&t=1994s
**/

import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(quotes: any[], keyword: string): any[] {
        //This condition checks if the keyword is empty in the searchbar. If so, the returns the quotes array entirely   
        if (keyword.length === 0) {
            return quotes;
        }

        //Coverts the input into lower cases
        keyword = keyword.toLocaleLowerCase();

        //This returns the results of filtering the array according to the keyword
        return quotes.filter(quote => {
            //Function that looks if the keyword in teh search bar in in the Quote text
            return quote.quote.toLocaleLowerCase().includes(keyword)
                //Function that looks if the keyword in teh search bar in in the Author text
                || quote.author.toLocaleLowerCase().includes(keyword);
        });



    }



}
