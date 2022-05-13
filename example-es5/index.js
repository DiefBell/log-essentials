const { getLogger } = require("../lib/index.js");

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
require("./namespacedLoggerExample")()

// ...or alternatively (with options)
require("./optionsLoggerExample")();
