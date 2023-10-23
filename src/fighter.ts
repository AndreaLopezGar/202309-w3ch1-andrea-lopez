import { stringify } from 'querystring';
import { Characters } from './characters';

export class Fighter extends Characters {
  phrasePersonal: string = 'Primero pego y luego pregunto';

  constructor(
    name: string,
    family: string,
    age: number,
    status: boolean,
    years: number,
    skill: number,
    weapon: string
  ) {
    super(name, family, age, status);
    this.skill = skill;
    this.weapon = weapon;
  }

  phrase() {
    return super.phrase(this.phrasePersonal);
  }
}
