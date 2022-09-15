const takeRight = (arr, qty = 1) => [...arr].splice(-qty, qty);
module.exports = takeRight;