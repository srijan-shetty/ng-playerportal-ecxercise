import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../_models/player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {
  @Input() player: Player;

  constructor(public playerService: PlayerService) {}

  ngOnInit() {}

  onLike() {
    this.player.nLikes++;
  }
}
