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

### Challenge: "Detecting Cycles in a Directed Graph"

**Problem Description:**
Given a directed graph, implement a function to detect whether the graph contains any cycles. The input is represented as an adjacency list where each key represents a node and its corresponding value is a list of nodes that it directly points to.

**Example Input/Output:**
```
Input:
{
    'A': ['B'],
    'B': ['C'],
    'C': ['A']
}

Output:
True

Input:
{
    'A': ['B'],
    'B': ['C'],
    'C': ['D']
}

Output:
False
```

**Constraints:**
- The graph may contain multiple edges between any two nodes.
- The graph may contain self-loops (i.e., a node pointing to itself).
- The number of nodes and edges in the graph is finite and can be reasonably large for practical purposes.

### Most Efficient Solution in Python

#### Using Depth-First Search (DFS)

We will use the DFS approach with a set to keep track of visited nodes and another set to keep track of nodes currently being visited (`stack`). If we encounter a node that is already in the `stack`, it means we have detected a cycle.

```python
from collections import defaultdict

def has_cycle(graph):
    visited = set()
    stack = set()

    def dfs(node):
        visited.add(node)
        stack.add(node)
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs(neighbor):
                    return True
            elif neighbor in stack:
                return True
        
        stack.remove(node)
        return False

    for node in graph:
        if node not in visited:
            if dfs(node):
                return True
    
    return False

# Example usage:
graph = {
    'A': ['B'],
    'B': ['C'],
    'C': ['A']
}

print(has_cycle(graph))  # Output: True

graph = {
    'A': ['B'],
    'B': ['C'],
    'C': ['D']
}

print(has_cycle(graph))  # Output: False
```

#### Detailed Explanation of the Algorithm:
1. **Initialization**: We initialize two sets, `visited` and `stack`, to keep track of visited nodes and nodes currently being visited respectively.
2. **DFS Function**: The `dfs` function takes a node as input and performs a depth-first traversal starting from that node.
   - It marks the current node as visited and adds it to the stack.
   - It iterates over all neighbors of the current node.
   - If a neighbor has not been visited before, it recursively calls the `dfs` function for that neighbor.
   - If a neighbor is already in the stack, it means we have detected a cycle and returns `True`.
   - After visiting all unvisited neighbors, it removes the current node from the stack.
3. **Main Function**: The main function iterates over all nodes in the graph and calls the `dfs` function for each unvisited node. If any call to `dfs` returns `True`, it means the graph contains a cycle and returns `True`.

#### Time and Space Complexity:
- **Time Complexity**: The time complexity is O(V + E), where V is the number of vertices (nodes) and E is the number of edges. This is because each node and each edge is visited exactly once.
- **Space Complexity**: The space complexity is O(V) due to the use of sets (`visited` and `stack`) which can store up to V elements in the worst case.

This approach is optimal because it only requires a single pass through the graph and uses constant space for each recursive call, making it efficient both in terms of time and space usage.