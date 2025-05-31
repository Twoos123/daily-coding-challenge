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

****

### Problem Description

**Cycle Detection in Directed Graph**

Given a directed graph, detect whether it contains a cycle using Depth-First Search (DFS).

### Example Input/Output

**Input:**
```python
graph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['D'],
    'D': ['C']
}
```

**Output:**
```python
True  # The graph contains a cycle.
```

### Constraints

1. The graph is represented as an adjacency list.
2. The graph can contain both directed and undirected edges, but the problem focuses on directed graphs.

### The Most Efficient Solution in Python

#### Detailed Explanation

To detect a cycle in a directed graph using DFS, we can use a recursive approach with a flag to track whether we are currently visiting a node or if we have already visited it. If we encounter a node that we are currently visiting, it indicates a cycle.

```python
def is_cyclic(graph):
    visited = set()
    recursion_stack = set()

    def dfs(node):
        visited.add(node)
        recursion_stack.add(node)

        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs(neighbor):
                    return True
            elif neighbor in recursion_stack:
                return True

        recursion_stack.remove(node)
        return False

    for node in graph:
        if node not in visited:
            if dfs(node):
                return True

    return False

# Example usage:
graph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['D'],
    'D': ['C']
}

print(is_cyclic(graph))  # Output: True
```

#### Analysis of Complexity

- **Time Complexity:** O(V + E), where V is the number of vertices (nodes) and E is the number of edges. This is because each node and edge is visited once.
- **Space Complexity:** O(V), which is used for storing the visited and recursion stack sets.

#### Why This Approach is Optimal

This approach is optimal because it leverages the properties of DFS to efficiently detect cycles in a graph. It avoids unnecessary traversals by keeping track of visited nodes and nodes currently being visited, thus ensuring that each edge is visited only once.

#### Trade-offs

There are no significant trade-offs between time and space complexity in this approach. The time complexity of O(V + E) ensures that the algorithm's running time scales linearly with the size of the graph, while the space complexity of O(V) ensures that the memory usage remains reasonable even for large graphs.

### Conclusion

This problem requires an understanding of DFS and its application in detecting cycles within graphs. The provided solution is efficient, scalable, and easy to implement, making it suitable for both beginners and intermediate programmers.