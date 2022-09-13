import ZooKeeperHireValidator from '../../src/Validators/ZooKeeperHireValidator.js';
import { expect, test } from '@jest/globals';
import ZooKeeper from '../../src/Employees/ZooKeeper.js';
import Zoo from '../../src/Zoo.js';
import Veterinarian from '../../src/Employees/Veterinarian.js';
import Enclosure from '../../src/Enclosures/Enclosure.js';
import Elephant from '../../src/Animals/Mammals/Elephant.js';
import Bison from '../../src/Animals/Mammals/Bison.js';

test('Should be able to create ZooKeeperHireValidator', () => {
  const validator = new ZooKeeperHireValidator();
  expect(validator).toBeDefined();
});

test('Should be able to validate ZooKeeper', () => {
  const zooKeeper = new ZooKeeper('firstName', 'lastName');
  const zoo = new Zoo('New Zoo');
  const validator = new ZooKeeperHireValidator(zoo);

  expect(validator.validateEmployee(zooKeeper).length).toBe(0);
});

test('Should not be able to validate ZooKeeper if invalid employee type', () => {
  const veterinarian = new Veterinarian('firstName', 'lastName');
  const zoo = new Zoo('New zoo');
  const validator = new ZooKeeperHireValidator(zoo);

  expect(() => validator.validateEmployee(veterinarian)).toThrowError(
    TypeError,
  );
});

test('Should not be able to validate ZooKeeper if invalid zoo type', () => {
  const zooKeeper = new ZooKeeper('firstName', 'lastName');
  const validator = new ZooKeeperHireValidator();

  expect(() => validator.validateEmployee(zooKeeper)).toThrowError(TypeError);
});

test('Should be able to validate ZooKeeper if has experience', () => {
  const zooKeeper = new ZooKeeper('firstName', 'lastName');

  const zoo = new Zoo('New zoo');
  zoo.addEnclosure(new Enclosure('enclosure 1', 2000));

  const elephant = new Elephant();
  const bison = new Bison();
  zoo.findAvailableEnclosure(elephant).addAnimal(elephant);
  zoo.findAvailableEnclosure(bison).addAnimal(bison);

  zooKeeper.addAnimalExperience(elephant);
  zooKeeper.addAnimalExperience(bison);

  const validator = new ZooKeeperHireValidator(zoo);

  expect(validator.validateEmployee(zooKeeper).length).toBe(0);
});

test('Should be able to validate ZooKeeper if has no needed experience', () => {
  const zooKeeper = new ZooKeeper('firstName', 'lastName');

  const zoo = new Zoo('New zoo');
  zoo.addEnclosure(new Enclosure('enclosure 1', 2000));

  const elephant = new Elephant();
  const bison = new Bison();
  zoo.findAvailableEnclosure(elephant).addAnimal(elephant);
  zoo.findAvailableEnclosure(bison).addAnimal(bison);

  const validator = new ZooKeeperHireValidator(zoo);

  expect(validator.validateEmployee(zooKeeper).length).toBe(2);
});
