import Enclosure from '../../src/Enclosures/Enclosure';
import { expect, test } from '@jest/globals';
import Zoo from '../../src/Zoo';
import Lion from '../../src/Animals/Mammals/Lion';

const enclosure = new Enclosure('Enclosure #1', 1000);
test('Should be able to create enclosure', () => {
  expect(enclosure).toBeDefined();
});

test('Should enclosure have square feet', () => {
  expect(enclosure.squareFeet).toBe(1000);
});

test('Should enclosure have parent zoo', () => {
  const zoo = new Zoo('Zoo #1');
  zoo.addEnclosure(enclosure);
  expect(enclosure.parentZoo).toBeInstanceOf(Zoo);
});

test('Should be able to add animal to enclosure', () => {
  const lion = new Lion();
  enclosure.addAnimal(lion);
  expect(enclosure.animals).toContain(lion);
});
