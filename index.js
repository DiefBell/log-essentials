const log = require('fancy-log');
const colors = require('colors/safe');

const getLogger = ({ prefix = '', separator = '-' } = {}) => {
  let isEnabled = true;
  let logLvl = 0;

  const decorate = (logFn, { color = '', enabledLvl = [] } = {}) => (
    ...params
  ) => {
    if (isEnabled && enabledLvl.includes(logLvl)) {
      let logParams = [];

      if (prefix.length && separator.length) {
        logParams.push(`[${prefix}]`, separator);
      }

      logParams.push(...params);

      if (colors[color]) {
        logParams = logParams.map((param) =>
          typeof param === 'string' ? colors[color](param) : param
        );
      }

      return logFn(...logParams);
    }

    return null;
  };

  /**
   * Logging levels:
   * -1: no logging
   *  0: all loggs
   *  1: only warnings
   *  2: only info
   */
  return {
    log: decorate(log, { enabledLvl: [0, 2] }),
    muted: decorate(log, { color: 'grey', enabledLvl: [0, 2] }),
    success: decorate(log, { color: 'green', enabledLvl: [0, 2] }),
    info: decorate(log, { color: 'blue', enabledLvl: [0, 2] }),
    warn: decorate(log, { color: 'yellow', enabledLvl: [0, 1] }),
    error: decorate(log, { color: 'red', enabledLvl: [0, 1] }),
    dir: decorate(log, { color: 'yellow', enabledLvl: [0, 2] }),

    enable: () => (enabled = true),
    disable: () => (enabled = false),
    toggleEnabled: () => (enabled = !enabled),
    setEnabled: (e) => (enabled = e),

    setLvl: (lvl) => (logLvl = lvl),
  };
};

module.exports = getLogger();
module.exports.getLogger = getLogger;
