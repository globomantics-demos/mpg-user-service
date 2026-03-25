const { profile } = require('./index');

if (profile('u-1').id !== 'u-1') {
  console.error('user-service: FAIL - a profile should carry its id');
  process.exit(1);
}
console.log('user-service: ok');
