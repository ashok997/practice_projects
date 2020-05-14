// Given a 32-bit signed integer, reverse digits of an integer.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x < 0) {
    let y = -x;
    let reversed = y.toString().split("");
    let reveresedArray = reversed.reverse();

    let result = reveresedArray.join("");
    return -result;
  } else {
    let reversed = x.toString().split("");
    let reveresedArray = reversed.reverse();
    let result = reveresedArray.join("");
    return result;
  }
};
