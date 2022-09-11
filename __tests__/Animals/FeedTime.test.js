import FeedTime from '../../src/Animals/FeedTime';
import ZooKeeper from '../../src/Employees/ZooKeeper';
import { expect, test } from '@jest/globals';

test('Should be able to create FeedTime', () => {
  const feedTime = new FeedTime(new Date(), new ZooKeeper());
  expect(feedTime).toBeDefined();
});
