const { getPrefixedLogger } = require("../lib/index.js");

export default () =>
{
	const namespacedLogger = getPrefixedLogger("my-namespace");

	namespacedLogger.setseparator(":");
	namespacedLogger.warn("Hello, world!\n");
}