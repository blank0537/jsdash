const matches = require('./matches');
const matchesProperty = require('./matchesProperty');
const property = require('./property');
const findLastIndex = (arr, arg) => {
    const argType = typeof arg;
    const updatedArr = arr.reverse();
    let index = -1;
    if(argType === 'object'){
        if(Array.isArray(arg)){
            index = updatedArr.findIndex(matchesProperty(arg));
        }else{
            index = updatedArr.findIndex(matches(arg));
        };
    }else if(arg === 'function'){
        index = updatedArr.findIndex(arg);
    }else if(arg === 'string'){
        index = updatedArr.findIndex(property(arg));
    };
    index = index === -1 ? index : arr.length-index-1;
    return index;
};
module.exports = findLastIndex;