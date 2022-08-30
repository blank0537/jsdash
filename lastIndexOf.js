const lastIndexOf = (arr, value, fromIndex=null) => {
    const updatedFLI = fromIndex === null ? arr.length-1 : fromIndex;
    return arr.lastIndexOf(value, updatedFLI);
};
module.exports = lastIndexOf;