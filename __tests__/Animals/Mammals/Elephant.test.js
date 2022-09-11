import { expect, test } from '@jest/globals';
import Elephant from '../../../src/Animals/Mammals/Elephant';

test('Should be able to create Elephant', () => {
  const elephant = new Elephant();
  expect(elephant).toBeDefined();
});

const elephant = new Elephant();

test('Should be able to get type', () => {
  expect(elephant.getType()).toBe('Elephant');
});

test('Should Elephant be friend with other animals', () => {
  expect(elephant.friends).toContain('Bison');
  expect(elephant.friends).toContain('Parrot');
  expect(elephant.friends).toContain('Turtle');
});

test('Should lion have required square feet', () => {
  expect(elephant.requiredSpaceSqFt).toBe(1000);
});

test('Should Lions be friendly with each other', () => {
  expect(elephant.isFriendlyWithAnimal(elephant)).toBe(true);
});
