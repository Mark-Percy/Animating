import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Player1Component } from './football-game/player1/player1.component';
import { HeaderComponent } from './header/header.component';
import { FootballGameComponent } from './football-game/football-game.component';

@NgModule({
  declarations: [
    AppComponent,
    Player1Component,
    HeaderComponent,
    FootballGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
