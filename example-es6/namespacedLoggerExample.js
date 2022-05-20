import { getPrefixedLogger } from "../lib/index.js";

export default () =>
{
	const namespacedLogger = getPrefixedLogger("my-namespace");

	namespacedLogger.setSeparator(":");
	namespacedLogger.warn("Hello, world!\n");
}