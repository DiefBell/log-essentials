import { ILogOptions } from "./ILogOptions";
import { ILoggerSettings } from "./ILoggerSettings";
import { LogLevel } from "./LogLevel";
import { LogParams } from "./LogParams";
import { performLog } from "./util/index";

export class Logger 
{
	private options : ILoggerSettings;

	constructor({
		isIconsEnabled = false, level = "all", prefix = "", separator = "-"
	} : Partial<ILoggerSettings>) 
	{
		this.options = {
			isIconsEnabled,
			level,
			prefix,
			separator
		};
	}

	setLogLevel(newLevel : LogLevel) 
	{
		this.options.level = newLevel;
	}

	setIconsEnabled(isIconsEnabled : boolean) 
	{
		this.options.isIconsEnabled = isIconsEnabled;
	}

	setseparator(separator : string) 
	{
		this.options.separator = separator;
	}

	log(...params : LogParams) 
	{
		const logOptions : ILogOptions = {
			...this.options,
			validLevel: ["all", "info"],
		};
		performLog(logOptions, ...params);
	}

	success(...params : LogParams) 
	{
		const logOptions : ILogOptions = {
			...this.options,
			validLevel: ["all", "info"],
			color: "green",
		};

		performLog(logOptions, ...params);
	}

	info(...params : LogParams) 
	{
		const logOptions : ILogOptions = {
			...this.options,
			validLevel: ["all", "info"],
			color: "blue",
		};
		performLog(logOptions, ...params);
	}

	warn(...params : LogParams) 
	{
		const logOptions : ILogOptions = {
			...this.options,
			validLevel: ["all", "warn"],
			color: "yellow",
		};
		performLog(logOptions, ...params);
	}

	error(...params : LogParams) 
	{
		const logOptions : ILogOptions = {
			...this.options,
			validLevel: ["all", "warn"],
			color: "red",
		};
		performLog(logOptions, ...params);
	}

	muted(...params : LogParams) 
	{
		const logOptions : ILogOptions = {
			...this.options,
			validLevel: ["all", "info"],
			color: "gray",
		};
		performLog(logOptions, ...params);
	}
}
