//Given a non-empty array of integers, every element appears twice except for one. Find that single one.

var singleNumber = function (nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      return nums[i];
    }
  }
};
