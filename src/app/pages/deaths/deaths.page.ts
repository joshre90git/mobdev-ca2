import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-deaths',
    templateUrl: './deaths.page.html',
    styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {
    deaths: Observable<any>;
    deaths_array: any[] = [];
    findKey = '';

    constructor(private router: Router, private api: ApiService) { }
    ngOnInit() {
        this.deaths = this.api.getDeaths();
        this.deaths.subscribe(data => {
            this.deaths_array = [data];
            console.log(this.deaths_array);
        })
    }

    getDeathKey(event) {
        const keyword = event.target.value;
        this.findKey = keyword;
        console.log(keyword);
    }

}
