// Complete the deleteNode function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function deleteNode(head, position) {
    if (position === 0) {
        return head.next
    }

    let currentHead = head
    let prevNode = head
    for (let i = 0; i < position; i++) {
        prevNode = currentHead
        currentHead = currentHead.next
    }

    prevNode.next = currentHead.next
    return head

}