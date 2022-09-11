import Animal from '../Animals/Animal';

class Employee {
  firstName;
  lastName;
  animalExperience = [];

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  addAnimalExperience(animal) {
    if (animal instanceof Animal) {
      this.animalExperience.push(animal.getType());
    }
  }

  hasAnimalExperience(animal) {
    if (animal instanceof Animal)
      return this.animalExperience.includes(animal.getType());
  }
}

export default Employee;
