const fill = (arr, value, start=0, end=null) => {
    const updatedEnd = end === null ? arr.length : end;
    return arr.fill(value, start, updatedEnd);
};
module.exports = fill;