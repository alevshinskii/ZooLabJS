import Zoo from '../src/Zoo';
import { expect, test } from '@jest/globals';
import Enclosure from '../src/Enclosures/Enclosure';
import ZooKeeper from '../src/Employees/ZooKeeper';
import Lion from '../src/Animals/Mammals/Lion';
import Elephant from '../src/Animals/Mammals/Elephant';

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
  const foundedEnclosureForLion = zoo.findAvailableEnclosure(lion);
  expect(foundedEnclosureForLion).toBeNull();
});

test('Should return null if no available space for animals in enclosure', () => {
  const zoo = new Zoo('Zoo');
  const enclosure = new Enclosure('Enclosure', 1000);
  zoo.addEnclosure(enclosure);
  const elephant = new Elephant();

  const foundedEnclosureForElephant = zoo.findAvailableEnclosure(elephant);
  expect(foundedEnclosureForElephant).toBeDefined();
  foundedEnclosureForElephant.addAnimal(elephant);

  const elephant2 = new Elephant();
  const foundedEnclosureForOneMoreElephant =
    zoo.findAvailableEnclosure(elephant2);
  expect(foundedEnclosureForOneMoreElephant).toBeNull();
});
