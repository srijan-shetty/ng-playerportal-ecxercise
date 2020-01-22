import { Component, OnInit } from '@angular/core';
import { Player } from '../_models/player.model';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {
  player: Player = {
    name: 'Default Player',
    bio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'assets/angular.png'
  };

  constructor() {}

  ngOnInit() {}
}
