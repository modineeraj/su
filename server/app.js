const os = require('os');

console.log('Operating system:', os.type());
console.log('OS platform:', os.platform());
console.log('OS release:', os.release());
console.log('CPU architecture:', os.arch());
console.log('Total system memory:', os.totalmem() / (1024 * 1024 * 1024) + ' GB');
console.log('Free system memory:', os.freemem() / (1024 * 1024 * 1024) + ' GB');
console.log('Home directory:', os.homedir());