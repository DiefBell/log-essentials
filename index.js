const log = require('fancy-log');
const colors = require('colors/safe');

const colorize = (color, ...params) => {
  if (!colors[color]) return params;
  return params.map((param) =>
    typeof param === 'string' ? colors[color](param) : param
  );
};

const performLog = ({ logger, validLvl, color } = {}, ...params) => {
  if (validLvl.includes(logger.level)) {
    if (logger.prefix.length) {
      params.unshift('-');
      params.unshift(`[${logger.prefix}]`);
    }

    log(...colorize(color, ...params));
  }
};

const getLogger = (prefix) => {
  return new Logger(prefix);
};

class Logger {
  constructor(prefix = '') {
    this.prefix = prefix;
    this.level = 'all';
  }

  setLogLevel(newLevel) {
    this.level = newLevel;
  }

  log(...params) {
    let logOptions = {
      logger: this,
      validLvl: ['all', 'info'],
    };
    performLog(logOptions, ...params);
  }

  success(...params) {
    let logOptions = {
      logger: this,
      validLvl: ['all', 'info'],
      color: 'green',
    };

    performLog(logOptions, ...params);
  }

  info(...params) {
    let logOptions = {
      logger: this,
      validLvl: ['all', 'info'],
      color: 'blue',
    };
    performLog(logOptions, ...params);
  }

  warn(...params) {
    let logOptions = {
      logger: this,
      validLvl: ['all', 'warn'],
      color: 'yellow',
    };
    performLog(logOptions, ...params);
  }

  error(...params) {
    let logOptions = {
      logger: this,
      validLvl: ['all', 'warn'],
      color: 'red',
    };
    performLog(logOptions, ...params);
  }

  muted(...params) {
    let logOptions = {
      logger: this,
      validLvl: ['all', 'info'],
      color: 'gray',
    };
    performLog(logOptions, ...params);
  }
}

module.exports = new Logger();
module.exports.getLogger = getLogger;
