import { expect, test } from '@jest/globals';
import ZooKeeper from '../../src/Employees/ZooKeeper.js';
import Zoo from '../../src/Zoo.js';
import Veterinarian from '../../src/Employees/Veterinarian.js';
import Enclosure from '../../src/Enclosures/Enclosure.js';
import Elephant from '../../src/Animals/Mammals/Elephant.js';
import Bison from '../../src/Animals/Mammals/Bison.js';
import VeterinarianHireValidator from '../../src/Validators/VeterinarianHireValidator.js';

test('Should be able to create VeterinarianHireValidator', () => {
  const validator = new VeterinarianHireValidator();
  expect(validator).toBeDefined();
});

test('Should be able to validate Veterinarian', () => {
  const veterinarian = new Veterinarian();
  const zoo = new Zoo('New Zoo');
  const validator = new VeterinarianHireValidator(zoo);

  expect(validator.validateEmployee(veterinarian).length).toBe(0);
});

test('Should not be able to validate Veterinarian if invalid employee type', () => {
  const zooKeeper = new ZooKeeper();
  const zoo = new Zoo('New zoo');
  const validator = new VeterinarianHireValidator(zoo);

  expect(() => validator.validateEmployee(zooKeeper)).toThrowError(TypeError);
});

test('Should not be able to validate Veterinarian if invalid zoo type', () => {
  const veterinarian = new Veterinarian();
  const validator = new VeterinarianHireValidator();

  expect(() => validator.validateEmployee(veterinarian)).toThrowError(
    TypeError,
  );
});

test('Should be able to validate Veterinarian if has experience', () => {
  const veterinarian = new Veterinarian();

  const zoo = new Zoo('New zoo');
  zoo.addEnclosure(new Enclosure('enclosure 1', 2000));

  const elephant = new Elephant();
  const bison = new Bison();
  zoo.findAvailableEnclosure(elephant).addAnimal(elephant);
  zoo.findAvailableEnclosure(bison).addAnimal(bison);

  veterinarian.addAnimalExperience(elephant);
  veterinarian.addAnimalExperience(bison);

  const validator = new VeterinarianHireValidator(zoo);

  expect(validator.validateEmployee(veterinarian).length).toBe(0);
});

test('Should be able to validate Veterinarian if has no needed experience', () => {
  const veterinarian = new Veterinarian();

  const zoo = new Zoo('New zoo');
  zoo.addEnclosure(new Enclosure('enclosure 1', 2000));

  const elephant = new Elephant();
  const bison = new Bison();
  zoo.findAvailableEnclosure(elephant).addAnimal(elephant);
  zoo.findAvailableEnclosure(bison).addAnimal(bison);

  const validator = new VeterinarianHireValidator(zoo);

  expect(validator.validateEmployee(veterinarian).length).toBe(2);
});
