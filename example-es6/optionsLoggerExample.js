import { getLogger } from "../lib/index.js";

export default () =>
{
	const otherNamespacedLogger = getLogger({
		prefix: "my-other-namespace",
		isIconsEnabled: true,
		separator: ":",
	});
	otherNamespacedLogger.success("Hello, world!\n");
}