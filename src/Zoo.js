import Animal from './Animals/Animal.js';
import Enclosure from './Enclosures/Enclosure.js';
import Employee from './Employees/Employee.js';
import HireValidatorProvider from './Validators/HireValidatorProvider.js';
import NoAvailableEnclosureError from './Errors/NoAvailableEnclosureError';
import NoNeededExperienceError from './Errors/NoNeededExperienceError';
import ZooKeeper from './Employees/ZooKeeper';
import Veterinarian from './Employees/Veterinarian';
import Logger from './Logger.js';

class Zoo {
  location = '';
  enclosures = [];
  employees = [];
  hireValidatorProvider;

  constructor(location) {
    this.location = location;
    this.hireValidatorProvider = new HireValidatorProvider(this);
    Logger.write('New zoo created on location ' + location);
  }

  addEnclosure(enclosure) {
    if (enclosure instanceof Enclosure) {
      enclosure.parentZoo = this;
      this.enclosures.push(enclosure);
      Logger.write('New enclosure added with name' + enclosure.name);
    }
  }

  hireEmployee(employee) {
    if (employee instanceof Employee) {
      const validator = this.hireValidatorProvider.getValidator(employee);
      if (!validator.validateEmployee(employee).length) {
        this.employees.push(employee);
        Logger.write('New employee hired with name' + employee.lastName);
      } else
        throw new NoNeededExperienceError(
          'Employee ' +
            employee.lastName +
            ' have no needed experience to work in zoo ' +
            this.location,
        );
    }
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
      throw new NoAvailableEnclosureError(
        'Can not find available enclosure for animal ' +
          animal.id +
          ' in zoo ' +
          this.location,
      );
    }
    throw new TypeError('Can not find enclosure for animal ' + animal.id);
  }

  getAllAnimals() {
    let animalsList = [];
    for (let i = 0; i < this.enclosures.length; i++) {
      const enclosure = this.enclosures[i];
      for (let j = 0; j < enclosure.animals.length; j++) {
        animalsList.push(enclosure.animals[j]);
      }
    }
    return animalsList;
  }

  feedAnimals() {
    const animals = this.getAllAnimals();
    const zooKeepers = this.employees.filter((e) => e instanceof ZooKeeper);
    let currentZooKeeper = 0;
    for (let i = 0; i < animals.length; i++) {
      zooKeepers[currentZooKeeper].feedAnimal(animals[i]);
      currentZooKeeper++;

      if (currentZooKeeper >= zooKeepers.length) {
        currentZooKeeper = 0;
      }
    }
  }

  healAnimals() {
    const animals = this.getAllAnimals();
    const vets = this.employees.filter((e) => e instanceof Veterinarian);

    let currentVet = 0;
    for (let i = 0; i < animals.length; i++) {
      if (animals[i].isSick) {
        vets[currentVet].healAnimal(animals[i]);
        currentVet++;

        if (currentVet >= vets.length) {
          currentVet = 0;
        }
      }
    }
  }
}

export default Zoo;
