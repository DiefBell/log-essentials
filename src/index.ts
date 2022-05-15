import type { ILoggerSettings } from "./ILoggerSettings";
import { Logger } from "./Logger";

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

/**
 * @description
 * Creates an instance of Logger, with or without namespace and/or options
 * depending on the argument passed
 * 
 * @param options
 * If undefined, will return a basic logger.
 * If a string, will return a namespaced logger.
 * If options, will return a logger with options.
 */
export default (options ?: string | ILoggerSettings) => 
{
	if(options === undefined) return getLogger({});
	if(typeof options === "string") return getPrefixedLogger(options);
	return getLogger(options);
};
