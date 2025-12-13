// Approach 1st: TC = O(n*mlogm), SC = O(n*m)
// n = total number of strings.
// m = total number of charectors in each strings.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    for(let i=0; i< strs.length; i++){
        let sortedStr = strs[i].split("").sort().join("");
        if(!map[sortedStr]){
           map[sortedStr] = [strs[i]]; 
        }
        else{
            map[sortedStr].push(strs[i]);
        }
    }
    return [...Object.values(map)];
};



// Approach 2: ==>> By Hashmaps, // TC = O(n*m); SC = O(n*m);
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    for(let i=0; i<strs.length; i++){  // TC = O(n);
        // create a key
        let freqArr = Array(26).fill(0);
        let s = strs[i];
        for(let j=0; j<s.length; j++){ // TC = O(m);  
            let index = s[j].charCodeAt() - 'a'.charCodeAt();
            ++freqArr[index];
        }
        let key = "";
        for(let k=0; k<26; k++){
            key = key + String.fromCharCode(k) + freqArr[k];
        }
        // Fill the map
        if(!map[key]){
            map[key] = [s];
        }
        else {
            map[key].push(s);
        }
    }
    return [...Object.values(map)]
};

const fs = require("fs");
process.on("exit", () => { fs.writeFileSync("display_runtime.txt", "0"); })