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
var isPalindrome = function(head) {
    // find middle ==>> fast pointer and slow pointer
    let slow = fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    // swapping ==>> using temp
    let curr = slow;
    let prev = null;
    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    // palindrom
    let firstList = head;
    let secondList = prev;
    while(secondList){
        if(firstList.val != secondList.val){
            return false;
        }
        firstList = firstList.next;
        secondList = secondList.next;   
    }
    return true;
};