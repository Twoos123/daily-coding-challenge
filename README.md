## About

This repository contains daily coding challenges generated using the Perplexity API. Each challenge is automatically generated and committed to this repository at 12 am EST everyday.

## Today's Challenge

### Coding Challenge: "Efficient Scheduling of Tasks"

**Problem Description:**

You are given a list of tasks with their respective durations and deadlines. The goal is to determine the most efficient schedule that allows all tasks to be completed on or before their deadlines, while minimizing the total duration of the schedule.

**Example Input/Output:**

**Input:**
- Tasks: `[[1, 3], [2, 4], [3, 2], [4, 1]]`
  - Each task is represented as a list `[duration, deadline]`.
- The tasks need to be scheduled such that each task is completed on or before its deadline.

**Output:**
- The most efficient schedule: `[[1, 3], [2, 4], [4, 1], [3, 2]]`
  - This schedule implies that the tasks should be completed in the order `[1, 3]`, `[2, 4]`, `[4, 1]`, and `[3, 2]`.

**Constraints:**

- The tasks are non-overlapping.
- The durations and deadlines are integers.
- The number of tasks is limited (e.g., up to 10 tasks).

**Solution in Python:**

```python
from collections import defaultdict

def schedule_tasks(tasks):
    # Start with an empty schedule
    schedule = []
    
    # Sort tasks by deadline
    tasks.sort(key=lambda x: x[1])
    
    # Create a dictionary to store available time slots
    time_slots = defaultdict(int)
    
    # Iterate over each task
    for duration, deadline in tasks:
        # Find the earliest available time slot that meets the deadline
        for i in range(deadline):
            if time_slots[i] + duration <= deadline:
                schedule.append([duration, i])
                time_slots[i] += duration
                break
    
    return schedule

# Example usage:
tasks = [[1, 3], [2, 4], [3, 2], [4, 1]]
print(schedule_tasks(tasks))
```

### Explanation:

1. **Sort Tasks by Deadline**: The tasks are sorted by their deadlines to ensure that we consider tasks with earlier deadlines first.
2. **Create Time Slots**: A dictionary `time_slots` is used to keep track of available time slots. Each key represents a time point (from 0 to the latest deadline), and its value represents the total duration of tasks already scheduled up to that point.
3. **Schedule Tasks**:
   - Iterate over each task.
   - For each task, find the earliest available time slot that meets its deadline by checking all time points up to its deadline.
   - If an available slot is found, add the task to the schedule and update `time_slots` accordingly.

This solution ensures that all tasks are scheduled efficiently while minimizing the total duration of the schedule.
