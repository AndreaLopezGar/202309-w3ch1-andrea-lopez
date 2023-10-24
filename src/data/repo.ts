import { King } from '../GoT/king.js';
import { Fighter } from '..GoT/fighter.js';
import { Squire } from '../GoT/squire.js';
import { Advisor } from '../GoT/advisor.js';

// Const joffrey = new King('Joffrey', 'Baratheon', 16, 2);
// const daenerys = new Fighter('Daenerys', 'Targaryen', 30, 'Dragones', 10);
// const bronn = new Squire('Bronn', 'AguasNegras', 54, 0);
// const tyrion = new Advisor('Tyrion', 'Lannister', 40, 'Daenerys');
// const jaime = new Fighter('Jaime', 'Lannister', 30, 'Dragones', 10);

export function repo(){
 const characters = [
  new King('Joffrey', 'Baratheon', 16, 2),
  new Fighter('Jaime', 'Lannister', 30, 'Dragones', 10),
  new Fighter('Daenerys', 'Targaryen', 30, 'Dragones', 10),
];

characters.push( new Advisor('Tyrion', 'Lannister', 40, characters[2]));
characters.push(new Squire(
  'Bronn',
  'AguasNegras',
  54,
  0,
  characters[1] as Fighter);


  return JSON.parse(JSON.stringify(characters));
 
}

