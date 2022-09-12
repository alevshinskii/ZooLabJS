import { expect, test } from '@jest/globals';
import Medicine from '../../src/Medicine/Medicine';

test('Should be able to get medicine name', () => {
  expect(new Medicine().toString()).toBe('Medicine');
});
