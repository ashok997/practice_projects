//Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let numArray = x.toString().split("");
  // console.log(numArray)
  let reveresedArray = numArray.reverse();
  //console.log(reveresedArray.join(''));

  return x == reveresedArray.join("");
};
