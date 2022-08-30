const matches = require('./matches');
const matchesProperty = require('./matchesProperty');
const property = require('./property');
const findIndex = (arr, arg) => {
    const argType = typeof arg;
    if(argType === 'object'){
        if(Array.isArray(arg)){
            return arr.findIndex(matchesProperty(arg));
        }else{
            return arr.findIndex(matches(arg));
        };
    }else if(arg === 'function'){
        return arr.findIndex(arg);
    }else if(arg === 'string'){
        return arr.findIndex(property(arg));
    };
};
module.exports = findIndex;