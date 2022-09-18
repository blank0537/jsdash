const shuffle = (arr) => {
    const updatedArr = Array.isArray(arr) ? arr : Object.values(arr);
    return updatedArr.sort(() => Math.random() - 0.5);
};
module.exports = shuffle;