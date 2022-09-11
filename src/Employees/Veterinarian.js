import Employee from './Employee';
import Animal from '../Animals/Animal.js';
import Antibiotics from '../Medicine/Antibiotics.js';

class Veterinarian extends Employee {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }

  healAnimal(animal) {
    if (animal instanceof Animal) {
      animal.heal(new Antibiotics());
    }
  }
}

export default Veterinarian;
