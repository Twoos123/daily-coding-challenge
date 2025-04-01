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

**Problem Description:**

Given a directed acyclic graph (DAG) with n nodes and m edges, determine if it is possible to assign a unique color to each node such that no two adjacent nodes have the same color. This is known as a **coloring** problem in graph theory. The additional constraint is that the coloring should be done in such a way that the color of each node is determined based on its **in-degree**.

**Example Input/Output:**

Input:
```
n = 4
edges = [(0, 1), (1, 2), (2, 3), (3, 0)]
```
Output:
```
True
```

**Constraints:**

- The graph is a directed acyclic graph (DAG).
- The number of nodes `n` is at most 10,000.
- The number of edges `m` is at most 20,000.
- All edges have non-negative weights.

**Solution:**

To solve this problem efficiently, we can use a combination of DFS and BFS. Here’s an optimal approach:

1. **Initialization:**
   - Create a lookup table `color` to store the color assigned to each node.
   - Initialize `color` dictionary with default color as -1 (unassigned).

2. **DFS Traversal:**
   - Perform DFS traversal from each node starting from the nodes with in-degree 0.
   - During DFS, assign the opposite color to each node compared to its parent node.
   - If a node already has a color assigned and it conflicts with the new assignment, return False.

3. **BFS Verification:**
   - Once all nodes have been assigned colors using DFS, perform BFS to verify that no two adjacent nodes have the same color.
   - If any conflict is found during BFS traversal, return False.

Here is the Python implementation:

```python
from collections import deque

def is_valid_coloring(graph):
    # Initialize color assignment with default value -1
    color = {node: -1 for node in range(len(graph))}
    
    # Perform DFS from nodes with in-degree 0
    def dfs(node):
        if color[node] != -1:
            return color[node]
        color[node] = 0  # Assign first color (0)
        for neighbor in graph[node]:
            if color[neighbor] == color[node]:
                return False  # Conflict found
            if color[neighbor] == -1:
                color[neighbor] = 1 - color[node]  # Assign opposite color
                visited.add(neighbor)
                if not dfs(neighbor):
                    return False
        return True
    
    visited = set()
    
    # Start DFS from nodes with in-degree 0
    for node in range(len(graph)):
        if all(neighbor != node for neighbor in graph[node]):
            visited.add(node)
            if not dfs(node):
                return False
    
    # Perform BFS to verify no two adjacent nodes have same color
    def bfs():
        queue = deque([node for node in visited])
        
        while queue:
            current_node = queue.popleft()
            for neighbor in graph[current_node]:
                if color[current_node] == color[neighbor]:
                    return False  # Conflict found during BFS
        
        return True
    
    return bfs()

# Example usage:
n = 4
edges = [(0, 1), (1, 2), (2, 3), (3, 0)]
graph = [[] for _ in range(n)]
for u,v in edges:
    graph[u].append(v)

print(is_valid_coloring(graph))
```

### Complexity Analysis:

- **Time Complexity:** The overall time complexity is dominated by the DFS traversal which runs in O(V + E) where V is the number of nodes and E is the number of edges. The BFS verification step also runs in O(V + E). Therefore, the overall time complexity is O(V + E).

- **Space Complexity:** We use O(V) space for storing color assignments and visited set. The recursion stack used by DFS also contributes O(V) space complexity.

### Optimality Explanation:

The chosen approach ensures that each node is assigned a unique color based on its in-degree efficiently. The use of DFS for initial coloring avoids conflicts by assigning opposite colors when necessary. The subsequent BFS verification step ensures that no conflicts arise between adjacent nodes, making it an optimal solution for this problem.

### Trade-off Explanation:

There are no significant trade-offs between time and space complexity in this approach. The algorithm’s efficiency stems from its ability to leverage both DFS and BFS techniques effectively without introducing unnecessary complexity or optimizations that might increase space requirements significantly.

Thus, this problem solution is well-suited for practical implementation with clear explanations of both its correctness and efficiency characteristics.