import { Injectable } from '@angular/core';
import { Player } from './_models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players: Player[] = [
    {
      name: 'Suzi Skoate',
      bio: 'Virtual static matrices',
      imageUrl: 'https://robohash.org/utautemsint.png?size=100x100&set=set1',
      nLikes: 0
    },
    {
      name: 'Sarette Vinnick',
      bio: 'User-friendly responsive project',
      imageUrl: 'https://robohash.org/aliasoditnam.png?size=100x100&set=set1',
      nLikes: 0
    },
    {
      name: 'Ezekiel Westwell',
      bio: 'Pre-emptive disintermediate instruction set',
      imageUrl:
        'https://robohash.org/cumqueaccusamusqui.png?size=100x100&set=set1',
      nLikes: 0
    },
    {
      name: 'Donia Arman',
      bio: 'Switchable full-range internet solution',
      imageUrl:
        'https://robohash.org/distinctioarchitectomodi.png?size=100x100&set=set1',
      nLikes: 0
    },
    {
      name: 'Doretta Mullins',
      bio: 'Triple-buffered well-modulated alliance',
      imageUrl: 'https://robohash.org/totamatqueut.png?size=100x100&set=set1',
      nLikes: 0
    },
    {
      name: 'Piotr Casse',
      bio: 'Digitized human-resource task-force',
      imageUrl:
        'https://robohash.org/saepeveniamlaboriosam.png?size=100x100&set=set1',
      nLikes: 0
    },
    {
      name: 'Micheal Kuhlen',
      bio: 'Robust bi-directional array',
      imageUrl:
        'https://robohash.org/ducimusomnisquas.png?size=100x100&set=set1',
      nLikes: 0
    },
    {
      name: 'Frederik Foard',
      bio: 'Public-key client-server protocol',
      imageUrl: 'https://robohash.org/abodiovoluptas.png?size=100x100&set=set1',
      nLikes: 0
    },
    {
      name: 'Coretta Aldrin',
      bio: 'Horizontal fresh-thinking protocol',
      imageUrl:
        'https://robohash.org/odiosolutaculpa.png?size=100x100&set=set1',
      nLikes: 0
    },
    {
      name: 'Mabel Twigger',
      bio: 'Polarised mobile Graphic Interface',
      imageUrl:
        'https://robohash.org/fugiatdolorumquidem.png?size=100x100&set=set1',
      nLikes: 0
    }
  ];

  get totalLikes(): number {
    let total = 0;

    //  Lambda expression
    this.players.forEach(p => {
      total += p.nLikes;
    });

    //  anonymous function same as lambda, old school approach
    // this.players.forEach(function(p) {
    //   total += p.nLikes;
    // });

    return total;
  }

  constructor() {}
}
