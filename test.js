const Logger = require('./index.js');
const logger = new Logger('my-logger');

logger.setLogLevel('all');

logger.success('Hello, world!');
logger.warn('Hello, world!');
logger.info('Hello, world!');
logger.error('Hello, world!');
logger.muted('Hello, world!');
logger.log('Hello, world!');
