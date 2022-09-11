import { expect, test } from '@jest/globals';
import Animal from '../../src/Animals/Animal';
import Food from '../../src/Food/Food';
import ZooKeeper from '../../src/Employees/ZooKeeper';
import Antibiotics from '../../src/Medicine/Antibiotics';

const animal = new Animal();

test('Should be able to add feed schedule', () => {
  const newSchedule = [1, 2, 3];
  animal.addFeedSchedule(newSchedule);
  expect(animal.feedSchedule).toContain(1);
  expect(animal.feedSchedule).toContain(2);
  expect(animal.feedSchedule).toContain(3);
  expect(animal.feedSchedule.length).toBe(3);
});

test('should be able to feed animal', () => {
  expect(animal.feed(new Food(), new ZooKeeper())).toBeTruthy();
});

test('should be able to feed animal', () => {
  expect(animal.heal(new Antibiotics())).toBeTruthy();
});
