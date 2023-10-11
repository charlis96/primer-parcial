import { Injectable } from '@angular/core';
import { Player } from './model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    PLAYERS: Player[] = []

    constructor() { }

    getPlayers() {
        return this.PLAYERS;
    }

    getPlayer(name: string): Player | undefined {
        return this.PLAYERS.find(player => player.name === name);
    }

    addPlayer(player: Player) {
        this.PLAYERS.push(player);
    }
}
