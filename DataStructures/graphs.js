class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(v1, v2) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }
    removeVertex(v) {
        if (!this.adjacencyList[v]) return null;
        const keys = Object.keys(this.adjacencyList).filter(k => k !== v);
        keys.forEach(k => {
            this.removeEdge(v, k);
        })
        delete this.adjacencyList[v];
    }

    depthFirstSearch(start) {
        if (!this.adjacencyList[start]) return null;
        const stack = [];
        const res = [];
        const visited = {};
        stack.push(start);

        while (stack.length) {
            const vertex = stack.pop();
            if (!visited[vertex]) {
                res.push(vertex);
                visited[vertex] = true;
                for (const node of this.adjacencyList[vertex]) {
                    stack.push(node);
                }
            }
        }
        return res;
    }

    depthFirstSearchRecursive(start) {
        if (!this.adjacencyList[start]) return [];

        const res = [];
        const visited = {};

        function dfs(node, adjacencyList) {
            res.push(node);
            visited[node] = true;
            adjacencyList[node].forEach(vertex => {
                if (!visited[vertex]) {
                    dfs(vertex, adjacencyList);
                }
            });
        }
        dfs(start, this.adjacencyList);
        return res;
    }

    breadthFirstSearch(start) {
        if (!this.adjacencyList[start]) return [];
        const res = [];
        const queue = [];
        const visited = {};
        queue.push(start);
        visited[start] = true;

        while(queue.length){
            const vertex = queue.shift();
            res.push(vertex)
            for(const neighbor of this.adjacencyList[vertex]){
                if(!visited[neighbor]){
                    queue.push(neighbor);
                    visited[neighbor] = true
                }
            }
        }
        return res;
    }
}

function main() {
    const graph = new Graph();
    // const v1 = 'ALAA';
    // const v2 = 'AHMED';
    // const v3 = 'EGYPT';
    // const v4 = 'CAIRO';
    // graph.addVertex(v1);
    // graph.addVertex(v2);
    // graph.addVertex(v3);
    // graph.addVertex(v4);


    // graph.addEdge(v1, v2);
    // graph.addEdge(v1, v3);
    // graph.addEdge(v1, v4);
    // graph.addEdge(v2, v4);

    // graph.removeEdge(v1, v3);

    // graph.removeVertex(v3);
    // graph.addVertex('A');
    // graph.addVertex('B');
    // graph.addVertex('C');
    // graph.addVertex('D');
    // graph.addVertex('E');
    // graph.addVertex('F');

    // graph.addEdge('A', 'B')
    // graph.addEdge('A', 'E')
    // graph.addEdge('C', 'B')
    // graph.addEdge('C', 'D')
    // graph.addEdge('F', 'E')
    // graph.addEdge('F', 'D')
    // graph.addEdge('B', 'D')
    // graph.addEdge('E', 'D')

    // console.log(graph.defthFirstSearch('A'));
    // console.log(graph.depthFirstSearchRecursive('A'));

    graph.addVertex('S');
    graph.addVertex('P');
    graph.addVertex('U');
    graph.addVertex('X');
    graph.addVertex('Q');
    graph.addVertex('Y');
    graph.addVertex('V');
    graph.addVertex('R');
    graph.addVertex('W');
    graph.addVertex('T');

    graph.addEdge('S', 'P');
    graph.addEdge('S', 'U');

    graph.addEdge('P', 'X');
    graph.addEdge('U', 'X');

    graph.addEdge('P', 'Q');
    graph.addEdge('U', 'V');

    graph.addEdge('X', 'Q');
    graph.addEdge('X', 'Y');
    graph.addEdge('X', 'V');

    graph.addEdge('Q', 'R');
    graph.addEdge('Y', 'R');

    graph.addEdge('Y', 'W');
    graph.addEdge('V', 'W');

    graph.addEdge('R', 'T');
    graph.addEdge('W', 'T');

    console.log(graph.depthFirstSearch('S'));
    console.log(graph.breadthFirstSearch('S'));
}

main();