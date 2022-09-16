const forEach = require('./forEach');
const forEachRight = (collection, iteratee) => forEach(collection, iteratee, true);
module.exports = forEachRight;