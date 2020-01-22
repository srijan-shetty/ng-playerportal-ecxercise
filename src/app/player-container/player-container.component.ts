import { Component, OnInit } from '@angular/core';
import { Player } from '../_models/player.model';

@Component({
  selector: 'app-player-container',
  templateUrl: './player-container.component.html',
  styleUrls: ['./player-container.component.css']
})
export class PlayerContainerComponent implements OnInit {
  players: Player[] = [
    {
      name: 'Merry Horrigan',
      bio: 'Robust zero tolerance superstructure',
      imageUrl: 'http://dummyimage.com/201x213.png/dddddd/000000'
    },
    {
      name: 'Creight Cathenod',
      bio: 'Extended coherent model',
      imageUrl: 'http://dummyimage.com/133x160.png/ff4444/ffffff'
    },
    {
      name: 'Arnold Sinkins',
      bio: 'Object-based grid-enabled Graphic Interface',
      imageUrl: 'http://dummyimage.com/231x155.png/dddddd/000000'
    },
    {
      name: 'Arv Frazer',
      bio: 'Open-architected clear-thinking project',
      imageUrl: 'http://dummyimage.com/116x190.jpg/5fa2dd/ffffff'
    },
    {
      name: 'Cahra Danielian',
      bio: 'Phased tertiary support',
      imageUrl: 'http://dummyimage.com/195x176.bmp/ff4444/ffffff'
    },
    {
      name: 'Ruby Murie',
      bio: 'Realigned bandwidth-monitored archive',
      imageUrl: 'http://dummyimage.com/151x143.png/cc0000/ffffff'
    },
    {
      name: 'Emile Gertz',
      bio: 'Robust demand-driven neural-net',
      imageUrl: 'http://dummyimage.com/164x234.jpg/dddddd/000000'
    },
    {
      name: 'Vivianna Harlin',
      bio: 'Configurable object-oriented help-desk',
      imageUrl: 'http://dummyimage.com/108x238.jpg/cc0000/ffffff'
    },
    {
      name: 'Shaun MacShirrie',
      bio: 'Profound 24 hour capability',
      imageUrl: 'http://dummyimage.com/223x101.png/5fa2dd/ffffff'
    },
    {
      name: 'Madeleine Brewitt',
      bio: 'Realigned reciprocal migration',
      imageUrl: 'http://dummyimage.com/242x164.png/cc0000/ffffff'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
