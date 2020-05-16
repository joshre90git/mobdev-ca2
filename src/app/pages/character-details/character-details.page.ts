import { FavouriteService } from './../../services/favourite.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

    character: any;
    isFavourite = false;
    characterId = null;

    constructor(private activatedRoute: ActivatedRoute,
        private api: ApiService, private favouriteService: FavouriteService) { }

    ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        console.log(this.characterId);

        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
            console.log(JSON.stringify(this.character));
        });


        this.favouriteService.isFavouriteCharacter(this.characterId).then(isFav => {
            this.isFavourite = isFav;
        });
    }

    favouriteCharacter() {
        this.favouriteService.favouriteEpisode(this.characterId).then(() => {
            this.isFavourite = true;
        });
    }

    unfavouriteCharacter() {
        this.favouriteService.unfavouriteEpisode(this.characterId).then(() => {
            this.isFavourite = false;
        });
    }
}