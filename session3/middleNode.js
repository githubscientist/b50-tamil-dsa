/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const findLength = function(head) {
    // create an empty array to store the data of all the nodes
    let nodes = [];

    // traverse the linked list and push every node's data into nodes array
    while (head != null) {
        nodes.push(head.data);
        head = head.next;
    }

    // return the nodes array
    return nodes.length;
}

var middleNode = function(head) {
    let length = findLength(head);

    let moves = Math.floor(length/2);

    while(moves--){
        head = head.next;
    }

    return head;
};