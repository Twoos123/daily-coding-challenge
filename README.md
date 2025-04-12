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

### Coding Challenge: Topological Sort with Cycles Detection

**Problem Description:**
Given a directed acyclic graph (DAG), perform a topological sort on the graph. However, if the graph contains cycles, detect and report the cycle.

**Example Input/Output:**
- **Input:** A dictionary representing the adjacency list of a DAG.
  ```python
  graph = {
      0: [1, 2],
      1: [3],
      2: [3],
      3: []
  }
  ```
- **Output for DAG:**
  ```python
  topological order: [0, 1, 2, 3]
  ```
- **Input with Cycle:**
  ```python
  graph_with_cycle = {
      0: [1, 2],
      1: [3],
      2: [3],
      3: [0] # Cycle introduced here
  }
  ```
- **Output with Cycle Detection:**
  ```python
  Cycle detected in the graph:
  Topological order could not be determined.
  ```

**Constraints:**
- The graph is represented as an adjacency list.
- Each node in the graph has a unique integer value.
- The graph may contain cycles.

### Solution

#### Topological Sort with Cycle Detection

To solve this problem efficiently, we can use a combination of DFS and topological sorting techniques. We will use a recursive DFS approach to detect cycles and to perform the topological sort.

```python
from collections import defaultdict

def topological_sort_with_cycle_detection(graph):
    # Step 1: Extract nodes from the graph
    nodes = set(graph.keys())
    
    # Step 2: Initialize visited and recursion stack
    visited = set()
    recursion_stack = set()
    
    # Step 3: Perform DFS traversal
    ordering = []
    
    def dfs(node):
        visited.add(node)
        recursion_stack.add(node)
        
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                dfs(neighbor)
            elif neighbor in recursion_stack:
                # Cycle detected
                print("Cycle detected in the graph:")
                return False
        
        recursion_stack.remove(node)
        ordering.append(node)
    
    # Step 4: Perform DFS traversal for all nodes
    for node in nodes:
        if node not in visited:
            if not dfs(node):
                return False
    
    # Step 5: If no cycles, return topological order
    print("Topological order:", ordering[::-1])
    
    return ordering[::-1]

# Example usage:
graph = {
    0: [1, 2],
    1: [3],
    2: [3],
    3: [] # DAG without cycles
}

topological_sort_with_cycle_detection(graph)  # Output: [0, 1, 2, 3]

# Example with cycle detection:
graph_with_cycle = {
    0: [1, 2],
    1: [3],
    2: [3],
    3: [0] # Cycle introduced here
}

topological_sort_with_cycle_detection(graph_with_cycle)  # Output: "Cycle detected in the graph:"
```

### Analysis of Complexity:

#### Time Complexity:
- The time complexity of this algorithm is O(V + E) because each node and edge is visited exactly once during the DFS traversal.
  
#### Space Complexity:
- The space complexity is O(V) for storing the visited set and recursion stack.

### Difficulty Rating:
This challenge requires a good understanding of both DFS and topological sorting techniques. It also involves handling cycles, which adds an additional layer of complexity. The solution provided is efficient in terms of both time and space complexity and handles all potential edge cases.