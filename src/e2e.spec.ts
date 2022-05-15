import { getLogger, getPrefixedLogger } from "./index";

import fancyLog from "fancy-log";

jest.mock("fancy-log", () => ({
	...jest.requireActual<typeof fancyLog>("fancy-log"),
	__esModule: true,
	default: jest.fn()
}));

describe("Log Essentials package", () => 
{
	afterEach(() => 
	{
		jest.resetAllMocks();
	});

	afterAll(() => 
	{
		jest.restoreAllMocks();
	});

	describe("when doing standard logging", () => 
	{
		it("should match the snapshot", () => 
		{
			const logger = getLogger();

			logger.setLogLevel("info");
			logger.setLogLevel("warn");
			logger.setLogLevel("none");
			logger.setLogLevel("all");
			
			logger.setIconsEnabled(true);
			
			logger.success("Hello, world!\n");
			logger.warn("Hello, world!\n");
			logger.info("Hello, world!\n");
			
			logger.error("Hello, world!\n");
			logger.muted("Hello, world!\n");
			logger.log("Hello, world!\n");

			expect((fancyLog as unknown as jest.Mock).mock.calls).toMatchSnapshot();
		});
	});

	describe("when using a namespaced logger", () => 
	{
		it("should match the snapshot", () => 
		{
			const namespacedLogger = getPrefixedLogger("my-namespace");
			namespacedLogger.setIconsEnabled(true);

			namespacedLogger.setseparator(":");
			
			namespacedLogger.success("Hello, world!\n");
			namespacedLogger.warn("Hello, world!\n");
			namespacedLogger.info("Hello, world!\n");

			namespacedLogger.setseparator("=>");
			
			namespacedLogger.error("Hello, world!\n");
			namespacedLogger.muted("Hello, world!\n");
			namespacedLogger.log("Hello, world!\n");

			expect((fancyLog as unknown as jest.Mock).mock.calls).toMatchSnapshot();
		});
	});

	describe("when using a logger with options", () => 
	{
		it("should match the snapshot", () => 
		{
			const optionsLogger = getLogger({
				prefix: "my-other-namespace",
				icons: true,
				separator: ":",
			});
			
			optionsLogger.success("Hello, world!\n");
			optionsLogger.warn("Hello, world!\n");
			optionsLogger.info("Hello, world!\n");			
			optionsLogger.error("Hello, world!\n");
			optionsLogger.muted("Hello, world!\n");
			optionsLogger.log("Hello, world!\n");

			expect((fancyLog as unknown as jest.Mock).mock.calls).toMatchSnapshot();
		});
	});
});
