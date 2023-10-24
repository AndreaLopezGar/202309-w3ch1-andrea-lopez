import { Character } from './character.js';
import { Fighter } from './fighter.js';

export class Squire extends Character {
  patron: Fighter;
  servilityGrade: number;

  constructor(
    name: string,
    family: string,
    age: number,
    servilityGrade: number
    patron=Fighter
  ) {
    super(name, family, age);
    this.patron = 'Fighter';
    this.servilityGrade = servilityGrade;
    this.personalQuote = 'Soy un loser';
    this.category='Squire'
  }

  phrase() {
    return super.phrase(this.personalQuote);
  }
}
