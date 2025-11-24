/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let filteredString = "";
    for(let i=0; i<s.length; i++){
        if(s[i].match(/[a-z0-9]/i)){
            // filteredString = filteredString + s[i];
            filteredString += s[i]; // short hand or short cut to above line.
        }
    }
    let rev = filteredString.split("").reverse().join("");
    return filteredString === rev;
};


// without using predefined methods or inbuilt methods like, splite, reverse and join

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let filteredString = "";
    let rev = "";
    for(let i=0; i<s.length; i++){
        if(s[i].match(/[a-z0-9]/i)){
            filteredString = filteredString + s[i];
            rev = s[i] + rev;
        }
    }
    return filteredString === rev;
};



// TC = O(n);
// SC = O(n);   // using rev variable of length s.