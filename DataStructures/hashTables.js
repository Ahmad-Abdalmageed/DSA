class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        const indx = this._hash(key);
        if (!this.keyMap[indx]) {
            this.keyMap[indx] = [];
        }
        this.keyMap[indx].push([key, value]);
    }

    get(key) {
        const indx = this._hash(key);
        let value = undefined
        if (this.keyMap[indx]) {
            this.keyMap[indx].forEach(keyValue => {
                if (keyValue[0] === key) {
                    value = keyValue[1];
                }
            });
        }
        return value;
    }
}

function main() {
    const hashMap = new HashTable();
    hashMap.set('AHMED', 27);
    hashMap.set('ALAA', 27);
    hashMap.set('SAYED', 28);
    hashMap.set('NASR', 24);
    hashMap.set('NADER', 25);

    console.log(hashMap.get('AHMED'));
    console.log(hashMap.get('NADER'));
    console.log(hashMap.get('NASR'));
    console.log(hashMap.get('SAYED'));
}


main();