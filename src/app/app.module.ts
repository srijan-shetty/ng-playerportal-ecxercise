import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { PlayerContainerComponent } from './player-container/player-container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TformComponent } from './tform/tform.component';
import { MinlengthCloneDirective } from './minlength-clone.directive';
import { RformComponent } from './rform/rform.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerCardComponent,
    PlayerContainerComponent,
    NavbarComponent,
    FooterComponent,
    TformComponent,
    MinlengthCloneDirective,
    RformComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
