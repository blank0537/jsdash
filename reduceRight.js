const reduce = require('./reduce');
const reduceRight = (collection, iteratee, accumulator) => reduce(collection, iteratee, accumulator, true);
module.exports = reduceRight;