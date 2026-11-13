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
    let slowPointer = head;
    let fastPointer = head;
    while (fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }

    let previousNode = null;
    let currentNode = slowPointer;
    while (currentNode) {
        let nextTemp = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextTemp;
    }

    let firstPointer = head;
    let secondPointer = previousNode;
    let comparisonResult = true;

    while (secondPointer) {
        if (firstPointer.val !== secondPointer.val) {
            comparisonResult = false;
            break;
        }
        firstPointer = firstPointer.next;
        secondPointer = secondPointer.next;
    }

    let restorePrevious = null;
    let restoreCurrent = previousNode;
    while (restoreCurrent) {
        let nextTemp = restoreCurrent.next;
        restoreCurrent.next = restorePrevious;
        restorePrevious = restoreCurrent;
        restoreCurrent = nextTemp;
    }

    return comparisonResult;
};
