class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.tail) return undefined;
        let currentNode = this.head;
        let prev = currentNode;
        while (currentNode.next) {
            prev = currentNode;
            currentNode = currentNode.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        return currentNode;
    }

    shift() {
        if (!this.head) return null;
        const currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        return currentHead.val;
    }

    unshift(val) {
        if (!this.head) return this.push(val);
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this.head;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        let currIdx = 0;
        let resultNode = this.head;
        while (currIdx < idx && resultNode.next) {
            resultNode = resultNode.next;
            currIdx++;
        }
        return resultNode;
    }

    set(idx, val) {
        const node = this.get(idx);
        if (!node) return false
        node.val = val;
        return true;
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === 0) return !!this.unshift(val);
        if (idx === this.length) return !!this.push(val);
        const prevNode = this.get(idx - 1);
        const newNode = new Node(val);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;
        return true;
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();
        const prevNode = this.get(idx - 1);        
        const removedNode = prevNode.next;
        prevNode.next = prevNode.next.next;
        this.length--;
        return removedNode;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        while (current) {
            let temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }
        this.head = prev;
        return this;
    }

    rotate(n){
        if(n === 0 || n > this.length) return this;
        if(n < 0) {
            n = this.length + n;
        }
        let current = this.head;
        let ctr = 0;

        while(ctr < n){
            this.push(current.val);
            this.shift();
            current = current.next;
            ctr++;
        }
        return this;
    }
}



function main() {
    const list = new SinglyLinkedList();

    list.push(19);
    list.push(20);
    list.push(40);
    list.push(90);
    list.push(10);
    list.push(650);
    list.push(70);

    console.log(list);


    list.pop();
    list.pop();
    list.pop();

    console.log(list);

    list.shift();
    list.shift();

    console.log(list);

    list.unshift(1);
    list.unshift('AHMED');
    list.unshift('ALAA');

    console.log(list);


    console.log(list.get(0));
    console.log(list.get(1));
    console.log(list.get(2));
    console.log(list.get(list.length - 1));

    list.set(0, 'SAYED');
    list.set(1, 'SAYED');
    list.set(2, 'SAYED');

    console.log(list);

    list.insert(1, 'NASER');
    list.insert(3, 'SAIF');
    list.insert(4, 'ABDO');

    console.log(list);

    list.remove(2);
    list.remove(3);
    list.remove(4);

    console.log(list);

    console.log(list.reverse());
    console.log('Done')


    var singlyLinkedList = new SinglyLinkedList();

    singlyLinkedList.push(5).push(10).push(15).push(20);
    console.log(singlyLinkedList.head.val); // 5
    console.log(singlyLinkedList.tail.val); // 25;   
    // console.log(singlyLinkedList.remove(2).val); // 15
    // console.log(singlyLinkedList.remove(100)) // undefined
    // console.log(singlyLinkedList.length) // 3
    // console.log(singlyLinkedList.head.val) // 5
    // console.log(singlyLinkedList.head.next.val) // 10
    // console.log(singlyLinkedList.head.next.next.val) // 20

    singlyLinkedList.rotate(3);
    console.log(singlyLinkedList.head.val); // 20
    console.log(singlyLinkedList.head.next.val); // 25
    console.log(singlyLinkedList.head.next.next.val); // 5
    console.log(singlyLinkedList.head.next.next.next.val); // 10
    console.log(singlyLinkedList.head.next.next.next.next.val); // 15
    console.log(singlyLinkedList.tail.val); // 15
    console.log(singlyLinkedList.tail.next); // null

    var singlyLinkedList = new SinglyLinkedList;
    singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
    console.log(singlyLinkedList.head.val); // 5
    console.log(singlyLinkedList.tail.val); // 25;
    
    singlyLinkedList.rotate(-1);
    console.log(singlyLinkedList.head.val); // 25
    console.log(singlyLinkedList.head.next.val); // 5
    console.log(singlyLinkedList.head.next.next.val); // 10
    console.log(singlyLinkedList.head.next.next.next.val); // 15
    console.log(singlyLinkedList.head.next.next.next.next.val); // 20
    console.log(singlyLinkedList.tail.val); // 20
    console.log(singlyLinkedList.tail.next) // null
    
    var singlyLinkedList = new SinglyLinkedList;
    singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
    console.log(singlyLinkedList.head.val); // 5
    console.log(singlyLinkedList.tail.val); // 25;
    
    singlyLinkedList.rotate(1000);
    console.log(singlyLinkedList.head.val); // 5
    console.log(singlyLinkedList.head.next.val); // 10
    console.log(singlyLinkedList.head.next.next.val); // 15
    console.log(singlyLinkedList.head.next.next.next.val); // 20
    console.log(singlyLinkedList.head.next.next.next.next.val); // 25
    console.log(singlyLinkedList.tail.val); // 25
    console.log(singlyLinkedList.tail.next) // null

}

main();