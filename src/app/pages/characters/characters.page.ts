import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http'

@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

    offset = 0;
    characters = [];
    page = 0;

    constructor(private router: Router, private api: ApiService, private http: HttpClient) { }
    ngOnInit() {
        this.loadCharacters();
    }


    loadCharacters(loadData = false) {

        if (loadData) {
            this.offset += 15;
            console.log(this.offset);
        }

        this.api.getCharacters(this.offset).subscribe(data => {
            console.log('mydata_character:', data)
            this.characters = this.characters.concat(data);
        })
    }

    ///Code taken from ion-infinite-scroll - Ionic Documentation | https://ionicframework.com/docs/api/infinite-scroll#react
    loadData(event) {
        setTimeout(() => {
            event.target.complete(this.loadCharacters(event));

            if (this.characters.length > 150) {
                event.target.disabled = true;
            }
        }, 500);
    }


    openDetails(character) {
        let characterId = character.char_id;
        console.log("Character_id: ", characterId);
        this.router.navigateByUrl(`/tabs/characters/${characterId}`);

    }

}