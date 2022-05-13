import { getLogger } from "../lib/index.js";

export default () =>
{
	const otherNamespacedLogger = getLogger({
		prefix: "my-other-namespace",
		icons: true,
		separator: ":",
	});
	otherNamespacedLogger.success("Hello, world!\n");
}