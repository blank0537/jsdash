const isObject = (value, isLiteral=true) => {
    if(!isLiteral) return Object(value) === value;   
    return !(typeof value === 'function') && !(Array.isArray(value)) && Object(value) === value;
};
module.exports = isObject;