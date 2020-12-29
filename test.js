const logger = require('./index.js');

logger.setLogLevel('info');
logger.setLogLevel('warn');
logger.setLogLevel('none');
logger.setLogLevel('all');

logger.setIconsEnabled(true);

logger.success('Hello, world!\n');
logger.warn('Hello, world!\n');
logger.info('Hello, world!\n');
logger.error('Hello, world!\n');
logger.muted('Hello, world!\n');
logger.log('Hello, world!\n');

// ...or alternatively
const { Logger } = require('./index.js');
const namespacedLogger = new Logger({
  prefix: 'my-logger',
  icons: true,
  seperator: ':',
});
namespacedLogger.success('Hello, world!\n');

// ...or alternatively
const { getLogger } = require('./index.js');
const otherNamespacedLogger = getLogger({ prefix: 'my-other-logger' });
otherNamespacedLogger.info('Hello, world!\n');
