import { Character } from './character.js';

export class Advisor extends Character {
  advisorBoss: Character;
  personalQuote: string = 'No sé por qué, pero creo que voy a morir pronto';

  constructor(name: string, family: string, age: number, advise: string) {
    super(name, family, age);
    this.advisorBoss = advisorBoss;
    this.category = 'Advisor';
  }

  phrase() {
    return super.phrase(this.personalQuote);
  }
}
