# log-essentials

Log things, prefixed with a timestamp and name. Also uses colors and logging levels!

## Usage

```js

const logger = require('@timstrasser/log-essentials'');

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
const { Logger } = require('@timstrasser/log-essentials'');
const namespacedLogger = new Logger('my-logger');
namespacedLogger.success('Hello, world!');

// ...or alternatively
const { getLogger } = require('@timstrasser/log-essentials'');
const otherNamespacedLogger = getLogger('my-other-logger');
otherNamespacedLogger.info('Hello, world!');
```
