/**
 * @param {number[]} nums
 * @return {number}
 * Given a sorted array nums, remove the duplicates in-place such that each element
 * appear only once and return the new length.
 * This solution only works for sorted array and does not modifies the length of the original array
 * Little bit confusing
 */

function removeDuplicates(nums) {
  if (nums.length == 0) return 0;

  let i = 0;
  for (j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
