const matches = require('./matches');
const matchesProperty = require('./matchesProperty');
const property = require('./property');
var partition = (arr, criteria) => {
    switch (typeof criteria) {
        case 'object':
            const isArr = Array.isArray(criteria);
            return [
                arr.filter(isArr ? matchesProperty(...criteria) : matches(criteria)),
                arr.filter(item => isArr ? !matchesProperty(...criteria)(item) : !matches(criteria)(item))
            ];
        case 'function':
            return [
                arr.filter(item => criteria(item)),
                arr.filter(item => !criteria(item)),
            ];
        case 'string':
            return [
                arr.filter(property(criteria)),
                arr.filter(item => !property(criteria)(item))
            ];
        default:
            return [];
    };
};
module.exports = partition;
