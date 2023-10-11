import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../model';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    player?: Player;

    constructor(
        private route: ActivatedRoute,
        private dataService: DataService
    ) { }

    ngOnInit(): void {
        const name = this.route.snapshot.paramMap.get('name');
        if (name) {
            this.getPlayer(name);
        }
    }

    getPlayer(name: string): void {
        this.player = this.dataService.getPlayer(name);
    }

}
