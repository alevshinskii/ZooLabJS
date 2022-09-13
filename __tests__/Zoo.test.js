import Zoo from '../src/Zoo';
import { expect, test } from '@jest/globals';
import Enclosure from '../src/Enclosures/Enclosure';
import ZooKeeper from '../src/Employees/ZooKeeper';
import Lion from '../src/Animals/Mammals/Lion';
import Elephant from '../src/Animals/Mammals/Elephant';
import NoAvailableEnclosureError from '../src/Errors/NoAvailableEnclosureError';
import NoNeededExperienceError from '../src/Errors/NoNeededExperienceError';
import Bison from '../src/Animals/Mammals/Bison';
import Veterinarian from '../src/Employees/Veterinarian';

test('Should be able to create Zoo', () => {
  const zoo = new Zoo('Zoo');
  expect(zoo).toBeDefined();
});

test('Should be able to add enclosure', () => {
  const zoo = new Zoo('Zoo');
  const enclosure = new Enclosure('Enclosure #1', 1000);
  zoo.addEnclosure(enclosure);

  expect(zoo.enclosures).toContain(enclosure);
});

test('Should be able to hire employee', () => {
  const zoo = new Zoo('Zoo');
  const employee = new ZooKeeper();
  zoo.hireEmployee(employee);
  expect(zoo.employees).toContain(employee);
});

test('Should be able to find enclosure for animal', () => {
  const zoo = new Zoo('Zoo');
  const enclosure = new Enclosure('Enclosure #1', 1000);
  zoo.addEnclosure(enclosure);

  const lion = new Lion();

  const foundedEnclosure = zoo.findAvailableEnclosure(lion);
  expect(foundedEnclosure).not.toBeNull();
  foundedEnclosure.addAnimal(lion);
});

test('Should not be able to find enclosure for not friendly animals', () => {
  const zoo = new Zoo('Zoo');
  const enclosure = new Enclosure('Enclosure', 2000);
  zoo.addEnclosure(enclosure);
  const elephant = new Elephant();

  const foundedEnclosureForElephant = zoo.findAvailableEnclosure(elephant);
  expect(foundedEnclosureForElephant).toBeDefined();
  foundedEnclosureForElephant.addAnimal(elephant);

  const lion = new Lion();
  expect(() => zoo.findAvailableEnclosure(lion)).toThrowError(
    NoAvailableEnclosureError,
  );
});

test('Should throw error if no available space for animals in enclosure', () => {
  const zoo = new Zoo('Zoo');
  const enclosure = new Enclosure('Enclosure', 1000);
  zoo.addEnclosure(enclosure);
  const elephant = new Elephant();

  const foundedEnclosureForElephant = zoo.findAvailableEnclosure(elephant);
  expect(foundedEnclosureForElephant).toBeDefined();
  foundedEnclosureForElephant.addAnimal(elephant);

  const elephant2 = new Elephant();

  expect(() => zoo.findAvailableEnclosure(elephant2)).toThrowError(
    NoAvailableEnclosureError,
  );
});

test('Should throw error if trying to hire employee without experience', () => {
  const zoo = new Zoo('Zoo');
  const enclosure = new Enclosure('Enclosure', 1000);
  zoo.addEnclosure(enclosure);

  const elephant = new Elephant();
  zoo.findAvailableEnclosure(elephant).addAnimal(elephant);

  const zooKeeper = new ZooKeeper('firstName', 'lastName');
  expect(() => zoo.hireEmployee(zooKeeper)).toThrowError(
    NoNeededExperienceError,
  );
});

test('Should throw error if trying to find enclosure for animal with invalid type', () => {
  const zoo = new Zoo('Zoo');
  const enclosure = new Enclosure('Enclosure', 1000);
  zoo.addEnclosure(enclosure);

  expect(() =>
    zoo.findAvailableEnclosure(new ZooKeeper('firstName', 'lastName')),
  ).toThrowError(TypeError);
});

test('Should be able to feed all animals', () => {
  const zoo = new Zoo('Zoo');
  const enclosure = new Enclosure('Enclosure', 9000);
  zoo.addEnclosure(enclosure);

  const bison = new Bison();
  const elephant = new Elephant();

  zoo.findAvailableEnclosure(bison).addAnimal(bison);
  zoo.findAvailableEnclosure(elephant).addAnimal(elephant);

  const zooKeeper = new ZooKeeper('New', 'ZooKeeper');
  zooKeeper.addAnimalExperience(bison);
  zooKeeper.addAnimalExperience(elephant);

  zoo.hireEmployee(zooKeeper);

  zoo.feedAnimals();

  expect(zoo.getAllAnimals().filter((a) => a.feedTimes.length > 0).length).toBe(
    2,
  );
});

test('Should be able to heal all animals', () => {
  const zoo = new Zoo('Zoo');
  const enclosure = new Enclosure('Enclosure', 9000);
  zoo.addEnclosure(enclosure);

  const bison = new Bison(true);
  const elephant = new Elephant(true);

  zoo.findAvailableEnclosure(bison).addAnimal(bison);
  zoo.findAvailableEnclosure(elephant).addAnimal(elephant);

  const vet = new Veterinarian('New', 'ZooKeeper');
  vet.addAnimalExperience(bison);
  vet.addAnimalExperience(elephant);

  zoo.hireEmployee(vet);

  zoo.healAnimals();

  expect(zoo.getAllAnimals().filter((a) => !a.isSick).length).toBe(2);
});
