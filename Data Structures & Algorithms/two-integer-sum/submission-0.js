class Solution {
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
        return [];
    }
}
// Need to find other soltuion

// isAnagram(s, t) {
//     if (s.length !== t.length) {
//         return false;
//     }

//     const count = new Array(26).fill(0);

//     for (let i = 0; i < s.length; i++) {
//         count[s.charCodeAt(i) - 97]++;
//         count[t.charCodeAt(i) - 97]--;
//     }

//     return count.every(val => val === 0);
// }
