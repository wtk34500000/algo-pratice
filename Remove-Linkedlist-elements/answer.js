/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let fakeNode = new ListNode();
    fakeNode.next = head
    let current = fakeNode

    while (current.next !== null) {
        if (current.next.val === val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }

    return fakeNode.next
};