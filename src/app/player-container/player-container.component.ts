import { Component, OnInit } from '@angular/core';
import { Player } from '../_models/player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-container',
  templateUrl: './player-container.component.html',
  styleUrls: ['./player-container.component.css']
})
export class PlayerContainerComponent implements OnInit {
  constructor(public playerService: PlayerService) {}

  ngOnInit() {}
}
