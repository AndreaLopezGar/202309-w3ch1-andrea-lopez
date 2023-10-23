export class Characters {
  name: string;
  family: string;
  age: number;
  status: boolean = true;

  // eslint-disable-next-line no-unused-vars
  constructor(name: string, family: string, age: number, status: boolean) {
    this.name = name;
    this.family = family;
  }

  phrase(value: string) {
    return value;
  }

  dead(status: boolean) {
    this.status = false;
  }
}
