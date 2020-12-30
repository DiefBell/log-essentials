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

const getPrefixedLogger = (prefix) => new Logger({ prefix: prefix || '' });

/**
 * @description
 * Creates an instance of Logger.
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

module.exports = getPrefixedLogger;
module.exports.getLogger = getLogger;
