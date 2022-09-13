import { expect, test } from '@jest/globals';
import HireValidator from '../../src/Validators/HireValidator.js';
import ZooKeeper from '../../src/Employees/ZooKeeper.js';
import HireValidatorProvider from '../../src/Validators/HireValidatorProvider';
import Zoo from '../../src/Zoo';
import ZooKeeperHireValidator from '../../src/Validators/ZooKeeperHireValidator';
import Veterinarian from '../../src/Employees/Veterinarian';
import VeterinarianHireValidator from '../../src/Validators/VeterinarianHireValidator';
import Employee from '../../src/Employees/Employee';

test('Should not be able to validate employee using abstract HireValidator', () => {
  const validator = new HireValidator();
  const employee = new ZooKeeper('firstName', 'lastName');
  expect(() => validator.validateEmployee(employee)).toThrowError(Error);
});

// HireValidatorProvider

test('Should be able to create HireValidatorProvider', () => {
  const zoo = new Zoo('Zoo');
  const provider = new HireValidatorProvider(zoo);
  expect(provider).toBeDefined();
});

test('Should not be able to create HireValidatorProvider without zoo', () => {
  expect(() => new HireValidatorProvider()).toThrowError(TypeError);
});

test('Should be able to get ZooKeeperHireValidator', () => {
  const zoo = new Zoo('Zoo');
  const provider = new HireValidatorProvider(zoo);
  const validator = provider.getValidator(
    new ZooKeeper('firstName', 'lastName'),
  );
  expect(validator).toBeInstanceOf(ZooKeeperHireValidator);
});

test('Should be able to get VeterinarianHireValidator', () => {
  const zoo = new Zoo('Zoo');
  const provider = new HireValidatorProvider(zoo);
  const validator = provider.getValidator(
    new Veterinarian('firstName', 'lastName'),
  );
  expect(validator).toBeInstanceOf(VeterinarianHireValidator);
});

test('Should be able to get VeterinarianHireValidator', () => {
  const zoo = new Zoo('Zoo');
  const provider = new HireValidatorProvider(zoo);
  expect(() =>
    provider.getValidator(new Employee('firstName', 'lastName')),
  ).toThrowError(TypeError);
});
