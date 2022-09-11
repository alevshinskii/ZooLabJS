import { expect, test } from '@jest/globals';
import Bison from '../../../src/Animals/Mammals/Bison';

test('Should be able to create Bison', () => {
  const bison = new Bison();
  expect(bison).toBeDefined();
});

const bison = new Bison();

test('Should be able to get type', () => {
  expect(bison.getType()).toBe('Bison');
});

test('Should Bison be friend with other animals', () => {
  expect(bison.friends).toContain('Elephant');
});

test('Should lion have required square feet', () => {
  expect(bison.requiredSpaceSqFt).toBe(1000);
});

test('Should Lions be friendly with each other', () => {
  expect(bison.isFriendlyWithAnimal(bison)).toBe(true);
});
