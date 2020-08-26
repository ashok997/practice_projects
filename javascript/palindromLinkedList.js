// Given a singly linked list, determine if it is a palindrome.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function (head) {
  const listArray = [];
  let index = 0;
  let currentNode = head;
  while (currentNode != null) {
    listArray[index++] = currentNode.val;
    currentNode = currentNode.next;
  }
  return listArray.every((a, i) => {
    return a === listArray[listArray.length - i - 1];
  });
};
