export abstract class Character {
  name: string;
  family: string;
  age: number;
  isAlive = boolean;
  protected personalQuote = string;
  category!: 'King' | 'Fighter' | 'Advisor' | 'Squire';

  constructor(name: string, family: string, age: number) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.isAlive = true;
    this.personalQuote = '';
  }

  talk() {
    return this.personalQuote;
  }

  dead() {
    this.isAlive = false;
  }
}

const x = new cha();
