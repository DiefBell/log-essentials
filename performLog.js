const log = require('fancy-log');
const logSymbols = require('log-symbols');
const colors = require('colors/safe');

colorize = (color, ...params) => {
  if (!colors[color]) return params;
  return params.map((param) =>
    typeof param === 'string' ? colors[color](param) : param
  );
};

module.exports = (options, ...params) => {
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
