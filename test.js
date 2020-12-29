const logger = require('./index.js');

logger.setLogLevel('info');
logger.setLogLevel('warn');
logger.setLogLevel('none');
logger.setLogLevel('all');

logger.setIconsEnabled(true);

logger.success('Hello, world!');
logger.warn('Hello, world!');
logger.info('Hello, world!');
logger.error('Hello, world!');
logger.muted('Hello, world!');
logger.log('Hello, world!');

// ...or alternatively
const { Logger } = require('./index.js');
const namespacedLogger = new Logger('my-logger');
namespacedLogger.success('Hello, world!');

// ...or alternatively
const { getLogger } = require('./index.js');
const otherNamespacedLogger = getLogger('my-other-logger');
otherNamespacedLogger.info('Hello, world!');
