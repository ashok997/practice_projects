//Given an array nums and a value val, remove all instances of
//that value in-place and return the new length.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

// var removeElement = function(nums, val) {
//     let filtered = nums.filter(num=> num !== val)
//      return filtered
//    };
