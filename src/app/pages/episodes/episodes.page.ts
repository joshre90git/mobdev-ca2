import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';



@Component({
    selector: 'app-episodes',
    templateUrl: './episodes.page.html',
    styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

    episodes = [];

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.api.getEpisodes().subscribe(data => {
            console.log('mydata :', data)
            this.episodes = this.episodes.concat(data);
            console.log('episodes :', this.episodes)
        })

    }

    openDetails(episode) {
        let episodeId = episode.episode_id;
        this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
        console.log(episodeId);
    }
}
