import { expect, test } from '@jest/globals';
import Penguin from '../../../src/Animals/Birds/Penguin';

test('Should be able to create Penguin', () => {
  const penguin = new Penguin();
  expect(penguin).toBeDefined();
});

const penguin = new Penguin();

test('Should be able to get type', () => {
  expect(penguin.getType()).toBe('Penguin');
});

test('Should not Penguin be friend with other animals', () => {
  expect(penguin.friends).not.toContain('Bison');
  expect(penguin.friends).not.toContain('Elephant');
  expect(penguin.friends).not.toContain('Turtle');
});

test('Should Penguin have required square feet', () => {
  expect(penguin.requiredSpaceSqFt).toBe(10);
});

test('Should Penguins be friendly with each other', () => {
  expect(penguin.isFriendlyWithAnimal(penguin)).toBe(true);
});
