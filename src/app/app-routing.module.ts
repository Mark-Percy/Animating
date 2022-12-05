import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballGameComponent } from './football-game/football-game.component';

const routes: Routes = [
  {path:'games/football', component: FootballGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
