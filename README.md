## Steps to reproduce bug

##### 1. Install dependencies

    $ npm i

##### 2. Run tests with coverage report

    $ npm run test:coverage

Open coverage/index.html. Test coverage is 87,5%. Lines 17 and 28 are RED.

##### 3. Switch compiler optimizer off
Go to `truffle.js:17` and unset `enabled` option (with `enabled: false`).

##### 4. Run tests with coverage report, again

    $ npm run test:coverage
Open coverage/index.html. Test coverage should be 100%. All lines should be GREEN.
