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

### Coding Challenge: "Minimum Time to Complete Tasks with Dependencies"

**Problem Description:**
Given a directed acyclic graph (DAG) where each node represents a task and each edge represents a dependency, determine the minimum time required to complete all tasks. Each task has a given execution time, and we need to find the order in which tasks should be executed to minimize the total time.

**Input/Output:**
- **Input:**
  - A list of tasks with their execution times.
  - A list of dependencies between tasks (edges).
- **Output:**
  - The minimum total time required to complete all tasks.

**Constraints:**
- The graph is a DAG.
- Execution times for tasks are non-negative integers.
- There are no negative cycles.

### Most Efficient Solution in Python

```python
from collections import defaultdict, deque

def minTimeToCompleteTasks(tasks, dependencies):
    # Build the graph and in-degree map
    graph = defaultdict(list)
    in_degree = {task: 0 for task in tasks}
    
    for dependency in dependencies:
        parent, child = dependency
        graph[parent].append(child)
        in_degree[child] += 1
    
    # Initialize the queue with tasks having no dependencies
    queue = deque([task for task in tasks if in_degree[task] == 0])
    
    # Initialize the time map and result
    time_map = {task: 0 for task in tasks}
    
    while queue:
        task = queue.popleft()
        time_map[task] += 1
        
        for neighbor in graph[task]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    # Calculate the total time by summing up the execution times
    total_time = sum(time_map.values())
    
    return total_time
```

### Detailed Explanation of the Algorithm

1. **Build the Graph and In-Degree Map:**
   - We create an adjacency list representation of the graph using a dictionary.
   - We initialize a dictionary `in_degree` to keep track of the number of incoming edges for each node.

2. **Initialization of the Queue:**
   - We populate the queue with tasks that have no dependencies (in-degree 0).

3. **Topological Sorting with Execution Time Update:**
   - We perform a modified topological sort where we also update the execution time for each task.
   - For each task in the queue, we increase its execution time by 1 and then decrement the in-degree of its neighbors.
   - If a neighbor's in-degree becomes 0, we add it to the queue.

4. **Calculate Total Time:**
   - After performing the topological sort, we sum up all the execution times stored in `time_map`.

### Complexity Analysis

- **Time Complexity:** O(V + E)
  - We visit each edge once to build the graph and in-degree map, and then perform a topological sort that visits each node once.
  - The sum operation over all nodes takes O(V) time.
  
- **Space Complexity:** O(V + E)
  - We use dictionaries to store graph edges and in-degrees, which require O(V + E) space.
  - The queue used for topological sorting also requires O(V) space.

### Difficulty Rating

This problem requires an understanding of graph algorithms, specifically topological sorting, and the ability to modify it to accommodate execution times. The solution involves handling dependencies and updating execution times efficiently, making it challenging but manageable with a good grasp of graph data structures and algorithms.