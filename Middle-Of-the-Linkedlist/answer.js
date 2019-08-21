var middleNode = function (head) {
    let arr = []
    let currentHead = head
    while (currentHead !== null) {
        arr.push(currentHead.val)
        currentHead = currentHead.next
    }

    let newNode = new ListNode()
    let temp = newNode
    if (arr.length % 2 === 1) {
        let mid = Math.floor(arr.length / 2)
        for (let i = mid; i < arr.length; i++) {
            temp.val = arr[i]
            if (i < arr.length - 1) {
                temp.next = new ListNode()
                temp = temp.next
            }
        }
        return newNode
    }

    if (arr.length % 2 === 0) {
        let mid = (arr.length / 2)
        for (let i = mid; i < arr.length; i++) {
            temp.val = arr[i]
            if (i < arr.length - 1) {
                temp.next = new ListNode()
                temp = temp.next
            }
        }
        return newNode
    }

};