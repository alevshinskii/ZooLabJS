class Logger {
  static logs = [];

  static write(message) {
    this.logs.push(message);
  }
}

export default Logger;
