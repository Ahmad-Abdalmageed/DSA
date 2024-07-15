class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }
    bubbleUpIterative() {
        function swap(arr, idx1, idx2) {
            const temp = arr[idx1];
            arr[idx1] = arr[idx2];
            arr[idx2] = temp;
        }

        let idx = this.values.length - 1;
        let parentIdx;
        while (idx > 0) {
            parentIdx = Math.floor((idx - 1) / 2);
            if (this.values[idx] < this.values[parentIdx]) break;
            swap(this.values, idx, parentIdx);
            idx = parentIdx
        }
    }
    bubbleUp() {
        function swap(arr, idx1, idx2) {
            const temp = arr[idx1];
            arr[idx1] = arr[idx2];
            arr[idx2] = temp;
        }

        function bubbleUpRecursive(value, idx, parentIdx, values) {
            if (idx >= 0 && parentIdx >= 0 && value > values[parentIdx]) {
                swap(values, idx, parentIdx);
                let newParent = Math.floor((parentIdx - 1) / 2);
                bubbleUpRecursive(value, parentIdx, newParent, values);
            }
        }
        let idx = this.values.length - 1;
        let parentIdx = Math.floor((idx - 1) / 2);
        bubbleUpRecursive(this.values[idx], idx, parentIdx, this.values)
    }

    extract() {
        function swap(arr, idx1, idx2) {
            const temp = arr[idx1];
            arr[idx1] = arr[idx2];
            arr[idx2] = temp;
        }
        swap(this.values, 0, this.values.length - 1);
        const res = this.values.pop();
        this.bubbleDown();
        return res;
    }

    bubbleDown() {
        function swap(arr, idx1, idx2) {
            const temp = arr[idx1];
            arr[idx1] = arr[idx2];
            arr[idx2] = temp;
        }
        let idx = 0;
        let leftChildIndx = 2 * idx + 1;
        let largerChild
        while (leftChildIndx <= this.values.length - 1) {
            largerChild = leftChildIndx
            if (leftChildIndx + 1 < this.values.length && this.values[leftChildIndx + 1] > this.values[leftChildIndx]) {
                largerChild = leftChildIndx + 1;
            }
            if (this.values[idx] > this.values[largerChild]) {
                break;
            }
            swap(this.values, idx, largerChild);
            idx = largerChild
            leftChildIndx = 2 * idx + 1;
        }
    }
}


function main() {
    const heap = new MaxBinaryHeap();
    heap.insert(5);
    heap.insert(6);
    heap.insert(7);
    heap.insert(8);
    heap.insert(10);
    heap.insert(2);
    console.log(heap.values)
    console.log(heap.extract());
    console.log(heap.extract());
    console.log(heap.extract());
    console.log(heap.extract());
    console.log(heap.extract());
    console.log(heap.extract());
    console.log(heap.extract());
}


main();