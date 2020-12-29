const { getLogger } = require('./index.js');
const logger = getLogger({ prefix: 'test-logger' });

logger.setLvl(0);

logger.success('Hello, world!');
logger.warn('Hello, world!');
logger.info('Hello, world!');
logger.error('Hello, world!');
logger.muted('Hello, world!');
logger.log('Hello, world!');
