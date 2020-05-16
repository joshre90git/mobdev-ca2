import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEYEpi = 'favouriteEpisodes';
const STORAGE_KEYChar = 'favouriteCharacteres';


@Injectable({
    providedIn: 'root'
})
export class FavouriteService {
    constructor(private storage: Storage) { }

    getAllFavouriteEpisodes() {
        return this.storage.get(STORAGE_KEYEpi);
    }

    isFavouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            return result && result.indexOf(episodeId) !== -1;
        });
    }

    favouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                result.push(episodeId);
                return this.storage.set(STORAGE_KEYEpi, result);
            } else {
                return this.storage.set(STORAGE_KEYEpi, [episodeId]);
            }
        });
    }

    unfavouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                var index = result.indexOf(episodeId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEYEpi, result);
            }

        });
    }

    getAllFavouriteCharacters() {
        return this.storage.get(STORAGE_KEYChar);
    }

    isFavouriteCharacter(characterId) {
        return this.getAllFavouriteCharacters().then(result => {
            return result && result.indexOf(characterId) !== -1;
        });
    }

    favouriteCharacter(characterId) {
        return this.getAllFavouriteCharacters().then(result => {
            if (result) {
                result.push(characterId);
                return this.storage.set(STORAGE_KEYChar, result);
            } else {
                return this.storage.set(STORAGE_KEYChar, [characterId]);
            }
        });
    }

    unfavouriteCharacter(characterId) {
        return this.getAllFavouriteCharacters().then(result => {
            if (result) {
                var index = result.indexOf(characterId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEYChar, result);
            }

        });

    }


    getAllFavouriteQuotes() {
        return this.storage.get(STORAGE_KEYChar);
    }

    isFavouriteQuote(quoteId) {
        return this.getAllFavouriteQuotes().then(result => {
            return result && result.indexOf(quoteId) !== -1;
        });
    }

    favouriteQuote(quoteId) {
        return this.getAllFavouriteQuotes().then(result => {
            if (result) {
                result.push(quoteId);
                return this.storage.set(STORAGE_KEYChar, result);
            } else {
                return this.storage.set(STORAGE_KEYChar, [quoteId]);
            }
        });
    }

    unfavouriteQuote(quoteId) {
        return this.getAllFavouriteQuotes().then(result => {
            if (result) {
                var index = result.indexOf(quoteId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEYChar, result);
            }

        });

    }






}