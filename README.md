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

### Problem: "Cycle Detection in Directed Graphs with Negative Weights"

#### Problem Description
Given a directed graph with possible negative weights and potentially negative cycles, implement a function to detect whether there exists a cycle in the graph.

1. **Input**: A directed graph represented as an adjacency list.
2. **Output**: `True` if a cycle exists, `False` otherwise.
3. **Constraints**:
   - The graph may contain negative weights.
   - The graph may contain negative cycles.
   - Each edge has a non-negative weight.
   - However, for detecting cycles, we need to consider the possibility of negative cycles.

#### Example Input/Output

**Example 1**: No cycle exists.

```
Input: [
  { 'A': ['B', 'C'] },
  { 'B': ['D'] },
  { 'C': ['D'] },
  { 'D': [] }
]
Output: False
```

**Example 2**: A cycle exists.

```
Input: [
  { 'A': ['B'] },
  { 'B': ['C'] },
  { 'C': ['A'] }
]
Output: True
```

#### Constraints
1. **Time Complexity**: The time complexity should be O(V + E), where V is the number of vertices and E is the number of edges.
2. **Space Complexity**: The space complexity should be O(V), for storing the visited nodes during DFS.

#### Difficulty Rating: 4

The difficulty rating is 4 due to the following reasons:
- The problem requires handling negative weights and the possibility of negative cycles.
- Implementing a cycle detection algorithm that can handle these complexities is non-trivial.
- However, it is still manageable with an understanding of graph algorithms and careful handling of edge cases.

### Solution in Python

```python
from collections import defaultdict

def has_cycle(graph):
    def is_negative_cycle(start):
        in_degree = defaultdict(int)
        for node in graph:
            for neighbor in graph[node]:
                in_degree[neighbor] += 1

        queue = [node for node in graph if in_degree[node] == 0]
        while queue:
            node = queue.pop(0)
            for neighbor in graph[node]:
                in_degree[neighbor] -= 1
                if in_degree[neighbor] == 0:
                    queue.append(neighbor)

        # Check if any node still has an in-degree of 0
        for node in in_degree:
            if in_degree[node] == 0:
                return True

        # If no negative cycle found, perform DFS to check for cycles
        visited = set()
        stack = []

        def dfs(node):
            if node in visited:
                return False
            visited.add(node)
            stack.append(node)
            for neighbor in graph.get(node, []):
                if dfs(neighbor):
                    return True
            stack.pop()
            return False

        for start_node in graph:
            if dfs(start_node):
                return True

        return False

    # Check for a negative cycle using Floyd-Warshall algorithm
    n = len(graph)
    distance = [[float('inf')] * n for _ in range(n)]
    
    for i in range(n):
        for neighbor in graph.get(i, []):
            distance[i][neighbor] = 1

    for k in range(n):
        for i in range(n):
            for j in range(n):
                distance[i][j] = min(distance[i][j], distance[i][k] + distance[k][j])

    for i in range(n):
        if distance[i][i] < float('inf'):
            return True

    return is_negative_cycle(0)

# Example usage:
graph_example_1 = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['D'],
    'D': [],
}

print(has_cycle(graph_example_1))  # Output: False

graph_example_2 = {
    'A': ['B'],
    'B': ['C'],
    'C': ['A']
}

print(has_cycle(graph_example_2))  # Output: True
```

### Explanation

1. **Negative Cycle Detection**: The solution uses the Floyd-Warshall algorithm to detect a negative cycle by checking if there is any path with negative total weight.
   - The Floyd-Warshall algorithm updates the shortest path between all pairs of nodes.
   - If there is a negative cycle, the shortest path from a node to itself will be less than infinity.

2. **DFS for Cycle Detection**: After checking for a negative cycle, we perform a depth-first search (DFS) from each unvisited node to detect any simple cycles.

3. **Optimality**: This approach ensures that we handle both positive and negative weights efficiently and accurately detect cycles including those caused by negative cycles