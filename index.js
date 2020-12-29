const log = require('fancy-log');
const logSymbols = require('log-symbols');
const colors = require('colors/safe');

const colorize = (color, ...params) => {
  if (!colors[color]) return params;
  return params.map((param) =>
    typeof param === 'string' ? colors[color](param) : param
  );
};

const performLog = (options, ...params) => {
  if (options.validLvl.includes(options.level)) {
    if (options.prefix.length) {
      if (options.seperator.length) {
        params.unshift(options.seperator);
      }
      params.unshift(`[${options.prefix}]`);
    }

    if (options.icons) {
      switch (options.color) {
        case 'blue':
          params.unshift(logSymbols.info);
          break;
        case 'red':
          params.unshift(logSymbols.error);
          break;
        case 'yellow':
          params.unshift(logSymbols.warning);
          break;
        case 'green':
          params.unshift(logSymbols.success);
          break;
      }
    }

    log(...colorize(options.color, ...params));
  }
};

const getLogger = (prefix) => new Logger(prefix);

class Logger {
  /**
   * Creates an instance of Logger.
   * @param {string} [prefix=''] A prefix that's added to all log messages
   * @memberof Logger
   */
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
      validLvl: ['all', 'info'],
    };
    performLog(logOptions, ...params);
  }

  success(...params) {
    let logOptions = {
      ...this.options,
      validLvl: ['all', 'info'],
      color: 'green',
    };

    performLog(logOptions, ...params);
  }

  info(...params) {
    let logOptions = {
      ...this.options,
      validLvl: ['all', 'info'],
      color: 'blue',
    };
    performLog(logOptions, ...params);
  }

  warn(...params) {
    let logOptions = {
      ...this.options,
      validLvl: ['all', 'warn'],
      color: 'yellow',
    };
    performLog(logOptions, ...params);
  }

  error(...params) {
    let logOptions = {
      ...this.options,
      validLvl: ['all', 'warn'],
      color: 'red',
    };
    performLog(logOptions, ...params);
  }

  muted(...params) {
    let logOptions = {
      ...this.options,
      validLvl: ['all', 'info'],
      color: 'gray',
    };
    performLog(logOptions, ...params);
  }
}

module.exports = new Logger();
module.exports.Logger = Logger;
module.exports.getLogger = getLogger;
