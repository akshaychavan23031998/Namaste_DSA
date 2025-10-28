/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // node will point to words head and it does not have value
    let sentinel = new ListNode();
    sentinel.next = head;
    prev = sentinel;

    while(prev && prev.next){
        if(prev.next.val == val){
            prev.next = prev.next.next
        }
        else{
            prev = prev.next;
        }
    }
    return sentinel.next;
};