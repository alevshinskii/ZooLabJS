import { expect, test } from '@jest/globals';
import HireValidator from '../../src/Validators/HireValidator.js';
import ZooKeeper from '../../src/Employees/ZooKeeper.js';

test('Should not be able to validate employee using abstract HireValidator', () => {
  const validator = new HireValidator();
  const employee = new ZooKeeper('firstName', 'lastName');
  expect(() => validator.validateEmployee(employee)).toThrowError(Error);
});
