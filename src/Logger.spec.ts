import * as performLog from "./util/index";

import { ColorNames } from "./Color";
import { ILoggerSettings } from "./ILoggerSettings";
import { LogLevel } from "./LogLevel";
import { Logger } from "./Logger";

const performLogSpy = jest.spyOn(performLog, "performLog").mockImplementation(jest.fn());

describe("The Logger Class", () =>
{
	afterEach(() =>
	{
		jest.resetAllMocks();
	});
	afterAll(() => 
	{
		jest.restoreAllMocks();
	});

	const settings : ILoggerSettings = {
		prefix: "abc",
		level: "warn",
		separator: "<->",
		icons: true
	};

	describe("constructor", () => 
	{
		it("should set the Logger's settings to the given values", () =>
		{
			const logger = new Logger(settings);
			expect(logger.settings).toEqual(settings);
		});

		it("should set the Logger's settings to default values if none are provided", () =>
		{
			const logger = new Logger({});
			expect(logger.settings).toEqual({
				icons: false,
				level: "all",
				prefix: "",
				separator: "-"
			});
		});
	});

	describe("settings functions", () => 
	{
		it("should set the Logger's settings to the provided values", () =>
		{
			const logger = new Logger(settings);
			expect(logger.settings).toEqual(settings);

			logger.setLogLevel("all");
			logger.setSeparator(">>>");
			logger.setIconsEnabled(false);

			expect(logger.settings).toEqual({
				prefix: "abc",
				level: "all",
				separator: ">>>",
				icons: false
			});
		});
	});

	describe("log function", () => 
	{
		it("should call the performLog function with the provided parameters", () =>
		{
			const logger = new Logger(settings);
			logger.log("my", "params");

			const lastParams = performLogSpy.mock.lastCall;
			expect(lastParams[1]).toEqual("my");
			expect(lastParams[2]).toEqual("params");
			
		});

		it("should call the performLog function with the Logger's settings", () =>
		{
			const logger = new Logger(settings);
			logger.log();

			const lastSettings = performLogSpy.mock.lastCall[0];
			expect(lastSettings).toEqual(expect.objectContaining(logger.settings));
		});

		it("should call the performLog function with the correct log levels", () =>
		{
			const correctLevels : LogLevel[] = [ "all", "info" ];

			const logger = new Logger(settings);
			logger.log();

			const lastSettings = performLogSpy.mock.lastCall[0];
			expect(lastSettings).toEqual(expect.objectContaining({ validLevel: correctLevels }));
		});
	});

	describe("success function", () => 
	{
		it("should call the performLog function with the provided parameters", () =>
		{
			const logger = new Logger(settings);
			logger.success("my", "params");

			const lastParams = performLogSpy.mock.lastCall;
			expect(lastParams[1]).toEqual("my");
			expect(lastParams[2]).toEqual("params");
			
		});

		it("should call the performLog function with the Logger's settings", () =>
		{
			const logger = new Logger(settings);
			logger.success();

			const lastSettings = performLogSpy.mock.lastCall[0];
			expect(lastSettings).toEqual(expect.objectContaining(logger.settings));
		});

		it("should call the performLog function with the correct log levels", () =>
		{
			const correctLevels : LogLevel[] = [ "all", "info" ];

			const logger = new Logger(settings);
			logger.success();

			const lastSettings = performLogSpy.mock.lastCall[0];
			expect(lastSettings).toEqual(expect.objectContaining({ validLevel: correctLevels }));
		});

		it("should call the performLog function with the correct color", () =>
		{
			const correctColor : ColorNames = "green";

			const logger = new Logger(settings);
			logger.success();

			const lastSettings = performLogSpy.mock.lastCall[0];
			expect(lastSettings).toEqual(expect.objectContaining({ color: correctColor }));
		});
	});

	describe("info function", () => 
	{
		it("should call the performLog function with the provided parameters", () =>
		{
			const logger = new Logger(settings);
			logger.info("my", "params");

			const lastParams = performLogSpy.mock.lastCall;
			expect(lastParams[1]).toEqual("my");
			expect(lastParams[2]).toEqual("params");
			
		});

		it("should call the performLog function with the Logger's settings", () =>
		{
			const logger = new Logger(settings);
			logger.info();

			const lastSettings = performLogSpy.mock.lastCall[0];
			expect(lastSettings).toEqual(expect.objectContaining(logger.settings));
		});

		it("should call the performLog function with the correct log levels", () =>
		{
			const correctLevels : LogLevel[] = [ "all", "info" ];

			const logger = new Logger(settings);
			logger.info();

			const lastSettings = performLogSpy.mock.lastCall[0];
			expect(lastSettings).toEqual(expect.objectContaining({ validLevel: correctLevels }));
		});

		it("should call the performLog function with the correct color", () =>
		{
			const correctColor : ColorNames = "blue";

			const logger = new Logger(settings);
			logger.info();

			const lastSettings = performLogSpy.mock.lastCall[0];
			expect(lastSettings).toEqual(expect.objectContaining({ color: correctColor }));
		});
	});

	describe("warn function", () => 
	{
		it("should call the performLog function with the provided parameters", () =>
		{
			const logger = new Logger(settings);
			logger.warn("my", "params");

			const lastParams = performLogSpy.mock.lastCall;
			expect(lastParams[1]).toEqual("my");
			expect(lastParams[2]).toEqual("params");
			
		});

		it("should call the performLog function with the Logger's settings", () =>
		{
			const logger = new Logger(settings);
			logger.warn();

			const lastSettings = performLogSpy.mock.lastCall[0];
			expect(lastSettings).toEqual(expect.objectContaining(logger.settings));
		});

		it("should call the performLog function with the correct log levels", () =>
		{
			const correctLevels : LogLevel[] = [ "all", "warn" ];

			const logger = new Logger(settings);
			logger.warn();

			const lastSettings = performLogSpy.mock.lastCall[0];
			expect(lastSettings).toEqual(expect.objectContaining({ validLevel: correctLevels }));
		});

		it("should call the performLog function with the correct color", () =>
		{
			const correctColor : ColorNames = "yellow";

			const logger = new Logger(settings);
			logger.warn();

			const lastSettings = performLogSpy.mock.lastCall[0];
			expect(lastSettings).toEqual(expect.objectContaining({ color: correctColor }));
		});
	});

	describe("error function", () => 
	{
		it("should call the performLog function with the provided parameters", () =>
		{
			const logger = new Logger(settings);
			logger.error("my", "params");

			const lastParams = performLogSpy.mock.lastCall;
			expect(lastParams[1]).toEqual("my");
			expect(lastParams[2]).toEqual("params");
			
		});

		it("should call the performLog function with the Logger's settings", () =>
		{
			const logger = new Logger(settings);
			logger.error();

			const lastSettings = performLogSpy.mock.lastCall[0];
			expect(lastSettings).toEqual(expect.objectContaining(logger.settings));
		});

		it("should call the performLog function with the correct log levels", () =>
		{
			const correctLevels : LogLevel[] = [ "all", "warn" ];

			const logger = new Logger(settings);
			logger.error();

			const lastSettings = performLogSpy.mock.lastCall[0];
			expect(lastSettings).toEqual(expect.objectContaining({ validLevel: correctLevels }));
		});

		it("should call the performLog function with the correct color", () =>
		{
			const correctColor : ColorNames = "red";

			const logger = new Logger(settings);
			logger.error();

			const lastSettings = performLogSpy.mock.lastCall[0];
			expect(lastSettings).toEqual(expect.objectContaining({ color: correctColor }));
		});
	});

	describe("muted function", () => 
	{
		it("should call the performLog function with the provided parameters", () =>
		{
			const logger = new Logger(settings);
			logger.muted("my", "params");

			const lastParams = performLogSpy.mock.lastCall;
			expect(lastParams[1]).toEqual("my");
			expect(lastParams[2]).toEqual("params");
			
		});

		it("should call the performLog function with the Logger's settings", () =>
		{
			const logger = new Logger(settings);
			logger.muted();

			const lastSettings = performLogSpy.mock.lastCall[0];
			expect(lastSettings).toEqual(expect.objectContaining(logger.settings));
		});

		it("should call the performLog function with the correct log levels", () =>
		{
			const correctLevels : LogLevel[] = [ "all", "info" ];

			const logger = new Logger(settings);
			logger.muted();

			const lastSettings = performLogSpy.mock.lastCall[0];
			expect(lastSettings).toEqual(expect.objectContaining({ validLevel: correctLevels }));
		});

		it("should call the performLog function with the correct color", () =>
		{
			const correctColor : ColorNames = "gray";

			const logger = new Logger(settings);
			logger.muted();

			const lastSettings = performLogSpy.mock.lastCall[0];
			expect(lastSettings).toEqual(expect.objectContaining({ color: correctColor }));
		});
	});
});