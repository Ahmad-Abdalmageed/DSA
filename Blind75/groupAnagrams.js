function groupAnagrams(strs){
    const anagramsTable = {};
    for(const str of strs){
        const key = str.split("").sort().join('');
        anagramsTable[key] = (anagramsTable[key] || []).concat([str]);
    }
    return Object.values(anagramsTable);
}


function main(){
    const strs = ["act","pots","tops","cat","stop","hat"];
    console.log(groupAnagrams(strs));
    console.log('SOLVED')
}

main();