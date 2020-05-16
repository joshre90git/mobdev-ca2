import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    baseUrl='https://www.breakingbadapi.com/api';
    //baseUrl='https://8100-a815ba84-ce74-4c40-95e8-992fdb5caf3d.ws-eu01.gitpod.io/assets';
    //baseUrl = 'https://pokeapi.co/api/v2';

    constructor(private http: HttpClient) { }

    getEpisodes() {
        return this.http.get(`${this.baseUrl}/episodes`)
    }
    getEpisode(id) {
        return this.http.get(`${this.baseUrl}/episodes/${id}`);
        //return this.http.get(`//https://www.breakingbadapi.com/api/episodes/${id}`);
        //https://8100-fb983808-a5a5-4e61-a2b7-7795f430d4b4.ws-eu01.gitpod.io/assets/episode.json
    }

    getCharacters(offset) {
        return this.http.get(`${this.baseUrl}/characters?offset=${offset}&limit=15`);
        //return this.http.get(`${this.baseUrl}/characters?offset=${offset}&limit=15`);

    }

    getCharacter(id) {
        return this.http.get(`${this.baseUrl}/characters/${id}`);
        //return this.http.get(`//https://www.breakingbadapi.com/api/characters/${id}`);
    }

    getDeaths() {
        return this.http.get(`${this.baseUrl}/deaths`);
        //return this.http.get(`//https://www.breakingbadapi.com/api/deaths`);
    }

    getQuotes() {
        return this.http.get(`${this.baseUrl}/quotes`);
        //return this.http.get(`//https://www.breakingbadapi.com/api/quotes`);
    }

    getQuote(id) {
        return this.http.get(`${this.baseUrl}/quotes/${id}`);
        //return this.http.get(`${this.baseUrl}/quotes/${id}`);
    }


}
