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

**Problem: "Cycle Detection in a Directed Graph"**

Given a directed graph `G(V, E)`, determine whether there is a cycle in the graph. The graph is represented as an adjacency list where each node is associated with a list of its neighbors.

### Constraints

- The graph is directed.
- The graph may have cycles.
- The graph is represented as an adjacency list.
- The input graph is connected.

### Example Input/Output

**Input:**
```
Adjacency list representation of the graph:
A -> B, C
B -> D
C -> A
D -> E
E -> F
F -> D
```

**Output:**
```
True (Cycle found: A -> B -> D -> E -> F -> D -> A)
```

### Detailed Explanation

To detect a cycle in a directed graph using DFS, we can employ the following approach:

1. **Vertex Color State**: Each vertex can be in one of three states:
   - White: Unvisited
   - Gray: Visiting (part of the current DFS path)
   - Black: Visited and processed

2. **Algorithm**:
   - Start at any arbitrary node.
   - Perform DFS traversal.
   - If we encounter a gray node (i.e., a node that is being visited but has not been fully processed), it means that we have found a cycle.

### Most Efficient Solution

```python
from typing import List, Dict

def has_cycle(graph: Dict[str, List[str]]) -> bool:
    # Initialize vertex color states
    colors = {}

    def dfs(node: str) -> bool:
        # Mark current node as gray (being visited)
        colors[node] = 1  # 1 represents gray

        # Iterate through neighbors of the current node
        for neighbor in graph[node]:
            if neighbor not in colors:
                # If neighbor is white (unvisited), continue DFS exploration
                if dfs(neighbor):
                    return True
            
            # If neighbor is gray (being visited), it means we've found a cycle
            elif colors[neighbor] == 1:
                return True
        
        # Mark current node as black (visited)
        colors[node] = 2  # 2 represents black
        return False
    
    # Start DFS traversal from an arbitrary node
    start_node = next(iter(graph))
    
    # Perform DFS traversal
    return dfs(start_node)

# Example usage:
graph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['A'],
    'D': ['E'],
    'E': ['F'],
    'F': ['D']
}

print(has_cycle(graph))  # Output: True
```

### Analysis of Complexity

- **Time Complexity**: The time complexity of this algorithm is O(V + E), where V is the number of vertices and E is the number of edges. This is because each vertex and edge are visited once during the DFS traversal.
- **Space Complexity**: The space complexity is O(V), as we need to store the color state for each vertex.

### Why This Approach is Optimal

This approach is optimal because it uses a standard DFS traversal technique with vertex coloring to detect cycles efficiently. It ensures that every edge and vertex are visited once, thereby achieving both time and space efficiency.

### Difficulty Rating

This problem requires understanding of basic graph traversal algorithms like DFS and vertex coloring techniques to detect cycles. It is neither too easy nor too complex but rather a good challenge for intermediate-level programmers who are familiar with graph algorithms.