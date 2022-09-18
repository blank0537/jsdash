const property = require('./property');
const matches = require('./matches');
const matchesProperty = require('./matchesProperty');
const reject = (collection, operation) => {
    switch(typeof operation){
        case 'object':
            return Array.isArray(operation) ? collection.filter(item => !matchesProperty(operation[0], operation[1])(item)) : 
            collection.filter(item => !matches(operation)(item));
        case 'string':
            return collection.filter(item => !property(operation)(item));
        default:
            return collection.filter(item => !operation(item));            
    };
};
module.exports = reject;