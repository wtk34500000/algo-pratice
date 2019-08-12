/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtHead(head, data) {
    let newNode = new SinglyLinkedListNode()
    newNode.data = data
    if (head === null) {
        return newNode
    }

    newNode.next = head

    return newNode

}