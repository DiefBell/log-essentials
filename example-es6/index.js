import { getLogger } from "../lib/index.js";
import namespacedLoggerExample from "./namespacedLoggerExample.js";
import optionsLoggerExample from "./optionsLoggerExample.js";

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

// ...or alternatively (with namespace)
namespacedLoggerExample();

// ...or alternatively (with options)
optionsLoggerExample();
