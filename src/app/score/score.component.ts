import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PlayerService } from "../player.service";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-score",
  templateUrl: "./score.component.html",
  styleUrls: ["./score.component.css"]
})
export class ScoreComponent implements OnInit {
  allScores = [];
  currentPlayer = this.Player.name;
  constructor(private http: HttpClient, private Player: PlayerService) {}

  ngOnInit() {
    this.http.get(environment.serverUrl).subscribe((data: any) => {
      console.log(data);
      this.allScores = data;
      this.allScores.sort((a, b) => b.score - a.score);
    });
  }
}
