import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PlayerService } from "../player.service";
import { player } from "../player";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  timeLeft: number = 60;
  interval;
  score: number = 0;
  timeSpeed = 1000;
  currentTime = 60;

  c1: boolean = false;
  c2: boolean = false;
  c3: boolean = false;
  c4: boolean = false;

  constructor(
    private router: Router,
    private Name: PlayerService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.colorChange();
      } else {
        clearInterval(this.interval);
        this.postData();
      }
    }, this.timeSpeed);
  }

  colorChange() {
    this.c1 = false;
    this.c2 = false;
    this.c3 = false;
    this.c4 = false;

    let number = Math.floor(Math.random() * 4 + 1);
    //console.log(number);

    if (number == 1) {
      this.c1 = true;
    } else if (number == 2) {
      this.c2 = true;
    } else if (number == 3) {
      this.c3 = true;
    } else {
      this.c4 = true;
    }
  }

  colorChangeOnClick(checkColor: boolean) {
    if (checkColor) this.score += 10;
    else this.score -= 5;
    //Speed Change
    if (this.score > 50 && this.score < 100) {
      clearInterval(this.interval);
      this.timeSpeed = 700;
      this.startTimer();
    } else if (this.score > 100 && this.score < 200) {
      clearInterval(this.interval);
      this.timeSpeed = 500;
      this.startTimer();
    } else if (this.score > 200) {
      clearInterval();
      this.timeSpeed = 300;
      this.startTimer();
    }
    //console.log("Time Speed", this.timeSpeed);
    this.colorChange;
  }

  postData() {
    let playerDetails: player = {
      name: this.Name.playerName,
      score: this.score
    };
    this.Name.name = playerDetails;
    return this.http
      .post(environment.serverUrl, playerDetails)
      .subscribe((data: any) => {
        console.log(data);
        this.router.navigate(["Scores"]);
      });
  }
}
