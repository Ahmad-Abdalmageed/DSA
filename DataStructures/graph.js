class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(key) {
        if (!this.adjacencyList[key]) {
            this.adjacencyList[key] = []
        }
    }

    addEdge(v1, v2) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return;
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return;
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1)
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return;
        this.adjacencyList[vertex].forEach((edge) => { this.removeEdge(vertex, edge) });
    }


    dfsRecursive(vertex) {
        if (!this.adjacencyList[vertex]) return;
        const visited = {};
        const results = [];

        function dfs(vertex, list) {
            if (!list[vertex]) return;
            results.push(vertex);
            visited[vertex] = true;
            list[vertex].forEach((v) => {
                if (!visited[v]) {
                    dfs(v, list);
                }
            })
        }
        dfs(vertex, this.adjacencyList);
        return results;
    }

    dfsIterative(vertex) {
        if (!this.adjacencyList[vertex]) return;
        const stack = [vertex];
        const results = [];
        const visited = { [vertex]: true };

        while (stack.length) {
            const currentVertex = stack.pop();
            results.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((v) => {
                if (!visited[v]) {
                    visited[v] = true;
                    stack.push(v);
                }
            });

        }

        return results;
    }

    bfsIterative(vertex) {
        if (!this.adjacencyList[vertex]) return;
        const queue = [];
        const results = [];
        const visited = { [vertex]: true };

        queue.push(vertex);
        while (queue.length) {
            const currentVertex = queue.shift();
            results.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((v) => {
                if (!visited[v]) {
                    visited[v] = true;
                    queue.push(v);
                }
            })

        }

        return results;
    }
}


function main() {
    const g = new Graph();
    g.addVertex('A');
    g.addVertex('B');
    g.addVertex('C');
    g.addVertex('D');
    g.addVertex('E');
    g.addVertex('F');

    g.addEdge('A', 'B');
    g.addEdge('A', 'C');
    g.addEdge('B', 'D');
    g.addEdge('C', 'E');
    g.addEdge('D', 'E');
    g.addEdge('D', 'F');
    g.addEdge('E', 'F');

    console.log(g.dfsRecursive('A'));
    console.log(g.dfsIterative('A'));
    console.log(g.bfsIterative('A'));
    console.log(g);
}

main();