import type { ILoggerSettings } from "./ILoggerSettings";
import { Logger } from "./Logger";

/**
 * @description
 * Creates an instance of Logger with given namespace.
 *
 * @param prefix Defines the namespace of the logger
 */
export const getPrefixedLogger = (prefix : string) => new Logger({ prefix });

/**
 * @description
 * Creates an instance of Logger with settings.
 *
 * @param settings.icons If set to true, icons will be added in front of log messages
 * @param settings.level Can be all/none/warn/info according to what log messages should be output
 * @param settings.prefix Defines the namespace of the logger
 * @param settings.separator Defines the separator between the namespace and the log message
 */
export const getLogger = (settings : Partial<ILoggerSettings> = {}) => new Logger(settings);

/**
 * @description
 * Creates an instance of Logger, with or without namespace and/or settings
 * depending on the argument passed
 * 
 * @param settings
 * If undefined, will return a basic logger.
 * If a string, will return a namespaced logger.
 * If settings, will return a logger with settings.
 */
export default (settings ?: string | ILoggerSettings) => 
{
	if(settings === undefined) return getLogger({});
	if(typeof settings === "string") return getPrefixedLogger(settings);
	return getLogger(settings);
};
