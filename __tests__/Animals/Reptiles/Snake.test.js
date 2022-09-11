import { expect, test } from '@jest/globals';
import Lion from '../../../src/Animals/Mammals/Lion';
import Snake from '../../../src/Animals/Reptiles/Snake';

test('Should be able to create Snake', () => {
  const snake = new Snake();
  expect(snake).toBeDefined();
});

const snake = new Snake();

test('Should be able to get type', () => {
  expect(snake.getType()).toBe('Snake');
});

test('Should Snake be friend with Snakes', () => {
  expect(snake.friends).toContain('Snake');
});

test('Should Snake have required square feet', () => {
  expect(snake.requiredSpaceSqFt).toBe(2);
});

test('Should Snakes be friendly with each other', () => {
  expect(snake.isFriendlyWithAnimal(snake)).toBe(true);
});

test('Should Snakes not be friendly with Lions', () => {
  expect(snake.isFriendlyWithAnimal(new Lion())).toBe(false);
});
