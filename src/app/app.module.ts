import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { PlayerContainerComponent } from './player-container/player-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerCardComponent,
    PlayerContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
