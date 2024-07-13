class arrayStack {
    constructor() {
        this.stack = [];
    }

    push(val){
        this.stack.push(val);                       
    }

    pop(){
        return this.stack.pop();
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Stack {
    constructor(){
        this.first = null;
        this.size = 0;
    }

    push(val){
        const newNode = new Node(val);
        newNode.next = this.first;
        this.first = newNode;
        return ++this.size;
    }

    pop(){
        if(!this.size) return null;
        const res = this.first;
        this.first = this.first.next;
        this.size--;
        return res.val;
    }
}


function main(){
    // const stack = new Stack();

    // stack.push(1);
    // stack.push(2);
    // stack.push(3);
    // stack.push(4);

    // console.log(stack.pop());
    // console.log(stack.pop());
    // console.log(stack.pop());
    // console.log(stack.pop());
    // console.log(stack.pop());
    // console.log(stack.pop());


    var stack = new Stack();
 
    stack.push(10);
    stack.push(100);
    stack.push(1000);
    var removed = stack.pop();
    console.log(removed) // 1000
    console.log(stack.size) // 2
    stack.pop();
    stack.pop();
    console.log(stack.size) // 0
}


main();