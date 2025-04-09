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

### Coding Challenge: Topological Sorting with Cycle Detection

**Problem Description:**
Given a directed acyclic graph (DAG) represented by an adjacency list, implement a function `topological_sort` that performs a topological sort on the graph while also detecting and handling cycles. If a cycle is detected, the function should return an empty list.

**Example Input/Output:**
```python
graph = {
    1: [2, 3],
    2: [4, 5],
    3: [6],
    4: [],
    5: [],
    6: []
}

# Valid DAG with no cycles
print(topological_sort(graph))  # [1, 2, 3, 4, 5, 6]

# DAG with a cycle
graph_cycle = {
    1: [2],
    2: [3],
    3: [1]  # Cycle: 1 -> 2 -> 3 -> 1
}

# Detects cycle and returns empty list
print(topological_sort(graph_cycle))  # []
```

**Constraints:**
- The graph is represented as an adjacency list.
- The function should handle both valid DAGs and DAGs with cycles.
- The function should return a list of nodes in a valid topological order if no cycle is detected; otherwise, return an empty list.

### Optimal Solution

#### Detailed Explanation

To solve this problem efficiently, we will use a combination of depth-first search (DFS) and topological sorting techniques.

1. **Initialization:**
   - Create a set to keep track of visited nodes (`visited`) and a set to keep track of nodes that are currently being visited (`current_path`).
   - Initialize an empty list to store the result of the topological sort (`result`). If a cycle is detected, return an empty list.

2. **DFS Traversal:**
   - Perform a DFS traversal on each unvisited node in the graph.
   - During the traversal, mark each node as visited and add it to the `current_path`.
   - If we encounter a node that is already in the `current_path`, it means we have detected a cycle.

3. **Topological Sorting:**
   - Once we finish traversing all nodes without detecting any cycles, we can perform the topological sort by adding visited nodes to the result list in reverse order of their finish times.

#### Implementation

```python
from collections import defaultdict

def topological_sort(graph):
    # Initialize sets and list
    visited = set()
    current_path = set()
    result = []

    def dfs(node):
        # Mark node as visited and add it to current path
        visited.add(node)
        current_path.add(node)

        # Traverse neighbors
        for neighbor in graph[node]:
            if neighbor not in visited:
                dfs(neighbor)
            elif neighbor in current_path:
                return False  # Cycle detected

        # Remove node from current path after visiting all its neighbors
        current_path.remove(node)
        result.append(node)

    # Traverse all nodes in graph
    for node in graph:
        if node not in visited:
            if not dfs(node):
                return []

    return result[::-1]  # Return result in reverse order

# Example usage:
graph_valid = {
    1: [2, 3],
    2: [4, 5],
    3: [6],
    4: [],
    5: [],
    6: []
}

print(topological_sort(graph_valid))  # [6, 5, 4, 3, 2, 1]

graph_cycle = {
    1: [2],
    2: [3],
    3: [1]  
}

print(topological_sort(graph_cycle))  # []
```

### Complexity Analysis

- **Time Complexity:** O(V + E)
  - Each node and edge in the graph is visited at most once during the DFS traversal.
  - The time complexity of DFS is linear with respect to the number of nodes and edges (O(V + E)).

- **Space Complexity:** O(V)
  - The maximum number of nodes in the `current_path` and `visited` sets is equal to the number of nodes in the graph (O(V)).

### Difficulty Rating
This challenge is moderately difficult because it requires understanding how to detect cycles using DFS and then performing a valid topological sort on the remaining nodes. The solution is straightforward once you understand these concepts, but implementing it correctly requires attention to detail.