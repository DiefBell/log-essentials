import { Color } from "./Color";
import { ILoggerSettings } from "./ILoggerSettings";
import { LogLevel } from "./LogLevel";

export interface ILogOptions extends ILoggerSettings
{
	validLevel : LogLevel[];
	color ?: Color;
}