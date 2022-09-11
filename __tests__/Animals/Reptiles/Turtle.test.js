import { expect, test } from '@jest/globals';
import Turtle from '../../../src/Animals/Reptiles/Turtle';
import Lion from '../../../src/Animals/Mammals/Lion';

test('Should be able to create Turtle', () => {
  const turtle = new Turtle();
  expect(turtle).toBeDefined();
});

const turtle = new Turtle();

test('Should be able to get type', () => {
  expect(turtle.getType()).toBe('Turtle');
});

test('Should Turtle be friend with other animals', () => {
  expect(turtle.friends).toContain('Parrot');
  expect(turtle.friends).toContain('Bison');
  expect(turtle.friends).toContain('Elephant');
});

test('Should Turtle have required square feet', () => {
  expect(turtle.requiredSpaceSqFt).toBe(5);
});

test('Should Turtles be friendly with each other', () => {
  expect(turtle.isFriendlyWithAnimal(turtle)).toBe(true);
});

test('Should Lions not be friendly with Lions', () => {
  expect(turtle.isFriendlyWithAnimal(new Lion())).toBe(false);
});
