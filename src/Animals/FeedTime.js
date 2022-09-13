import ZooKeeper from '../Employees/ZooKeeper.js';

class FeedTime {
  time;
  by;

  constructor(time, byZooKeeper) {
    if (time instanceof Date && byZooKeeper instanceof ZooKeeper) {
      this.time = time;
      this.by = byZooKeeper;
    }
  }
}

export default FeedTime;
