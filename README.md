# Daily Coding Challenge Generator 🚀

An AI-powered platform that generates unique coding challenges daily, helping developers enhance their problem-solving skills through consistent practice.

## Features

- 🤖 **AI-Powered**: Challenges are generated using advanced AI to ensure uniqueness and relevance
- 🕒 **Daily Updates**: New challenges are automatically generated and committed at 12 AM EST
- ⭐ **Difficulty Ratings**: Each challenge includes a difficulty rating from 1-5
- 💡 **Complete Solutions**: Every challenge comes with a detailed Python solution

## Built With

- 🔥 **React + Vite**: For a fast and modern development experience
- 🔷 **TypeScript**: For type-safe code
- 🛠️ **Shadcn/UI**: For pre-built, customizable components
- 🔌 **Supabase**: For backend functionality and database
- 🤖 **Perplexity API**: For AI-powered challenge generation

## Today's Challenge

Difficulty: ⭐⭐⭐⭐ (4/5)

****

### Problem Description

Given a directed acyclic graph (DAG) represented as an adjacency list, implement a function to find all strongly connected components (SCCs) using Depth-First Search (DFS). A strongly connected component is a subgraph where there is a path from every node to every other node in the subgraph.

### Constraints

- **Input**: An adjacency list representing a DAG.
- **Output**: A list of strongly connected components.
- **Assumptions**: The input graph is a DAG.

### Example Input/Output

**Input**:
```python
graph = {
    0: [1, 2],
    1: [3],
    2: [3],
    3: [],
    4: [5],
    5: []
}
```

**Output**:
```python
[[0, 1, 2], [3], [4, 5]]
```

### Solution

The most optimal approach to solve this problem involves using Tarjan's algorithm, which is a well-known algorithm for finding strongly connected components in a directed graph. This algorithm uses DFS to perform a depth-first traversal of the graph and keeps track of the lowest reachable ancestor (LCA) for each node to identify SCCs.

#### Implementation

```python
from collections import defaultdict

class DFS:
    def __init__(self):
        self.stack = []
        self.index = 0
        self.lowlinks = {}
        self.indexstack = defaultdict(list)

    def strong_connect(self, graph, node):
        self.lowlinks[node] = self.index
        self.indexstack[node].append(node)
        self.stack.append(node)
        
        for neighbor in graph[node]:
            if neighbor not in self.lowlinks:
                self.strong_connect(graph, neighbor)
            elif neighbor in self.stack:
                lowlink = self.lowlinks[neighbor]
                self.index = min(self.index, lowlink)
        
        while self.stack and self.stack[-1] != node:
            w = self.stack.pop()
            self.indexstack[w].append(node)
        
        if self.stack[-1] == node:
            self.component = self.component.append(self.indexstack[node])
            self.component[-1].sort()

# Usage
graph = {
    0: [1, 2],
    1: [3],
    2: [3],
    3: [],
    4: [5],
    5: []
}

dfs = DFS()
dfs.component = []
for node in graph:
    if node not in dfs.lowlinks:
        dfs.strong_connect(graph, node)

print(dfs.component)
```

### Analysis of Complexity

- **Time Complexity**: The time complexity of Tarjan's algorithm is O(V + E), where V is the number of vertices and E is the number of edges. This is because each node and edge are visited exactly once.
  
- **Space Complexity**: The space complexity is also O(V), since we need to store the DFS traversal stack and the lowlink values for each node.

### Explanation

1. **Initialization**:
   - Initialize the `lowlinks` dictionary to keep track of each node's lowest reachable ancestor.
   - Initialize an index counter to keep track of unique indices for each SCC.
   - Create an `indexstack` to store nodes in the current SCC.

2. **DFS Traversal**:
   - Perform DFS starting from each unvisited node.
   - For each unvisited neighbor, recursively call `strong_connect`.
   - If a neighbor is already visited but not yet processed (i.e., in the stack), update the lowest reachable ancestor if necessary.

3. **Component Formation**:
   - Pop nodes from the stack until we reach the current node being processed.
   - Group these popped nodes into an SCC by appending them to `indexstack[node]`.
   - Add this group to `self.component`.

This approach ensures that we correctly identify all strongly connected components in the given DAG.