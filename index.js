import Lion from './src/Animals/Mammals/Lion.js';
import Grass from './src/Food/Grass.js';
import Antibiotics from './src/Medicine/Antibiotics.js';

const lion = new Lion();
const lion2 = new Lion();

console.log(lion.id);
console.log(lion2.id);

console.log(new Antibiotics().toString());
