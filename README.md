# log-essentials

Log things, prefixed with a timestamp and name. Also uses colors and logging levels!

## Usage

```js
const Logger = require('@timstrasser/log-essentials');
const logger = new Logger('my-logger');

logger.setLogLevel('info');
logger.setLogLevel('error');
logger.setLogLevel('none');
logger.setLogLevel('all');

logger.success('Hello, world!');
logger.warn('Hello, world!');
logger.info('Hello, world!');
logger.error('Hello, world!');
logger.muted('Hello, world!');
logger.log('Hello, world!');
```
