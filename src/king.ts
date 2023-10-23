import { Character } from './characters';

export class King extends Characters {
  years: number;
  phrasePersonal: string = '';

  constructor(
    name: string,
    family: string,
    age: number,
    status: boolean,
    years: number
  ) {
    super(name, family, age, status);
    this.years = years;
  }

  phrase() {
    return super.phrase('Vais a morir todos');
  }
}
