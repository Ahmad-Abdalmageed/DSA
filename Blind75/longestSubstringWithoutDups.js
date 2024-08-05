function lengthOfLongestSubstring(s) {
    let i = 0;
    let j = 0;
    let unique = new Set();
    let res = 0;
    while (j < s.length) {
        while(unique.has(s[j])){
            unique.delete(s[i]);
            i++;
        }
        unique.add(s[j]);
        res = Math.max(res, j - i + 1);
        j++;
    }
    return res;
}

function main() {
    console.log(lengthOfLongestSubstring("abcabcbb"))
    console.log(lengthOfLongestSubstring("bbbbb"))
    console.log(lengthOfLongestSubstring("pwwkew"))
    console.log(lengthOfLongestSubstring("dvdf"))
}

main();