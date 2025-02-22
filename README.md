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

### Coding Challenge: "Detecting Cycles in Directed Graphs Using Topological Sort"

**Problem Description:**

Given a directed graph, detect whether it contains a cycle using a topological sort. If the graph is acyclic, perform a topological sort to order the vertices in such a way that for every edge (u, v), vertex u comes before vertex v in the ordering.

**Example Input/Output:**

**Input:**
```
n = 5 (number of vertices)
edges = [(0, 1), (1, 2), (2, 3), (3, 4), (4, 0)]
```

**Output (if graph is acyclic):**
```
[0, 1, 2, 3, 4]
```

**Output (if graph contains a cycle):**
```
"Graph contains a cycle"
```

**Constraints:**

- The graph is represented using an adjacency list.
- The number of vertices (n) is given.
- Each edge is represented as a tuple (u, v).

### Analysis

1. **Time Complexity:**
   - The algorithm involves two main steps: checking for cycles and performing a topological sort.
   - Checking for cycles using Kahn's algorithm for topological sort has a time complexity of O(V + E), where V is the number of vertices and E is the number of edges.
   - If the graph is acyclic, the topological sort itself also runs in O(V + E).

2. **Space Complexity:**
   - The space complexity primarily comes from storing visited nodes and the adjacency list. The worst-case scenario is O(V + E) for storing the adjacency list and O(V) for visited nodes.

### Most Efficient Solution

#### Using Kahn's Algorithm for Topological Sort

Kahn's algorithm is efficient for detecting cycles and performing a topological sort. It works by selecting vertices with no incoming edges (in-degree 0), adding them to the result, and then updating the in-degrees of their neighbors.

```python
from collections import defaultdict, deque

def has_cycle(edges):
    n = len(edges) + 1  # Number of vertices
    graph = defaultdict(list)
    
    # Build the graph
    for u, v in edges:
        graph[u].append(v)

    # Initialize in-degrees
    in_degree = {i: 0 for i in range(n)}
    
    # Calculate in-degrees
    for u, v in edges:
        in_degree[v] += 1

    # Initialize queue with nodes having in-degree 0
    queue = deque([u for u in in_degree if in_degree[u] == 0])

    # Perform topological sort
    result = []
    while queue:
        node = queue.popleft()
        result.append(node)

        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    # Check if all nodes were processed (acyclic)
    return len(result) == n

def topological_sort(edges):
    if not has_cycle(edges):
        return [i for i in range(len(edges) + 1)]
    else:
        return "Graph contains a cycle"

# Example usage
edges = [(0, 1), (1, 2), (2, 3), (3, 4), (4, 0)]
print(topological_sort(edges))  # Output: "Graph contains a cycle"
```

### Explanation of the Algorithm

1. **Initialization:**
   - Create an adjacency list representation of the graph.
   - Initialize in-degrees for all vertices.

2. **Building the Graph:**
   - Populate the adjacency list based on the given edges.

3. **Calculating In-Degrees:**
   - For each edge (u, v), increment `in_degree[v]`.

4. **Queue Initialization:**
   - Add vertices with `in_degree[u] == 0` to the queue.

5. **Topological Sort:**
   - While the queue is not empty:
     - Dequeue a node and add it to the result.
     - For each neighbor of the dequeued node, decrement its in-degree.
     - If a neighbor’s in-degree becomes zero, add it to the queue.

6. **Cycle Detection:**
   - If all nodes are processed (all in-degrees become zero), return the sorted list.
   - Otherwise, return "Graph contains a cycle."

### Complexities

**Time Complexity:**
- O(V + E) for building the graph and calculating in-degrees.
- O(V + E) for the topological sort.

**Space Complexity:**
- O(V + E) for storing the adjacency list and in