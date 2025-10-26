/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // store elements of LL B in set
    let store = new Set();
    while(headB){
        store.add(headB);
        headB = headB.next;
    }
    // check LL A element inthe stored LL of A using has.
    while(headA){
        if(store.has(headA)){
            return headA;
        }
        headA = headA.next;
    }
    return null;
};