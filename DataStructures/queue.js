class ArrrayQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(val) {
        this.queue.push(val);
    }

    dequeue() {
        return this.queue.shift();
    }
}


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if (!this.first) return null;
        const currentHead = this.first;
        this.first = this.first.next;
        this.size--;
        return currentHead.value;
    }
}


function main() {
    const q = new Queue();
    q.enqueue(4);
    q.enqueue(3);
    q.enqueue(2);
    q.enqueue(1);

    console.log(q.dequeue());
    console.log(q.dequeue());
    console.log(q.dequeue());


}

main();