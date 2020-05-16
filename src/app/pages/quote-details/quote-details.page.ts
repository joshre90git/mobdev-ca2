import { FavouriteService } from './../../services/favourite.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-quote-details',
    templateUrl: './quote-details.page.html',
    styleUrls: ['./quote-details.page.scss'],
})
export class QuoteDetailsPage implements OnInit {
    quote: any;
    quoteId = null;
    isFavourite = false;

    constructor(private activatedRoute: ActivatedRoute,
        private api: ApiService, private favouriteService: FavouriteService) { }

    ngOnInit() {
        this.quoteId = this.activatedRoute.snapshot.paramMap.get('id');

        this.api.getQuote(this.quoteId).subscribe(res => {
            this.quote = res[0];
            console.log(JSON.stringify(this.quote.quote_id));
            console.log(this.isFavourite);
        });


        this.favouriteService.isFavouriteQuote(this.quoteId).then(isFav => {
            this.isFavourite = isFav;
        });
    }

    favouriteQuote() {
        this.favouriteService.favouriteQuote(this.quoteId).then(() => {
            this.isFavourite = true;
        });
    }

    unfavouriteQuote() {
        this.favouriteService.unfavouriteQuote(this.quoteId).then(() => {
            this.isFavourite = false;
        });
    }
}