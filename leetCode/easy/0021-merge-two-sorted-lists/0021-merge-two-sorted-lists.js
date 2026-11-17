/**
 * @param {ListNode} list1 첫 번째 정렬된 연결 리스트의 헤드 노드
 * @param {ListNode} list2 두 번째 정렬된 연결 리스트의 헤드 노드
 * @return {ListNode} 병합된 연결 리스트의 헤드 노드
 */
var mergeTwoLists = function (list1, list2) {
    /*
     * 병합 과정을 단순화하고 첫 번째 노드(Head) 선정 로직의 예외 처리를
     * 방지하기 위해 가상 헤드(Dummy Head) 노드를 생성한다.
     */
    const dummyHead = new ListNode(0);
    let currentNode = dummyHead;

    let pointer1 = list1;
    let pointer2 = list2;

    /*
     * 두 리스트 중 어느 한쪽이 끝날 때까지 값을 비교하여
     * 더 작은 노드를 순서대로 연결한다.
     */
    while (pointer1 !== null && pointer2 !== null) {
        if (pointer1.val <= pointer2.val) {
            currentNode.next = pointer1;
            pointer1 = pointer1.next;
        } else {
            currentNode.next = pointer2;
            pointer2 = pointer2.next;
        }
        currentNode = currentNode.next;
    }

    // 한쪽 리스트가 먼저 끝났을 때 남은 노드들을 통째로 이어 붙인다.
    if (pointer1 !== null) {
        currentNode.next = pointer1;
    } else {
        currentNode.next = pointer2;
    }

    return dummyHead.next;
};