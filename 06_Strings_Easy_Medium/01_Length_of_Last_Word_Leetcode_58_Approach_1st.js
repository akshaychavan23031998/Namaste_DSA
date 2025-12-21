/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let n = s.length - 1;
    while(n>=0){
        if(s[n]===" "){
            --n;
        }
        else {
            break;
        }
    }

    let count = 0;
    while(n>=0){
        if(s[n] != " "){
            --n;
            ++count;
        }
        else {
            break;
        }
    }
    return count;
};

// TC = O(n);
// SC = O(1);


// In Single Loop 
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let n = s.length - 1;
    let count = 0;
    while(n>=0){
        if(s[n] != " "){
            count++;
        }
        else if(count > 0){
            break;
        }
        --n;
    }
    return count;
};

// TC = O(n);
// SC = O(1);