import * as utils from "./util";

import { ILogOptions } from "../ILogOptions";
import fancyLog from "fancy-log";
import { performLog } from ".";

jest.mock("fancy-log", () => ({
	...jest.requireActual<typeof fancyLog>("fancy-log"),
	__esModule: true,
	default: jest.fn()
}));

describe("The performLog function", () =>
{
	afterEach(() => 
	{
		jest.resetAllMocks();
	});

	afterAll(() => 
	{
		jest.restoreAllMocks();
	});

	const logOptions : ILogOptions = {
		level: "info",
		validLevel: [ "all", "info" ],
		prefix: "",
		separator: "",
		icons: false
	};

	it("should return without logging if the log level is invalid", () => 
	{
		performLog({ ...logOptions, level: "warn" }, "hello world");

		expect(fancyLog as unknown as jest.Mock).not.toBeCalled();
	});

	it("should log with the given namespace", () => 
	{
		const prefix = "my-namespace";
		performLog({ ...logOptions, prefix }, "hello world");

		expect((fancyLog as unknown as jest.Mock).mock.lastCall).toEqual(
			expect.arrayContaining([ `[${prefix}]` ])
		);
	});

	it("should use the given separator if namespaces are enabled", () => 
	{
		const prefix = "my-namespace";
		const separator = ">>>";

		performLog({ ...logOptions, prefix, separator }, "hello world");

		expect((fancyLog as unknown as jest.Mock).mock.lastCall).toEqual(
			expect.arrayContaining([ separator ])
		);
	});

	it("should display the correct symbol if icons are enabled", () => 
	{
		const iconName = "my-icon";
		jest.spyOn(utils, "getIconFromColor").mockReturnValueOnce(iconName);

		performLog({ ...logOptions, icons: true }, "hello world");

		expect((fancyLog as unknown as jest.Mock).mock.lastCall).toEqual(
			expect.arrayContaining([ iconName ])
		);
	});
});