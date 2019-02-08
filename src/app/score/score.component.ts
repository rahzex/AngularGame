import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PlayerService } from "../player.service";

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
    this.http.get("http://localhost:3004/posts").subscribe((data: any) => {
      console.log(data);
      this.allScores = data;
      this.allScores.sort((a, b) => b.score - a.score);
    });
  }
}
