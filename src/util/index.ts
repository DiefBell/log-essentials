import { colorizeParams, getIconFromColor, hasPrefix, hasSeparator, isIconsEnabled, shouldLog } from "./util";

import { ILogOptions } from "../ILogOptions";
import { LogParams } from "../LogParams";
import log from "fancy-log";

export const performLog = (options : ILogOptions, ...params : LogParams) => 
{
	if (!shouldLog(options.level, options.validLevel))
		return;

	const logOutput = [];

	if (hasPrefix(options)) 
	{
		logOutput.push(`[${options.prefix}]`);

		if (hasSeparator(options)) 
		{
			logOutput.push(options.separator);
		}
	}

	if (isIconsEnabled(options)) 
	{
		const icon = getIconFromColor(options.color);
		if (icon) 
		{
			logOutput.push(icon);
			icon;
		}
	}

	logOutput.push(...params);

	log(...colorizeParams(options.color, ...logOutput));
};
