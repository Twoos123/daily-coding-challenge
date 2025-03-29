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

### Coding Challenge: "Topological Sorting with Cycle Detection"

#### Problem Description

Given a directed acyclic graph (DAG), perform a topological sort and detect whether the graph contains a cycle. If a cycle is found, return `False`; otherwise, return the topologically sorted order of nodes.

#### Example Input/Output

Input:
```python
graph = {
    1: [2, 3],
    2: [4],
    3: [5, 6],
    4: [],
    5: [],
    6: []
}
```

Output:
- `True` and `[1, 2, 3, 4, 5, 6]` if the graph is a DAG.
- `False` if the graph contains a cycle.

#### Constraints

- The input graph is represented as an adjacency list.
- The number of nodes (`V`) and edges (`E`) are relatively small (e.g., V <= 100, E <= 1000).
- The challenge requires both topological sorting and cycle detection.

#### Most Efficient Solution

To solve this challenge efficiently, we can use a combination of techniques:
1. **Detecting Cycles:** Use a recursive DFS to detect cycles.
2. **Topological Sorting:** Perform DFS in a way that we keep track of visited nodes and their finishing times to maintain a valid topological order.

Here is the most efficient solution in Python:

```python
from collections import defaultdict, deque

def has_cycle(graph):
    # Initialize the DFS stack
    stack = []
    
    def dfs(node, parent=None):
        # Mark the node as visited
        visited.add(node)
        
        # Add the node to the recursion stack
        recursion_stack.add(node)
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs(neighbor, node):
                    return True
            elif neighbor in recursion_stack:
                return True
        
        # Remove the node from the recursion stack
        recursion_stack.remove(node)
        
        return False
    
    visited = set()
    recursion_stack = set()
    
    for node in graph:
        if node not in visited:
            if dfs(node):
                return False
    
    return True

def topological_sort(graph):
    if not has_cycle(graph):
        stack = deque()
        visited = set()
        
        def dfs(node):
            visited.add(node)
            
            for neighbor in graph[node]:
                if neighbor not in visited:
                    dfs(neighbor)
            
            stack.appendleft(node)
        
        for node in graph:
            if node not in visited:
                dfs(node)
        
        return list(stack)
    
    return False

# Example usage
graph = {
    1: [2, 3],
    2: [4],
    3: [5, 6],
    4: [],
    5: [],
    6: []
}

result = topological_sort(graph)
if result:
    print("Topologically sorted order:", result)
else:
    print("Graph contains a cycle")
```

#### Analysis

- **Time Complexity:** The overall time complexity is O(V + E) due to the following reasons:
  - The `has_cycle` function uses DFS with a time complexity of O(V + E).
  - The `topological_sort` function also uses DFS and maintains the same time complexity because it visits each node and edge exactly once.
  
- **Space Complexity:** The space complexity is O(V) because:
  - The `visited` set and `recursion_stack` set each use O(V) space.
  
#### Explanation

- **Cycle Detection:** The `has_cycle` function uses a recursive DFS to detect cycles. It keeps track of visited nodes and those currently in the recursion stack to identify any back edges that indicate a cycle.
  
- **Topological Sorting:** The `topological_sort` function performs DFS while keeping track of visited nodes and utilizes a deque to maintain the correct order of nodes. It returns `False` if a cycle is detected by `has_cycle`.

#### Trade-offs

There are no significant trade-offs between time and space complexity in this solution. Both functions run in linear time relative to the number of nodes and edges, and they use linear space relative to the number of nodes.

### Difficulty Rating

This problem combines both topological sorting and cycle detection, making it moderately challenging. It requires understanding how to use DFS effectively for both tasks and maintaining proper data structures to keep track of visited nodes and cycles.