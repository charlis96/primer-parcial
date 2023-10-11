import { Component, OnInit, OnChanges } from '@angular/core';
import { Player } from '../model';
import { DataService } from '../data.service';

@Component({
    selector: 'app-principal',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

    players: Player[] = [];

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.getPlayers();
    }

    createPlayer(newPlayer: Player) {

        if (this.players.length < 23) {

            for (let player of this.players) {
                if (newPlayer.name === player.name) {
                    alert("Ya existe un jugador con ese nombre.");
                    return;
                }
            }

            this.dataService.addPlayer(newPlayer);
            this.getPlayers();

        } else {
            alert("No se puede agregar más jugadores.");
        }
    }

    getPlayers(): void {
        this.players = this.dataService.getPlayers();
    }

}
