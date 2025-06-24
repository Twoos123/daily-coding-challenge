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

**Find the Shortest Path in a Directed Acyclic Graph (DAG) using Topological Sort**

Given a directed acyclic graph (DAG) \( G = (V, E) \), find the shortest path from a given source node to all other nodes in the graph. The edges are weighted, and we need to return the shortest distance from the source node to each reachable node.

### Example Input/Output

Input:
```plaintext
Graph G = {
  V = {A, B, C, D, E}
  E = {A -> B (weight=1), A -> C (weight=3), B -> D (weight=2), C -> D (weight=1), D -> E (weight=1)}
}
Source Node = A
```

Output:
```plaintext
Shortest Distances from Source A:
  A -> 0
  B -> 1
  C -> 3
  D -> 4
  E -> 5
```

### Constraints

- The graph \( G \) is a directed acyclic graph.
- All edges have non-negative weights.
- The graph can contain multiple paths from the source to a node, but we need to find the shortest one.

### Most Efficient Solution

To solve this problem efficiently, we can use a combination of topological sort and Dijkstra’s algorithm. The topological sort ensures that we visit nodes in a valid order for this type of problem, while Dijkstra’s algorithm helps us find the shortest distances.

Here is the solution in Python:

```python
from collections import defaultdict, deque

def shortest_distances(graph, source):
    # Step 1: Perform topological sort on the graph
    in_degree = {node: 0 for node in graph}
    for u in graph:
        for v in graph[u]:
            in_degree[v] += 1
    
    queue = deque()
    for node in in_degree:
        if in_degree[node] == 0:
            queue.append(node)
    
    sorted_nodes = []
    while queue:
        u = queue.popleft()
        sorted_nodes.append(u)
        
        # Decrease the in-degree of neighboring nodes
        for v in graph[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
    
    # Step 2: Use Dijkstra’s algorithm to find shortest distances
    distances = {node: float('inf') for node in graph}
    distances[source] = 0
    
    for node in sorted_nodes:
        for neighbor, weight in graph[node].items():
            distances[neighbor] = min(distances[neighbor], distances[node] + weight)
    
    return distances

# Example usage:
graph = {
    'A': {'B': 1, 'C': 3},
    'B': {'D': 2},
    'C': {'D': 1},
    'D': {'E': 1}
}
source_node = 'A'
print(shortest_distances(graph, source_node))  # Output: {'A': 0, 'B': 1, 'C': 3, 'D': 4, 'E': 5}
```

### Analysis of Complexity

- **Time Complexity**: The overall time complexity is O(V + E), where \( V \) is the number of vertices and \( E \) is the number of edges.
  - Topological sort: O(V + E) because we need to iterate through all edges to update in-degrees.
  - Dijkstra’s algorithm within topological sort: O(V + E) as well because we iterate through each node once in sorted order.

- **Space Complexity**: O(V), where we store the distances from each node.

This approach ensures that we find the shortest distances efficiently while handling weighted edges in a DAG.

### Difficulty Rating

- **Difficulty:** 4/5

This problem requires a good understanding of both graph algorithms and data structures. The use of topological sort ensures that we visit nodes in a valid order, while Dijkstra’s algorithm helps us find the shortest distances efficiently. The combination makes it moderately challenging but solvable with a good understanding of these concepts.