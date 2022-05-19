import getDefaultLogger, { getLogger, getPrefixedLogger } from ".";

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

		it("should construct a logger with default settings if none are supplied", () => 
		{
			getLogger();

			expect(Logger).toBeCalledWith({});
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

		it("should return the Logger instance", () => 
		{
			const prefix = "xyz";
			const logger = getPrefixedLogger(prefix);
	
			expect(logger).toBeInstanceOf(Logger);
		});
	});

	describe("default export", () => 
	{
		it("should construct an empty logger if no settings are supplied", () =>
		{
			getDefaultLogger();

			expect(Logger).toBeCalledWith({});
		});

		it("should construct a namespaced logger if a string is passed in", () => 
		{
			const prefix = "my-namespace";
			getDefaultLogger(prefix);

			expect(Logger).toBeCalledWith({ prefix });
		});

		it("should construct a logger with options if options are passed in", () =>
		{
			const settings : ILoggerSettings = {
				prefix: "abc",
				level: "warn",
				separator: "<->",
				icons: true
			};
			getDefaultLogger(settings);

			expect(Logger).toBeCalledWith(settings);
		});
	});
});