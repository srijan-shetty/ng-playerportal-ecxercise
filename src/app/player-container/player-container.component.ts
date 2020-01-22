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
      name: 'Jsandye Bilton',
      bio: 'Ergonomic impactful process improvement',
      imageUrl: 'https://robohash.org/etevenietex.png?size=100x100&set=set1'
    },
    {
      name: 'Barbaraanne Orring',
      bio: 'Multi-lateral 6th generation pricing structure',
      imageUrl:
        'https://robohash.org/dolorumsaepequasi.png?size=100x100&set=set1'
    },
    {
      name: 'Celina Dalliwater',
      bio: 'Future-proofed impactful analyzer',
      imageUrl:
        'https://robohash.org/etlaborerepudiandae.png?size=100x100&set=set1'
    },
    {
      name: 'Bill Jurgen',
      bio: 'Adaptive multi-state adapter',
      imageUrl:
        'https://robohash.org/quiarecusandaenatus.png?size=100x100&set=set1'
    },
    {
      name: 'Loretta Rutigliano',
      bio: 'Multi-lateral solution-oriented benchmark',
      imageUrl:
        'https://robohash.org/modieaquecupiditate.png?size=100x100&set=set1'
    },
    {
      name: 'Matilda Choupin',
      bio: 'Re-engineered systemic artificial intelligence',
      imageUrl:
        'https://robohash.org/totamcorruptineque.png?size=100x100&set=set1'
    },
    {
      name: 'Doug Derrington',
      bio: 'Implemented executive budgetary management',
      imageUrl:
        'https://robohash.org/sintvoluptatemut.png?size=100x100&set=set1'
    },
    {
      name: 'Guinna Valler',
      bio: 'Multi-layered multimedia core',
      imageUrl:
        'https://robohash.org/quiaconsequunturdolores.png?size=100x100&set=set1'
    },
    {
      name: 'Alisander Bentote',
      bio: 'Diverse even-keeled application',
      imageUrl: 'https://robohash.org/sedquieaque.png?size=100x100&set=set1'
    },
    {
      name: 'Octavius Berka',
      bio: 'Synchronised heuristic focus group',
      imageUrl:
        'https://robohash.org/perferendisdoloremomnis.png?size=100x100&set=set1'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
