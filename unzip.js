const zip = require('./zip');
const unzip = ([...args]) => zip(...args);
module.exports = unzip;