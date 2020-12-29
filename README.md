# log-essentials
Log things, prefixed with a timestamp and name. Also uses colors and logging levels!

## Usage
```
const { getLogger } = require('./index.js');
const logger = getLogger({ prefix: 'test-logger' });

logger.setLvl(0);

logger.success('Hello, world!');
logger.warn('Hello, world!');
logger.info('Hello, world!');
logger.error('Hello, world!');
logger.muted('Hello, world!');
logger.log('Hello, world!');
```

## Logging levels
* -1: no logging
*  0: all loggs
*  1: only warnings
*  2: only info
