import Animal from './Animals/Animal.js';
import Enclosure from './Enclosures/Enclosure';
import Employee from './Employees/Employee';

class Zoo {
  location = '';
  enclosures = [];
  employees = [];

  constructor(location) {
    this.location = location;
  }

  addEnclosure(enclosure) {
    if (enclosure instanceof Enclosure) {
      enclosure.parentZoo = this;
      this.enclosures.push(enclosure);
    }
  }

  hireEmployee(employee) {
    if (employee instanceof Employee) this.employees.push(employee);
  }

  findAvailableEnclosure(animal) {
    if (animal instanceof Animal) {
      for (
        let currentEnclosure = 0;
        currentEnclosure < this.enclosures.length;
        currentEnclosure++
      ) {
        const enclosure = this.enclosures[currentEnclosure];
        if (
          enclosure.isFriendlyForAnimal(animal) &&
          enclosure.availableSpace() >= animal.requiredSpaceSqFt
        )
          return enclosure;
      }
    }
    return null;
  }
}

export default Zoo;
