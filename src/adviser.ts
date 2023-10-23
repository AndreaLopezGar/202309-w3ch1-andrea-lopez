import { Characters } from './characters';

export class Adviser extends Characters {
  advisor: string;
  phrasePersonal: string = 'No sé por qué, pero creo que voy a morir pronto';

  constructor(
    name: string,
    family: string,
    age: number,
    status: boolean,
    advise: string
  ) {
    super(name, family, age, status);
    this.advisor = advise;
  }

  phrase() {
    return super.phrase(this.phrasePersonal);
  }
}
