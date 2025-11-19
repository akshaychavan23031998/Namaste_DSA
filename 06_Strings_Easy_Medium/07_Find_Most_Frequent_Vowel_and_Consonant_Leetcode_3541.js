// Approach 1st:
/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    // add all charectors of string into the map
    let map = {};   // key(vowel or Consonant) : value(frequency)
    for(let i=0; i<s.length; i++){
        if(!map[s[i]]){
            map[s[i]] = 1;
        }
        else {
            map[s[i]]++;
        }
    }

    let vowel = ['a', 'e', 'i', 'o','u'];
    let maxVowel = 0;
    let maxConsonant = 0;
    
    for(let i=0; i<s.length; i++){  
        if(vowel.includes(s[i])){
            if(map[s[i]] > maxVowel){
                maxVowel = map[s[i]];
            }
        }
        else {
            if(map[s[i]] > maxConsonant){
                maxConsonant = map[s[i]];
            }
        }
    }
    return maxConsonant + maxVowel;
};


// Minor improvments in 2nd loop of approach 1st.
/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    // add all charectors of string into the map
    let map = {};   // key(vowel or Consonant) : value(frequency)
    for(let i=0; i<s.length; i++){
        if(!map[s[i]]){
            map[s[i]] = 1;
        }
        else {
            map[s[i]]++;
        }
    }

    let vowel = ['a', 'e', 'i', 'o','u'];
    let maxVowel = 0;
    let maxConsonant = 0;

// but in the second for loop we are again looping it over the string, if we directly loop over the map then here it will be unique values, but map is an object soo we want keys how will u find key in JS is ==>> 
// let keys = Object.keys(map);

    let key = Object.keys(map);
    for(let i=0; i<key.length; i++){
        if(vowel.includes(key[i])){
            if(map[key[i]] > maxVowel) { 
                maxVowel = map[key[i]];
            }
        }
        else {
            if(map[key[i]] > maxConsonant) { 
                maxConsonant = map[key[i]];
            }
        }
    }
    return maxConsonant + maxVowel;
};


// Code wise improvments in if else converted to ternary operator.
/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map = {};
    for(let i=0; i<s.length; i++){
        map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]];
    }

    let vowel = ['a', 'e', 'i', 'o','u'];
    let maxVowel = 0;
    let maxConsonant = 0;
    let key = Object.keys(map);
    
    for(let i=0; i<key.length; i++){
        if(vowel.includes(key[i])){
            maxVowel = Math.max(maxVowel, map[key[i]]);
        }
        else {
            maxConsonant = Math.max(maxConsonant, map[key[i]]);
        }
    }
    return maxConsonant + maxVowel;
};


// TC = O(n);
// SC = O(1);