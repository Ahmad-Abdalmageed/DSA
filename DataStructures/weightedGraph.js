class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(key) {
        if (!this.adjacencyList[key]) {
            this.adjacencyList[key] = []
        }
    }

    addEdge(v1, v2, w) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return;
        this.adjacencyList[v1].push({node: v2, weight: w});
        this.adjacencyList[v2].push({node: v1, weight: w});
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

    g.addEdge('A', 'B', 10);
    g.addEdge('A', 'C', 12);
    g.addEdge('B', 'D', 15);
    g.addEdge('C', 'E', 16);
    g.addEdge('D', 'E', 19);
    g.addEdge('D', 'F', 1);
    g.addEdge('E', 'F', 14);

    // console.log(g.dfsRecursive('A'));
    // console.log(g.dfsIterative('A'));
    // console.log(g.bfsIterative('A'));
    console.log(g);
}

main();