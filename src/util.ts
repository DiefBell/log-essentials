import * as colors from 'colors/safe';

import type { Color } from './Color';
import type { ILogOptions } from './ILogOptions';
import type { LogLevel } from './LogLevel';
import type { LogParams } from './LogParams';
import log from 'fancy-log';
import logSymbols from 'log-symbols';

const colorizeParams = (color ?: Color, ...params : LogParams) => {
	if (!color || !colors[color]) return params;

	return params.map((param) =>
		typeof param === 'string' ? colors[color](param) : param
	);
};

const shouldLog = (currentLevel : LogLevel, validLevels : LogLevel[]) => {
	return validLevels.includes(currentLevel);
};

const hasPrefix = (options : ILogOptions) => {
	return options.prefix.length;
};

const hasseparator = (options : ILogOptions) => {
	return options.separator.length;
};

const isIconsEnabled = (options : ILogOptions) => {
	return options.isIconsEnabled;
};

const getIconFromColor = (color ?: Color) => {
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

export const performLog = (options : ILogOptions, ...params : LogParams) => {
	if (!shouldLog(options.level, options.validLevel)) return;

	const logOutput = [];

	if (hasPrefix(options)) {
		logOutput.push(`[${options.prefix}]`);

		if (hasseparator(options)) {
			logOutput.push(options.separator);
		}
	}

	if (isIconsEnabled(options)) {
		let icon = getIconFromColor(options.color);
		if (icon) {
			logOutput.push(icon);
			icon;
		}
	}

	logOutput.push(...params);

	log(...colorizeParams(options.color, ...logOutput));
};
