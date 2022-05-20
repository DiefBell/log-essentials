export type StyleName = "reset" | "bold" | "dim" | "italic" | "underline" | "inverse" | "hidden" | "strikethrough";
export type ColorName =
	"black"
	| "red"
	| "green"
	| "yellow"
	| "blue"
	| "magenta"
	| "cyan"
	| "white"
	| "gray"
	| "grey"
	| "brightRed"
	| "brightGreen"
	| "brightYellow"
	| "brightBlue"
	| "brightMagenta"
	| "brightCyan"
	| "brightWhite"
	| "bgBlack"
	| "bgRed"
	| "bgRed"
	| "bgGreen"
	| "bgYellow"
	| "bgBlue"
	| "bgMagenta"
	| "bgCyan"
	| "bgWhite"
	| "bgBrightRed"
	| "bgBrightGreen"
	| "bgBrightYellow"
	| "bgBrightBlue"
	| "bgBrightMagenta"
	| "bgBrightCyan"
	| "bgBrightWhite"
	| "blackBG"
	| "redBG"
	| "greenBG"
	| "yellowBG"
	| "blueBG"
	| "magentaBG"
	| "cyanBG"
	| "whiteBG"
	| "rainbow"
	| "zebra"
	| "america"
	| "trap"
	| "random"
	| "zalgo";

export interface Color
{
	// formatter function
	(str : string) : string;
	
	// styles
	reset : Color;
	bold : Color;
	dim : Color;
	italic : Color;
	underline : Color;
	inverse : Color;
	hidden : Color;
	strikethrough : Color;
	
	// colors
	black : Color;
	red : Color;
	green : Color;
	yellow : Color;
	blue : Color;
	magenta : Color;
	cyan : Color;
	white : Color;
	gray : Color;
	grey : Color;
	brightRed : Color;
	brightGreen : Color;
	brightYellow : Color;
	brightBlue : Color;
	brightMagenta : Color;
	brightCyan : Color;
	brightWhite : Color;
	bgBlack : Color;
	bgRed : Color;
	bgRed : Color;
	bgGreen : Color;
	bgYellow : Color;
	bgBlue : Color;
	bgMagenta : Color;
	bgCyan : Color;
	bgWhite : Color;
	bgBrightRed : Color;
	bgBrightGreen : Color;
	bgBrightYellow : Color;
	bgBrightBlue : Color;
	bgBrightMagenta : Color;
	bgBrightCyan : Color;
	bgBrightWhite : Color;
	blackBG : Color;
	redBG : Color;
	greenBG : Color;
	yellowBG : Color;
	blueBG : Color;
	magentaBG : Color;
	cyanBG : Color;
	whiteBG : Color;
	rainbow : Color;
	zebra : Color;
	america : Color;
	trap : Color;
	random : Color;
	zalgo : Color;
}

declare namespace colors
{
	const color : Color;
	export default color;
}