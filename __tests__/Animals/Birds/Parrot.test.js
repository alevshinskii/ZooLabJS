import { expect, test } from '@jest/globals';
import Parrot from '../../../src/Animals/Birds/Parrot';

test('Should be able to create Parrot', () => {
  const parrot = new Parrot();
  expect(parrot).toBeDefined();
});

const parrot = new Parrot();

test('Should be able to get type', () => {
  expect(parrot.getType()).toBe('Parrot');
});

test('Should Parrot be friend with other animals', () => {
  expect(parrot.friends).toContain('Bison');
  expect(parrot.friends).toContain('Elephant');
  expect(parrot.friends).toContain('Turtle');
});

test('Should Parrot have required square feet', () => {
  expect(parrot.requiredSpaceSqFt).toBe(5);
});

test('Should Parrots be friendly with each other', () => {
  expect(parrot.isFriendlyWithAnimal(parrot)).toBe(true);
});
