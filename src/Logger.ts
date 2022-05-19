import { ILogOptions } from "./ILogOptions";
import { ILoggerSettings } from "./ILoggerSettings";
import { LogLevel } from "./LogLevel";
import { LogParams } from "./LogParams";
import { performLog } from "./util/index";

export class Logger 
{
	private _settings : ILoggerSettings;
	public get settings() 
	{
		return this._settings; 
	}

	constructor({
		icons: icons = false, level = "all", prefix = "", separator = "-"
	} : Partial<ILoggerSettings>) 
	{
		this._settings = {
			icons: icons,
			level,
			prefix,
			separator
		};
	}

	setLogLevel(newLevel : LogLevel) 
	{
		this._settings.level = newLevel;
	}

	setIconsEnabled(icons : boolean) 
	{
		this._settings.icons = icons;
	}

	setSeparator(separator : string) 
	{
		this._settings.separator = separator;
	}

	log(...params : LogParams) 
	{
		const logOptions : ILogOptions = {
			...this._settings,
			validLevel: ["all", "info"],
		};
		performLog(logOptions, ...params);
	}

	success(...params : LogParams) 
	{
		const logOptions : ILogOptions = {
			...this._settings,
			validLevel: ["all", "info"],
			color: "green",
		};

		performLog(logOptions, ...params);
	}

	info(...params : LogParams) 
	{
		const logOptions : ILogOptions = {
			...this._settings,
			validLevel: ["all", "info"],
			color: "blue",
		};
		performLog(logOptions, ...params);
	}

	warn(...params : LogParams) 
	{
		const logOptions : ILogOptions = {
			...this._settings,
			validLevel: ["all", "warn"],
			color: "yellow",
		};
		performLog(logOptions, ...params);
	}

	error(...params : LogParams) 
	{
		const logOptions : ILogOptions = {
			...this._settings,
			validLevel: ["all", "warn"],
			color: "red",
		};
		performLog(logOptions, ...params);
	}

	muted(...params : LogParams) 
	{
		const logOptions : ILogOptions = {
			...this._settings,
			validLevel: ["all", "info"],
			color: "gray",
		};
		performLog(logOptions, ...params);
	}
}
