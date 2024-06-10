function isValidAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    const freqCounter = {};
    for (const c of str1) {
        freqCounter[c] = (freqCounter[c] || 0) + 1;
    }
    for(const c of str2){
        if(!freqCounter[c]) return false;
        freqCounter[c] -= 1;
        if(freqCounter[c] < 0) return false;
    }
    return true;
}


function main() {
    console.log(isValidAnagram('', ''));
    console.log(isValidAnagram('aaz', 'zza'));
    console.log(isValidAnagram('anagram', 'nagaram'));
    console.log(isValidAnagram('rat', 'car'));
    console.log(isValidAnagram('awesome', 'awesom'));
    console.log(isValidAnagram('qwerty', 'qeywrt'));
    console.log(isValidAnagram('aabb', 'aabb'));
    console.log(isValidAnagram('aabb', 'aabbc'));
    console.log(isValidAnagram('aabbcc', 'aabbcc'));
}

main();