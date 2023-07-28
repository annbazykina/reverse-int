module.exports = function reverse (n) {
    const reverse = parseInt(n.toString().split('').reverse().join(''));
    return reverse;
}