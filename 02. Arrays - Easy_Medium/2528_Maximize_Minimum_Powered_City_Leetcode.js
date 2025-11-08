/**
 * LeetCode 2528: Maximize the Minimum Powered City
 * 
 * Approach: Binary Search + Greedy with Difference Array
 * 
 * Time Complexity: O(n * log(maxPower))
 * Space Complexity: O(n)
 * 
 * @param {number[]} stations
 * @param {number} r
 * @param {number} k
 * @return {number}
 */
var maxPower = function(stations, r, k) {
    const n = stations.length;
    
    // Step 1: Calculate initial power for each city
    // Power[i] = sum of stations[j] where |i - j| <= r
    function calculateInitialPower() {
        const power = new Array(n).fill(0);
        
        // For each city i, add contributions from all stations within range r
        for (let i = 0; i < n; i++) {
            const left = Math.max(0, i - r);
            const right = Math.min(n - 1, i + r);
            
            for (let j = left; j <= right; j++) {
                power[i] += stations[j];
            }
        }
        
        return power;
    }
    
    // Step 2: Check if we can achieve minimum power 'minPower' with k stations
    function canAchieve(minPower) {
        // Calculate initial power for each city
        const initialPower = calculateInitialPower();
        
        // Difference array to efficiently track where we add stations
        // additions[i] = number of stations added at position i
        const additions = new Array(n).fill(0);
        
        // Difference array to track power boost from additions
        // When we add a station at position 'pos', it affects cities [pos-r, pos+r]
        const powerBoost = new Array(n + 1).fill(0);
        let stationsUsed = 0;
        let currentBoost = 0; // Running prefix sum of powerBoost
        
        for (let i = 0; i < n; i++) {
            // Apply power boost from previous additions
            currentBoost += powerBoost[i];
            
            // Current power at city i
            const currentPower = initialPower[i] + currentBoost;
            
            // If this city needs more power
            if (currentPower < minPower) {
                const needed = minPower - currentPower;
                
                // Greedy: Add stations at the rightmost position that can help this city
                // This maximizes the range effect for future cities
                const addAt = Math.min(n - 1, i + r);
                
                // Record the addition
                additions[addAt] += needed;
                
                // Update powerBoost: Adding 'needed' stations at 'addAt' affects
                // all cities in range [addAt - r, addAt + r]
                const affectStart = Math.max(0, addAt - r);
                const affectEnd = Math.min(n - 1, addAt + r);
                
                powerBoost[affectStart] += needed;
                if (affectEnd + 1 < n) {
                    powerBoost[affectEnd + 1] -= needed;
                }
                
                // If current city is in the affected range, apply boost immediately
                if (i >= affectStart && i <= affectEnd) {
                    currentBoost += needed;
                }
                
                stationsUsed += needed;
                
                // Early exit if we exceed k
                if (stationsUsed > k) {
                    return false;
                }
            }
        }
        
        return stationsUsed <= k;
    }
    
    // Step 3: Binary search on the answer
    // Lower bound: minimum initial power
    // Upper bound: maximum possible power (all stations + k stations, all affecting all cities)
    const initialPower = calculateInitialPower();
    let left = Math.min(...initialPower);
    let right = Math.max(...initialPower) + k * (2 * r + 1); // Upper bound estimate
    let answer = left;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (canAchieve(mid)) {
            answer = mid;
            left = mid + 1; // Try for higher minimum power
        } else {
            right = mid - 1; // Too high, reduce
        }
    }
    
    return answer;
};

// Test cases
console.log("Test 1:", maxPower([1,2,4,5,0], 1, 2)); // Expected: 5
console.log("Test 2:", maxPower([4,4,4,4], 0, 3)); // Expected: 4

