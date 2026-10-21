class Solution {
    groupAnagrams(strs) {
        const res = {};
        for (let s of strs) {
            const sortedS = s.split('').sort().join('');
            if (!res[sortedS]) {
                res[sortedS] = [];
            }
            res[sortedS].push(s);
        }
        return Object.values(res);
    }
}

// NEed to try again 

// Time limit exceeded
class Solution {
    groupAnagrams(strs) {
        let result = [];
    let used = new Array(strs.length).fill(false);

    for (let i = 0; i < strs.length; i++) {
        if (used[i]) continue;

        let group = [strs[i]];
        used[i] = true;

        for (let j = i + 1; j < strs.length; j++) {
            if (used[j]) continue;

            if (strs[i].split("").sort().join("") ===
                strs[j].split("").sort().join("")) {
                group.push(strs[j]);
                used[j] = true;
            }
        }

        result.push(group);
    }

    return result;
    }

}
