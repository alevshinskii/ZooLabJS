import { expect, test } from '@jest/globals';
import Food from '../../src/Food/Food';

test('Should be able to get food name', () => {
  expect(new Food().toString()).toBe('Food');
});
