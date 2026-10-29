function remainder(a, b) {
  if (b === 0) {
    throw new Error('0で割ることはできません');
  }
  return a % b;
}

module.exports = { add, subtract, multiply, divide, power, remainder };