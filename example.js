const logger = require('./index.js')();

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

// ...or alternatively (with namespace)
const namespacedLogger = require('./index.js')('my-namespace');

namespacedLogger.setseparator(':');
namespacedLogger.warn('Hello, world!\n');

// ...or alternatively (with options)
const { getLogger } = require('./index.js');
const otherNamespacedLogger = getLogger({
  prefix: 'my-other-namespace',
  icons: true,
  separator: ':',
});
otherNamespacedLogger.success('Hello, world!\n');
