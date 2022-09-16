const property = require('./property');
const matches = require('./matches');
const matchesProperty = require('./matchesProperty');

const find = (collection, operation, isReverse=false) => {
    const operationType = typeof operation;
    const updatedCollection = isReverse ? collection.reverse() : collection;
    switch(operationType){
        case 'object':
            return Array.isArray(operation) ? updatedCollection.find(matchesProperty(operation[0], operation[1])) : 
            updatedCollection.find(matches(operation));
        case 'string':
            return updatedCollection.find(property(operation));
        default:
            return updatedCollection.find(operation);            
    }
};
module.exports = find;