const binaryXor = (arr1, arr2) => {
    const a = arr1.filter(x => !arr2.includes(x));
    const b = arr2.filter(x => !arr1.includes(x));
    return Array.from(new Set([...a, ...b]));
};
const xor = (...arrays) => arrays.reduce(binaryXor, []);
module.exports = xor;