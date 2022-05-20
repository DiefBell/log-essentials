import type { ColorName } from "../Color";
import type { ILogOptions } from "../ILogOptions";
import type { LogLevel } from "../LogLevel";
import type { LogParams } from "../LogParams";
import colors from "colors/safe";
import logSymbols from "log-symbols";

export const colorizeParams = (color ?: ColorName, ...params : LogParams) => 
{
	if (!color || !colors[color]) return params;

	return params.map((param) =>
		typeof param === "string" ? colors[color](param) : param
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

export const hasSeparator = (options : ILogOptions) => 
{
	return options.separator.length;
};

export const isIconsEnabled = (options : ILogOptions) => 
{
	return options.icons;
};

export const getIconFromColor = (color ?: ColorName) => 
{
	switch (color) 
	{
		case "blue":
			return logSymbols.info;
		case "red":
			return logSymbols.error;
		case "yellow":
			return logSymbols.warning;
		case "green":
			return logSymbols.success;
		default:
			return null;
	}
};
