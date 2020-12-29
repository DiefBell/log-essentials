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

logger.success('Hello, world!', '\n');
logger.warn('Hello, world!', '\n');
logger.info('Hello, world!', '\n');
logger.error('Hello, world!', '\n');
logger.muted('Hello, world!', '\n');
logger.log('Hello, world!', '\n');

// ...or alternatively
const { Logger } = require('@timstrasser/log-essentials'');
const namespacedLogger = new Logger({ prefix: 'my-logger', icons: true });
namespacedLogger.success('Hello, world!', '\n');

// ...or alternatively
const { getLogger } = require('@timstrasser/log-essentials'');
const otherNamespacedLogger = getLogger({ prefix: 'my-other-logger' });
otherNamespacedLogger.info('Hello, world!', '\n');
```
