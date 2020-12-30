const { performLog } = require('./util.js');

/**
 * @description
 * Creates an instance of Logger with given namespace.
 *
 * @param {string} prefix Defines the namespace of the logger
 */
const getPrefixedLogger = (prefix) => new Logger({ prefix: prefix || '' });

/**
 * @description
 * Creates an instance of Logger with options.
 *
 * @param {Object} options
 * @param {boolean} options.icons If set to true, icons will be added in front of log messages
 * @param {string} options.level Can be all/none/warn/info according to what log messages should be output
 * @param {string} options.prefix Defines the namespace of the logger
 * @param {string} options.seperator Defines the seperator between the namespace and the log message
 */
const getLogger = (options) => new Logger(options);

class Logger {
  constructor(options) {
    this.options = {
      icons: false,
      level: 'all',
      prefix: '',
      seperator: '-',
      ...options,
    };
  }

  setLogLevel(newLevel) {
    this.options.level = newLevel;
  }

  setIconsEnabled(val) {
    this.options.icons = val;
  }

  log(...params) {
    let logOptions = {
      ...this.options,
      validLevel: ['all', 'info'],
    };
    performLog(logOptions, ...params);
  }

  success(...params) {
    let logOptions = {
      ...this.options,
      validLevel: ['all', 'info'],
      color: 'green',
    };

    performLog(logOptions, ...params);
  }

  info(...params) {
    let logOptions = {
      ...this.options,
      validLevel: ['all', 'info'],
      color: 'blue',
    };
    performLog(logOptions, ...params);
  }

  warn(...params) {
    let logOptions = {
      ...this.options,
      validLevel: ['all', 'warn'],
      color: 'yellow',
    };
    performLog(logOptions, ...params);
  }

  error(...params) {
    let logOptions = {
      ...this.options,
      validLevel: ['all', 'warn'],
      color: 'red',
    };
    performLog(logOptions, ...params);
  }

  muted(...params) {
    let logOptions = {
      ...this.options,
      validLevel: ['all', 'info'],
      color: 'gray',
    };
    performLog(logOptions, ...params);
  }
}

module.exports = getPrefixedLogger;
module.exports.getLogger = getLogger;
