const orderBy = require('./orderBy');
const sortBy = (collection, iteratee) => orderBy(collection, iteratee);
module.exports = sortBy;