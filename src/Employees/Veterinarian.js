import Employee from './Employee.js';
import Animal from '../Animals/Animal.js';
import Antibiotics from '../Medicine/Antibiotics.js';

class Veterinarian extends Employee {
  healAnimal(animal) {
    if (animal instanceof Animal) {
      animal.heal(new Antibiotics());
    }
  }
}

export default Veterinarian;
