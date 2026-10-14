class Solution {
    isAnagram(j, k) {
       if (j.length !== k.length) {
            return false;
        }

        let jSort = j.split('').sort().join();
        let kSort = k.split('').sort().join();
        return jSort == kSort;
    }
}
