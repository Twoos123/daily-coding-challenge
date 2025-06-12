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

**DIFFICULTY: 4**

### Problem Description

**Balanced Heap Scheduling**

Given a list of tasks with their respective durations and priorities, schedule the tasks such that the total waiting time is minimized. The tasks should be scheduled in a way that if two tasks have the same priority, the one with the shorter duration is executed first. This scheduling can be achieved by maintaining a balanced heap (either Min Heap or Max Heap) of tasks based on their priorities and durations.

### Example Input/Output

**Input:**
```python
tasks = [
    {"duration": 1, "priority": 3},
    {"duration": 2, "priority": 1},
    {"duration": 3, "priority": 2},
    {"duration": 4, "priority": 1},
    {"duration": 5, "priority": 3}
]
```

**Output:**
```python
scheduled_tasks = [
    {"duration": 2, "priority": 1},
    {"duration": 1, "priority": 3},
    {"duration": 3, "priority": 2},
    {"duration": 4, "priority": 1},
    {"duration": 5, "priority": 3}
]
```

### Constraints

- The list of tasks is non-empty.
- Each task has a unique priority.
- The durations of tasks are non-negative integers.

### Most Efficient Solution

To solve this problem efficiently, we can use a Min Heap where each task is represented by a tuple `(duration, priority)`. We always extract the task with the minimum duration from the heap because if two tasks have the same priority, the one with the shorter duration should be executed first.

Here's the most efficient solution in Python:

```python
import heapq

def schedule_tasks(tasks):
    # Create a min heap (priority is secondary)
    min_heap = []
    
    for task in tasks:
        heapq.heappush(min_heap, (task["duration"], task["priority"]))
    
    scheduled_tasks = []
    
    while min_heap:
        # Extract tasks with minimum duration first
        duration, priority = heapq.heappop(min_heap)
        
        # Add the extracted task to the scheduled list
        scheduled_tasks.append({"duration": duration, "priority": priority})
    
    return scheduled_tasks

# Example usage:
tasks = [
    {"duration": 1, "priority": 3},
    {"duration": 2, "priority": 1},
    {"duration": 3, "priority": 2},
    {"duration": 4, "priority": 1},
    {"duration": 5, "priority": 3}
]

scheduled_tasks = schedule_tasks(tasks)
print(scheduled_tasks)
```

### Analysis of Complexity

- **Time Complexity:** The time complexity of `heapq.heappush` and `heapq.heappop` operations on a min heap is O(log n) where n is the number of tasks.
- **Space Complexity:** The space complexity is O(n) because we need to store all tasks in the min heap.

### Explanation of Why This Approach is Optimal

Using a min heap allows us to efficiently extract tasks with the minimum duration first while ensuring that tasks with the same priority are ordered based on their duration. This approach minimizes the total waiting time by ensuring that shorter tasks are executed sooner than longer ones when they have the same priority.

### Trade-offs

There are no significant trade-offs between time and space complexity in this solution. The use of a min heap ensures optimal time complexity for both inserting and extracting tasks, and the space complexity is directly proportional to the number of tasks as required by the problem constraints.