export class Squire extends Characters {
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
    this.patron = 'Fighter';
    this.servitilityGrade = servitilityGrade;
    this.servitilityGrade = Math.trunc(Math.random() * 11);
  }

  phrase() {
    return super.phrase(this.phrasePersonal);
  }
}
