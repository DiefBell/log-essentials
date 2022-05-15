import { LogLevel } from "./LogLevel";

export interface ILoggerSettings
{
	prefix : string;
	separator : string;
	icons : boolean;
	level : LogLevel
}
