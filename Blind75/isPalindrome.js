
function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;

    function isAlphanumeric(str) {
        return /^[a-zA-Z0-9]+$/.test(str);
    }

    while (i <= j) {
        while (i < j && !isAlphanumeric(str[i])) i++;
        while (i < j && !isAlphanumeric(str[j])) j--;

        if (str[i].toLowerCase() !== str[j].toLowerCase()) {
            return false
        }

        i++;
        j--;
    }
    return true;
}


function main() {
    const s = "Was it a car or a cat I saw?";
    console.log(isPalindrome(s));
    const l = 'tab a cat'
    console.log(isPalindrome(l));
}

main()