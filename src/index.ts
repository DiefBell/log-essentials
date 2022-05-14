import type { ILogOptions } from "./ILogOptions";
import type { ILoggerSettings } from "./ILoggerSettings";
import type { LogLevel } from "./LogLevel";
import type { LogParams } from "./LogParams";
import { performLog }  from "./util/index";

/**
 * @description
 * Creates an instance of Logger with given namespace.
 *
 * @param prefix Defines the namespace of the logger
 */
export const getPrefixedLogger = (prefix  = "") => new Logger({ prefix });

/**
 * @description
 * Creates an instance of Logger with options.
 *
 * @param options.icons If set to true, icons will be added in front of log messages
 * @param options.level Can be all/none/warn/info according to what log messages should be output
 * @param options.prefix Defines the namespace of the logger
 * @param options.separator Defines the separator between the namespace and the log message
 */
export const getLogger = (options : Partial<ILoggerSettings> = {}) => new Logger(options);

export default (options ?: string | ILoggerSettings) => 
{
	if(options === undefined) return getLogger({});
	if(typeof options === "string") return getPrefixedLogger(options);
	return getLogger(options);
};

class Logger 
{
	private options : ILoggerSettings;

	constructor({
		isIconsEnabled = false,
		level = "all",
		prefix = "",
		separator = "-"
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
