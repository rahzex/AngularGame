import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Player } from "@angular/core/src/render3/interfaces/player";
import { player } from "../player";
import { PlayerService } from "../player.service";

@Component({
  selector: "app-player-details",
  templateUrl: "./player-details.component.html",
  styleUrls: ["./player-details.component.css"]
})
export class PlayerDetailsComponent implements OnInit {
  constructor(private http: HttpClient, private Name: PlayerService) {}

  ngOnInit() {}

  startGame(value: any): any {
    this.Name.playerName = value;
  }
}
