const property = require('./property');
const matches = require('./matches');
const matchesProperty = require('./matchesProperty');
const every = (collection, operation) => {
    const operationType = typeof operation;
    switch(operationType){
        case 'object':
            return Array.isArray(operation) ? collection.every(matchesProperty(operation[0], operation[1])) : 
            collection.every(matches(operation));
        case 'string':
            return collection.every(property(operation));
        default:
            return collection.every(operation);            
    }
};
module.exports = every;