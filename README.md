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

Difficulty: ⭐⭐⭐ (3/5)

### Problem Description

**Challenge: Topological Sorting with Cycles**

Given a directed acyclic graph (DAG) with cycles, determine if it is possible to perform a valid topological sorting. If possible, output the sorted list of nodes; otherwise, indicate that a valid topological sort is impossible.

### Example Input/Output

**Input:**
```plaintext
Graph:
A -> B -> C -> D
A -> E -> F
G -> H
```

**Output:**
```plaintext
False (since a valid topological sort is impossible due to cycles)```

### Constraints

- The input graph can contain both directed edges and cycles.
- The number of nodes (n) and edges (e) are relatively small (e.g., n <= 100, e <= 500).
- The graph does not contain self-loops or multiple edges between the same pair of nodes.

### Most Efficient Solution

#### Approach: Detecting Cycles Using DFS

To determine if a valid topological sort is possible, we need to check for cycles in the graph. A DAG without cycles can always be topologically sorted. However, if the graph contains cycles, it cannot be sorted in a valid manner.

We will use Depth-First Search (DFS) to detect cycles. During DFS, if we encounter a node that has already been visited but not yet processed (i.e., not yet added to the recursion stack), it indicates a cycle.

Here is the optimal solution in Python:

```python
from collections import defaultdict

def validTopologicalSort(graph):
    # Step 1: Detecting Cycles using DFS
    def is_cyclic_util(node, visited, recursion_stack):
        visited[node] = True
        recursion_stack[node] = True
        
        for neighbor in graph[node]:
            if not visited[neighbor]:
                if is_cyclic_util(neighbor, visited, recursion_stack):
                    return True
            elif recursion_stack[neighbor]:
                # If neighbor is in recursion stack, then there is cycle.
                return True
        
        recursion_stack[node] = False
        return False
    
    # Step 2: Checking for Cycles
    visited = {node: False for node in graph}
    recursion_stack = {node: False for node in graph}
    
    for node in graph:
        if not visited[node]:
            if is_cyclic_util(node, visited, recursion_stack):
                return False
    
    return True

# Example usage:
graph = {
    'A': ['B', 'E'],
    'B': ['C'],
    'C': ['D'],
    'D': [],
    'E': ['F'],
    'F': [],
    'G': ['H']
}
print(validTopologicalSort(graph)) # Output: False

# Example without cycle (valid topological sort possible)
graph_without_cycle = {
    'A': ['B'],
    'B': ['C'],
    'C': ['D'],
    'D': []
}
print(validTopologicalSort(graph_without_cycle)) # Output: True
```

### Analysis of Complexity:

- **Time Complexity:** O(E + V), where E is the number of edges and V is the number of vertices. This is because we perform DFS traversal once over all nodes.
- **Space Complexity:** O(V), due to the recursion stack used during DFS.

### Difficulty Rating

This problem requires understanding how to detect cycles using DFS and understanding the implications of cycles on topological sorting. It is challenging enough to require careful consideration of graph traversal techniques but not so complex that it becomes overwhelming.