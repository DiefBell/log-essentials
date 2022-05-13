import * as colors from 'colors/safe';

import type { Color } from '../Color';
import type { ILogOptions } from '../ILogOptions';
import type { LogLevel } from '../LogLevel';
import type { LogParams } from '../LogParams';
import logSymbols from 'log-symbols';

export const colorizeParams = (color ?: Color, ...params : LogParams) => 
{
	if (!color || !colors[color]) return params;

	return params.map((param) =>
		typeof param === 'string' ? colors[color](param) : param
	);
};

export const shouldLog = (currentLevel : LogLevel, validLevels : LogLevel[]) => 
{
	return validLevels.includes(currentLevel);
};

export const hasPrefix = (options : ILogOptions) => 
{
	return options.prefix.length;
};

export const hasseparator = (options : ILogOptions) => 
{
	return options.separator.length;
};

export const isIconsEnabled = (options : ILogOptions) => 
{
	return options.isIconsEnabled;
};

export const getIconFromColor = (color ?: Color) => 
{
	switch (color) 
	{
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
