import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      { id: 11, name: 'Dr Nice', age: 22, level: 58, heroClass: 'Barbarian', friends: ['Narco', 'Bombasto'] },
      { id: 12, name: 'Narco', age: 18, level: 33, heroClass: 'Cleric', friends: ['Dr Nice', 'Bombasto'] },
      { id: 13, name: 'Bombasto', age: 30, level: 75, heroClass: 'Rogue', friends: ['Narco', 'Dr Nice'] },
      { id: 14, name: 'Celeritas', age: 25, level: 60, heroClass: 'Wizard', friends: ['Magma', 'RubberMan'] },
      { id: 15, name: 'Magneta', age: 29, level: 45, heroClass: 'Fighter', friends: ['Narco', 'Dr IQ'] },
      { id: 16, name: 'RubberMan', age: 33, level: 80, heroClass: 'Cleric', friends: ['Magneta', 'Tornado'] },
      { id: 17, name: 'Dynama', age: 22, level: 15, heroClass: 'Barbarian', friends: ['Narco', 'Dr IQ'] },
      { id: 18, name: 'Dr IQ', age: 20, level: 22, heroClass: 'Fighter', friends: ['Tornado', 'RubberMan'] },
      { id: 19, name: 'Magma', age: 35, level: 56, heroClass: 'Rogue', friends: ['Celeritas', 'Dynama'] },
      { id: 20, name: 'Tornado', age: 31, level: 50, heroClass: 'Wizard', friends: ['Dynama', 'Magma'] }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
