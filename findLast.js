const find = require('./find');
const findLast = (collection, operation) => find(collection, operation, true);
module.exports = findLast;