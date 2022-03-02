/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let current = head;
  let previous = null;
  let indexPosition = findIndex(head, n);
  // console.log(indexPosition);
  if (indexPosition === 0) {
    head = head.next;
  } else {
    let iterator = 0;
    while (iterator < indexPosition) {
      previous = current;
      current = current.next;
      iterator++;
    }
    previous.next = current.next;
  }
  return head;
};

var findIndex = function (head, n) {
  let position = 0;
  while (head) {
    position++;
    head = head.next;
  }
  return position - n;
};
