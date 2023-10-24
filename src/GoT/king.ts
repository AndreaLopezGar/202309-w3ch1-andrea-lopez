import { Character } from './character.js';

export class King extends Character {
  years: number;
  personalQuote: string = 'Vais a morir todos';

  constructor(name: string, family: string, age: number, years: number) {
    super(name, family, age);
    this.years = years;
    this.personalQuote = 'Vais a morir todos';
    this.category = 'King';
  }
}
