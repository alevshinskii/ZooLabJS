import Employee from './Employee.js';
import Animal from '../Animals/Animal.js';
import Antibiotics from '../Medicine/Antibiotics.js';
import Logger from '../Logger';

class Veterinarian extends Employee {
  constructor(firstName, lastName) {
    super(firstName, lastName);
    Logger.write('New Veterinarian created ' + firstName + ' ' + lastName);
  }
  healAnimal(animal) {
    if (animal instanceof Animal) {
      animal.heal(new Antibiotics());
      Logger.write('Animal ' + animal.id + ' healed by ' + this.lastName);
    }
  }
}

export default Veterinarian;
