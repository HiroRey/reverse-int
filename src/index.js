module.exports = function reverse (n) {
  return new String(n).split('').reverse().join('').replace('-', '');
}
