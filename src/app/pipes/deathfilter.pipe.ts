/**  Title: ionic 4+: Search Bar - Módulos - Filtros
*    Author: Herrera, Fernando
*    Date: 18/March/2019
*    Code version: N/A
*    Availability: https://www.youtube.com/watch?v=T5pdU0s4J6w&t=1994s
**/

import { Pipe, PipeTransform } from '@angular/core';
import { Quote } from '@angular/compiler';

@Pipe({
    name: 'deathfilter'
})
export class DeathfilterPipe implements PipeTransform {

    transform(deaths: any[], keyword: string): any[] {
        //This condition checks if the keyword is empty in the searchbar. If so, the returns the quotes array entirely
        if (keyword.length === 0) {
            return deaths;
        }
        //Coverts the input into lower cases
        keyword = keyword.toLocaleLowerCase();

        //This returns the results of filtering the array according to the keyword
        return deaths.filter(death => {

            //Function that looks if the keyword in the search bar in in the Death section text
            return death.death.toLocaleLowerCase().includes(keyword)
                //Function that looks if the keyword in the search bar in in the Cause section text
                || death.cause.toLocaleLowerCase().includes(keyword)
                //Function that looks if the keyword in the search bar in in the Responisble section text
                || death.responsible.toLocaleLowerCase().includes(keyword)
                //Function that looks if the keyword in the search bar in in the last_word section text
                || death.last_words.toLocaleLowerCase().includes(keyword);

        });



    }



}
