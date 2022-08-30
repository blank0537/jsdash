const matches = (obj) => {
    const keys = Object.keys(obj);
    return (e) => keys.every(x => obj[x] === e[x]);
};
module.exports = matches;