import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PlayerDetailsComponent } from "./player-details/player-details.component";
import { GameComponent } from "./game/game.component";
import { ScoreComponent } from "./score/score.component";
import { C1Component } from "./c1/c1.component";
import { C2Component } from "./c2/c2.component";
import { C3Component } from "./c3/c3.component";
import { C4Component } from "./c4/c4.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "playerDetails", component: PlayerDetailsComponent },
  { path: "Games", component: GameComponent },
  { path: "Scores", component: ScoreComponent },
  { path: "**", component: HomeComponent },
  { path: "C1", component: C1Component },
  { path: "C2", component: C2Component },
  { path: "C3", component: C3Component },
  { path: "C4", component: C4Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  PlayerDetailsComponent,
  GameComponent,
  ScoreComponent,
  C1Component,
  C2Component,
  C3Component,
  C4Component
];
