import { LogLevel } from "./LogLevel";

export interface ILoggerSettings
{
	prefix : string;
	separator : string;
	isIconsEnabled : boolean;
	level : LogLevel
}
