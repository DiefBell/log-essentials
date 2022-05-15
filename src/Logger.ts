import { ILogOptions } from "./ILogOptions";
import { ILoggerSettings } from "./ILoggerSettings";
import { LogLevel } from "./LogLevel";
import { LogParams } from "./LogParams";
import { performLog } from "./util/index";

export class Logger 
{
	private settings : ILoggerSettings;

	constructor({
		icons: icons = false, level = "all", prefix = "", separator = "-"
	} : Partial<ILoggerSettings>) 
	{
		this.settings = {
			icons: icons,
			level,
			prefix,
			separator
		};
	}

	setLogLevel(newLevel : LogLevel) 
	{
		this.settings.level = newLevel;
	}

	setIconsEnabled(icons : boolean) 
	{
		this.settings.icons = icons;
	}

	setseparator(separator : string) 
	{
		this.settings.separator = separator;
	}

	log(...params : LogParams) 
	{
		const logOptions : ILogOptions = {
			...this.settings,
			validLevel: ["all", "info"],
		};
		performLog(logOptions, ...params);
	}

	success(...params : LogParams) 
	{
		const logOptions : ILogOptions = {
			...this.settings,
			validLevel: ["all", "info"],
			color: "green",
		};

		performLog(logOptions, ...params);
	}

	info(...params : LogParams) 
	{
		const logOptions : ILogOptions = {
			...this.settings,
			validLevel: ["all", "info"],
			color: "blue",
		};
		performLog(logOptions, ...params);
	}

	warn(...params : LogParams) 
	{
		const logOptions : ILogOptions = {
			...this.settings,
			validLevel: ["all", "warn"],
			color: "yellow",
		};
		performLog(logOptions, ...params);
	}

	error(...params : LogParams) 
	{
		const logOptions : ILogOptions = {
			...this.settings,
			validLevel: ["all", "warn"],
			color: "red",
		};
		performLog(logOptions, ...params);
	}

	muted(...params : LogParams) 
	{
		const logOptions : ILogOptions = {
			...this.settings,
			validLevel: ["all", "info"],
			color: "gray",
		};
		performLog(logOptions, ...params);
	}
}
