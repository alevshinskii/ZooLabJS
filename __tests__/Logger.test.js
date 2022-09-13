import Logger from '../src/Logger';
import { expect, test } from '@jest/globals';

test('Should be able to use Logger', () => {
  Logger.write('new log');
  expect(Logger.logs).toContain('new log');
});
