import * as utils from "./util";

import { Color, ColorName } from "../Color";

import { LogParams } from "../LogParams";
import logSymbols from "log-symbols";

jest.mock("colors/safe", () => ({
	...jest.requireActual<Color>("colors/safe"),
	__esModule: true,
	default: {
		white: (str : string) => `COLORIZED ${str}`
	}
}));

jest.mock("log-symbols", () => ({
	...jest.requireActual<typeof logSymbols>("log-symbols"),
	__esModule: true,
	default: {
		info: "INFO-SYMBOL",
		error: "ERROR-SYMBOL",
		warning: "WARNING-SYMBOL",
		success: "SUCCESS-SYMBOL"
	}
}));

describe("Util functions", () => 
{
	describe("colorizeParams", () =>
	{
		const params : LogParams = [ "these", 4, "are", "params" ];

		it("should return the params unchanged if no color is supplied", () =>
		{
			const colorized = utils.colorizeParams(undefined, ...params);

			expect(colorized).toEqual(params);
		});

		it("should correctly colorize all string parameters", () => 
		{
			const color : ColorName = "white";

			const colorized = utils.colorizeParams(color, ...params);

			expect(colorized).toEqual([
				"COLORIZED these",
				4,
				"COLORIZED are",
				"COLORIZED params"
			]);
		});
	});

	// describe("shouldLog", () =>
	// {

	// });

	// describe("hasPrefix", () =>
	// {

	// });

	// describe("hasSeparator", () =>
	// {

	// });

	// describe("isIconsEnabled", () =>
	// {

	// });

	describe("getIconFromColor", () =>
	{
		it("should return the 'info' symbol if the color is blue", () =>
		{
			const color = utils.getIconFromColor("blue");
			expect(color).toEqual("INFO-SYMBOL");
		});

		it("should return the 'error' symbol if the color is red", () =>
		{
			const color = utils.getIconFromColor("red");
			expect(color).toEqual("ERROR-SYMBOL");
		});

		it("should return the 'warning' symbol if the color is yellow", () =>
		{
			const color = utils.getIconFromColor("yellow");
			expect(color).toEqual("WARNING-SYMBOL");
		});

		it("should return the 'success' symbol if the color is green", () =>
		{
			const color = utils.getIconFromColor("green");
			expect(color).toEqual("SUCCESS-SYMBOL");
		});

		it("should return 'null' for any other color", () =>
		{
			const color = utils.getIconFromColor("cyan");
			expect(color).toBeNull();
		});
	});
});