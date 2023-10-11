import { Component, Output, EventEmitter } from '@angular/core';
import { Player } from '../model';
import { DataService } from '../data.service';

@Component({
    selector: 'app-creator',
    templateUrl: './creator.component.html',
    styleUrls: ['./creator.component.css']
})
export class CreatorComponent {

    @Output() createPlayer: EventEmitter<Player> = new EventEmitter<Player>();

    name: string = "";
    position: string = "";
    image: string = "";

    constructor(private dataService: DataService) { };

    handleButtonClick(value: string[]) {

        if (value[0] === "" || value[1] === "" || value[2] === "") {
            alert("No se puede agregar un jugador sin nombre, posición o número.");
            return;
        }

        if (Number(value[2]) < 1 || Number(value[2]) > 23) {
            alert("El número ingresado en la imagen debe estar entre 1 y 23.");
            return;
        }

        let player: Player = {
            name: value[0],
            position: value[1],
            image: "/assets/images/Perro " + value[2] + ".jpg"
        };

        this.handleCreatePlayer(player);
    }

    handleCreatePlayer(player: Player) {
        this.createPlayer.emit(player);
    }
}
