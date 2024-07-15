class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root
            while (true) {
                if (currentNode.value === value) break;
                else if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        break;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
        return this;
    }

    find(value) {
        function findValue(node, value) {
            if (node && value === node.value) return node;
            if (node && value < node.value) return findValue(node.left, value);
            if (node && value > node.value) return findValue(node.right, value);
            return undefined;
        }
        if (!this.root) return undefined;
        return findValue(this.root, value);
    }

    breadthFirstSearch() {
        const res = [];
        if (!this.root) return res;
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            const top = queue.shift();
            if (top.left) queue.push(top.left);
            if (top.right) queue.push(top.right);
            res.push(top.value);
        }
        return res;
    }

    DFSPreOrder() {
        const res = [];
        if (!this.root) return res;

        function DFS(node, res) {
            if (!node) return;
            res.push(node.value);
            DFS(node.left, res);
            DFS(node.right, res);
        }

        DFS(this.root, res);
        return res;
    }
    DFSInOrder() {
        const res = [];
        if (!this.root) return res;

        function DFS(node, res) {
            if (!node) return;
            DFS(node.left, res);
            res.push(node.value);
            DFS(node.right, res);
        }

        DFS(this.root, res);
        return res;
    }
    DFSPostOrder() {
        const res = [];
        if (!this.root) return res;

        function DFS(node, res) {
            if (!node) return;
            DFS(node.left, res);
            DFS(node.right, res);
            res.push(node.value);
        }

        DFS(this.root, res);
        return res;
    }

    remove(key) {
        if (!this.root) return this.root;

        function removeNode(node, key) {
            if (!node) return node;
            // Traversal 
            if (key < node.value) {
                node.left = removeNode(node.left, key)
            } else if (key > node.value) {
                node.right = removeNode(node.right, key)
            } else {
                if (!node.left) {
                    return node.right;
                } else if (!node.right) {
                    return node.left;
                }
                let currentNode = node.right;
                while (currentNode.left) {
                    currentNode = currentNode.left;
                }
                node.value = currentNode.value
                node.right = removeNode(node.right, node.value)
            }
            return node;
        }
        return removeNode(this.root, key);
    }
    findSecondLargest() {
        if (!this.root) return undefined;
        const inOrderArray = this.DFSInOrder();
        if (inOrderArray.length <= 2) return undefined;
        else {
            return inOrderArray[inOrderArray.length - 2];
        }
    }
    getHeight(node = this.root) {
        if (!node) return 0;
        return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }
    isBalanced() {
        const left = this.getHeight(this.root.left);
        const right = this.getHeight(this.root.right);
        return Math.abs(right - left) <= 1;
    }
}


function main() {
    const tree = new BinarySearchTree();
    tree.insert(15)
        .insert(20)
        .insert(10)
        .insert(12)
        .insert(1)
        .insert(5)
        .insert(50)
        .insert(70)
        .insert(80)
        .insert(90)
        .insert(100);

    console.log(tree);
    console.log(tree.find(3));
    console.log(tree.find(2));
    console.log(tree.find(9));
    console.log(tree.find(12));
    console.log(tree.find(7));
    console.log(tree.breadthFirstSearch());
    console.log(tree.DFSPreOrder());
    console.log(tree.DFSPostOrder());
    console.log(tree.DFSInOrder());
    console.log(tree.getHeight());
    console.log(tree.isBalanced());
}


main();