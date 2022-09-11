import { expect, test } from '@jest/globals';
import Lion from '../../../src/Animals/Mammals/Lion.js';
import Elephant from '../../../src/Animals/Mammals/Elephant';

test('Should be able to create Lion', () => {
  const lion = new Lion();
  expect(lion).toBeDefined();
});

const lion = new Lion();

test('Should be able to get type', () => {
  expect(lion.getType()).toBe('Lion');
});

test('Should Lion be friend with Lions', () => {
  expect(lion.friends).toContainEqual('Lion');
});

test('Should Lion have required square feet', () => {
  expect(lion.requiredSpaceSqFt).toBe(1000);
});

test('Should Lions be friendly with each other', () => {
  expect(lion.isFriendlyWithAnimal(lion)).toBe(true);
});

test('Should Lions not be friendly with Elephants', () => {
  expect(lion.isFriendlyWithAnimal(new Elephant())).toBe(false);
});
