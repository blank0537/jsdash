const property = require('./property');
const matches = require('./matches');
const matchesProperty = require('./matchesProperty');
const some = (collection, operation) => {
    switch(typeof operation){
        case 'object':
            return Array.isArray(operation) ? collection.some(matchesProperty(operation[0], operation[1])) : 
            collection.some(matches(operation));
        case 'string':
            return collection.some(property(operation));
        default:
            return collection.some(operation);            
    };
};
module.exports = some;