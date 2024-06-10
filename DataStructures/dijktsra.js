
// TODO: CREATE A HEAP PRIORITY QUEUE
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        this.values.push({ value, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((v1, v2) => v1.priority - v2.priority);
    }
    isEmpty() {
        return !this.values.length;
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(key) {
        if (!this.adjacencyList[key]) {
            this.adjacencyList[key] = []
        }
    }

    addEdge(v1, v2, w) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return;
        this.adjacencyList[v1].push({ node: v2, weight: w });
        this.adjacencyList[v2].push({ node: v1, weight: w });
    }

    shortestDistance(start, end) {
        const distances = {};
        const nodes = new PriorityQueue();
        const previous = {};
        const path = [];

        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null;
        }

        while (!nodes.isEmpty()) {
            const currentNode = nodes.dequeue();
            if (currentNode.value === end) {
                let nodePath = currentNode.value
                while (previous[nodePath]) {
                    path.push(nodePath);
                    nodePath = previous[nodePath];
                }
                path.push(start);
                break;
            }
            else {
                if (distances[currentNode.value] !== Infinity) {
                    for (let neighbor of this.adjacencyList[currentNode.value]) {
                        const candidateDistance = distances[currentNode.value] + neighbor.weight;
                        if (candidateDistance < distances[neighbor.node]) {
                            distances[neighbor.node] = candidateDistance;
                            previous[neighbor.node] = currentNode.value;
                            nodes.enqueue(neighbor.node, candidateDistance);
                        }
                    }
                }
            }

        }
        return path.reverse();
    }
}



function main() {
    const g = new WeightedGraph();

    g.addVertex('A');
    g.addVertex('B');
    g.addVertex('C');
    g.addVertex('D');
    g.addVertex('E');
    g.addVertex('F');

    g.addEdge('A', 'B', 4);
    g.addEdge('A', 'C', 2);
    g.addEdge('B', 'E', 3);
    g.addEdge('C', 'D', 2);
    g.addEdge('C', 'F', 4);
    g.addEdge('D', 'E', 3);
    g.addEdge('D', 'F', 1);
    g.addEdge('E', 'F', 1);

    console.log(g);
    console.log(g.shortestDistance('A', 'D'))
}

main();