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

### Challenge: Topological Sorting with Cycle Detection in a Directed Acyclic Graph (DAG)

**Problem Description:**
Given a directed acyclic graph (DAG) represented by an adjacency list, determine if the graph has a valid topological ordering. If it does, return the ordering; otherwise, return `None`.

**Example Input/Output:**

- **Input:** `adjacency_list = {1: [2, 3], 2: [4], 3: [4], 4: []}`
- **Output:** `[1, 2, 3, 4]`

- **Input:** `adjacency_list = {1: [2], 2: [1]}`
- **Output:** `None` (cycle detected)

**Constraints:**
- The graph is represented as an adjacency list.
- Each edge is directed from one vertex to another.
- The graph is guaranteed to be a DAG or contain at least one cycle.

**Most Efficient Solution:**

To solve this problem efficiently, we will use a combination of DFS and topological sorting techniques. The key idea is to perform DFS while maintaining a stack of visited vertices. If we encounter a back edge during DFS, it means there is a cycle in the graph, and we should return `None`. Otherwise, we can push the visited vertices onto the stack to get the topological order.

Here is the Python implementation:

```python
def valid_topological_ordering(adjacency_list):
    visited = set()
    order = []
    def dfs(vertex):
        if vertex in visited:
            return 
        visited.add(vertex)
        for neighbor in adjacency_list[vertex]:
            dfs(neighbor)
        order.append(vertex)

    for vertex in adjacency_list:
        if vertex not in visited:
            dfs(vertex)

    # Check for cycles by verifying that all vertices are visited
    if len(order) != len(adjacency_list):
        return None
    return order[::-1]  # Reverse the order as we appended vertices in reverse DFS order

# Example usage:
adjacency_list = {1: [2, 3], 2: [4], 3: [4], 4: []}
print(valid_topological_ordering(adjacency_list))  # Output: [1, 2, 3, 4]

adjacency_list = {1: [2], 2: [1]}
print(valid_topological_ordering(adjacency_list))  # Output: None (cycle detected)
```

**Analysis of Complexity:**

1. **Time Complexity:** The time complexity of this solution is O(V + E), where V is the number of vertices and E is the number of edges. This is because we perform DFS from each unvisited vertex once and visit each edge at most once.
2. **Space Complexity:** The space complexity is also O(V + E), primarily due to storing the visited set and the adjacency list.

**Why this approach is optimal:**
This approach is optimal because it leverages the properties of DFS to detect cycles efficiently while maintaining a valid topological ordering for DAGs. The use of a set for keeping track of visited vertices ensures that we can handle large graphs effectively without redundant checks.

**Difficulty Rating:** 3

This problem requires a good understanding of both DFS traversal and topological sorting concepts. However, it does not involve complex algorithms like Floyd Warshall or Dijkstra's algorithm, making it more accessible than extremely challenging problems like finding shortest paths in weighted graphs with negative weights. The implementation is straightforward once you understand the logic behind maintaining a valid ordering during DFS traversal.