import { Character } from './character';

export class Fighter extends Character {
  skill: number;
  weapon: string;
  phrasePersonal: string = 'Primero pego y luego pregunto';

  constructor(
    name: string,
    family: string,
    age: number,
    weapon: string,
    skill: number
  ) {
    super(name, family, age);
    this.weapon = weapon;
    this.skill = skill;
  }

  phrase() {
    return super.phrase(this.phrasePersonal);
  }
}
