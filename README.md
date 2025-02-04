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

****

### Coding Challenge: "Art Gallery Problem"

**Problem Description:**
You are given a graph representing an art gallery with different rooms and hallways. The goal is to find the most efficient way to visit all rooms while ensuring that no room is visited without going through a previously visited room. This problem can be solved using Topological Sort.

**Example Input/Output:**

**Input:**
```plaintext
Rooms: [A, B, C, D]
Hallways: [(A, B), (B, C), (C, D), (D, A)]
```

**Output:**
```plaintext
Visit order: [A, B, C, D]
```

**Constraints:**
- The graph is directed and acyclic (DAG).
- Each room can have multiple hallways leading to other rooms.
- The graph must be fully connected.

**Analysis:**

This problem is best solved using Topological Sort because it requires visiting all rooms in a linear order such that for every edge (u, v), room u comes before room v in the visit order.

### Solution

#### Implementation:
```python
from collections import defaultdict

def art_gallery(graph):
    # Initialize in-degree dictionary
    in_degree = defaultdict(int)

    # Initialize adjacency list representation of the graph
    adj_list = defaultdict(list)

    # Populate adjacency list and calculate in-degrees
    for u, v in graph:
        adj_list[u].append(v)
        in_degree[v] += 1

    # Initialize queue with nodes having in-degree 0
    queue = [node for node in adj_list if in_degree[node] == 0]

    # Initialize result list (visit order)
    result = []

    while queue:
        node = queue.pop(0)
        result.append(node)

        # Decrease in-degree of neighboring nodes and enqueue if in-degree becomes 0
        for neighbor in adj_list[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    return result

# Example usage:
rooms = ['A', 'B', 'C', 'D']
hallways = [('A', 'B'), ('B', 'C'), ('C', 'D'), ('D', 'A')]

visit_order = art_gallery(hallways)
print("Visit Order:", visit_order)
```

#### Explanation:
1. **Initialization:**
   - Create an in-degree dictionary to keep track of the number of edges entering each node.
   - Create an adjacency list representation of the graph.
   
2. **Populate Adjacency List and Calculate In-Degrees:**
   - For each edge (u, v) in the graph, add v to u's neighbors in the adjacency list and increment v's in-degree by 1.

3. **Initialization of Queue:**
   - Initialize a queue with nodes that have an in-degree of 0 (i.e., source nodes).

4. **Topological Sort Algorithm:**
   - While there are nodes in the queue, pop one node from the queue and add it to the result list.
   - Decrease the in-degree of all neighboring nodes by 1 and enqueue any node whose in-degree becomes 0.

5. **Result:**
   - The resulting list contains the topological sort order.

#### Complexity Analysis:
- **Time Complexity:** O(V + E), where V is the number of vertices (rooms) and E is the number of edges (hallways). This is because we visit each node and edge once.
- **Space Complexity:** O(V + E), due to the adjacency list representation and in-degree dictionary.

This approach ensures that we visit all rooms in a linear order such that no room is visited without going through a previously visited room, which aligns with the Art Gallery problem requirements.