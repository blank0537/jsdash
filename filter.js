const property = require('./property');
const matches = require('./matches');
const matchesProperty = require('./matchesProperty');

const filter = (collection, operation) => {
    const operationType = typeof operation;
    switch(operationType){
        case 'object':
            return Array.isArray(operation) ? collection.filter(matchesProperty(operation[0], operation[1])) : 
            collection.filter(matches(operation));
        case 'string':
            return collection.filter(property(operation));
        default:
            return collection.filter(operation);            
    }
};
module.exports = filter;