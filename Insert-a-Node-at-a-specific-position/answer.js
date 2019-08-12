// Complete the insertNodeAtPosition function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtPosition(head, data, position) {
    let newNode = new SinglyLinkedListNode();
    newNode.data = data;

    if (head === null) {
        return newNode
    } else if (position === 0) {
        newNode.next = head
        return newNode
    }

    let currentHead = head
    for (let i = 0; i < position - 1; i++) {
        currentHead = currentHead.next
    }

    newNode.next = currentHead.next
    currentHead.next = newNode

    return head;
}