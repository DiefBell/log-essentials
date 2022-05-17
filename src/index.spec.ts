import { getLogger, getPrefixedLogger } from ".";

import { ILoggerSettings } from "./ILoggerSettings";
import { Logger } from "./Logger";

jest.mock("./Logger");

describe("The package index", () =>
{
	afterEach(() =>
	{
		jest.resetAllMocks();
	});

	describe("exported getLogger function", () =>
	{
		it("should construct a logger with the supplied settings", () =>
		{
			const settings : ILoggerSettings = {
				prefix: "abc",
				level: "warn",
				separator: "<->",
				icons: true
			};
			getLogger(settings);

			expect(Logger).toBeCalledWith(settings);
		});

		it("should return the Logger instance", () => 
		{
			const settings : ILoggerSettings = {
				prefix: "abc",
				level: "warn",
				separator: "<->",
				icons: true
			};
			const logger = getLogger(settings);

			expect(logger).toBeInstanceOf(Logger);
		});
	});

	describe("exported getPrefixedLogger function", () => 
	{
		it("should construct a logger with the supplied prefix", () => 
		{
			const prefix = "xyz";
			getPrefixedLogger(prefix);

			expect(Logger).toBeCalledWith({ prefix });
		});
	});

	it("should return the Logger instance", () => 
	{
		const prefix = "xyz";
		const logger = getPrefixedLogger(prefix);

		expect(logger).toBeInstanceOf(Logger);
	});
});