const log = require('fancy-log');
const logSymbols = require('log-symbols');
const colors = require('colors/safe');

const colorizeParams = (color, ...params) => {
  if (!colors[color]) return params;
  return params.map((param) =>
    typeof param === 'string' ? colors[color](param) : param
  );
};

const shouldLog = (currentLevel, validLevels) => {
  return validLevels.includes(currentLevel);
};

const hasPrefix = (options) => {
  return options.prefix.length;
};

const hasSeperator = (options) => {
  return options.seperator.length;
};

const shouldDisplayIcons = (options) => {
  return options.icons;
};

const getIconFromColor = (color) => {
  switch (color) {
    case 'blue':
      return logSymbols.info;
      break;
    case 'red':
      return logSymbols.error;
      break;
    case 'yellow':
      return logSymbols.warning;
      break;
    case 'green':
      return logSymbols.success;
      break;
    default:
      return null;
  }
};

module.exports.performLog = (options, ...params) => {
  if (!shouldLog(options.level, options.validLevel)) return;

  if (hasPrefix(options)) {
    if (hasSeperator(options)) {
      params.unshift(options.seperator);
    }
    params.unshift(`[${options.prefix}]`);
  }

  if (shouldDisplayIcons(options)) {
    let icon = getIconFromColor(options.color);
    if (icon) {
      params.unshift(icon);
    }
  }

  log(...colorizeParams(options.color, ...params));
};
