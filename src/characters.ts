import { King } from './king';
import { Fighter } from './fighter';
import { Squire } from './squire';
import { Advisor } from './advisor';

const joffrey = new King('Joffrey', 'Baratheon', 16, 2);
const daenerys = new Fighter('Daenerys', 'Targaryen', 30, 'Dragones', 10);
const bronn = new Squire('Bronn', 'AguasNegras', 54, 0);
const tyrion = new Advisor('Tyrion', 'Lannister', 40, 'Daenerys');

export const characters = [joffrey, daenerys, bronn, tyrion];
