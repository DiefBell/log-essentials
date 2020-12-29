const logger = require('./index.js');

logger.setLogLevel('info');
logger.setLogLevel('warn');
logger.setLogLevel('none');
logger.setLogLevel('all');

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
