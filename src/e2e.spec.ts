import fancyLog from "fancy-log";
import { getLogger } from "./index";

// eslint-disable-next-line
// @ts-ignore
// jest.spyOn(fancyLog, "default").mockImplementation((...args : any[]) => {}); // eslint-disable-line

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

});
