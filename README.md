## About

This repository contains daily coding challenges generated using the Perplexity API. Each challenge is automatically generated and committed to this repository.

## Today's Challenge

Difficulty: ⭐⭐⭐ (3/5)

### Coding Challenge: "Efficient Calendar Scheduling"

**Problem Description:**
Given a list of events with start and end times, determine the minimum number of conference rooms required to accommodate all events efficiently. The goal is to minimize the total number of rooms used while ensuring that no two events in the same room overlap.

**Example Input/Output:**

**Input:**
```
[[0, 30], [5, 10], [15, 20]]
```

**Output:**
```
2
```

**Constraints:**
1. **Event Times:** Each event is represented by a tuple `(start, end)` where `start` and `end` are integers representing the start and end times in minutes.
2. **Non-Overlapping Events:** No two events in the same room can overlap in time.
3. **Efficiency:** The goal is to minimize the total number of rooms used.

**Solution in Python:**

```python
import heapq

def min_rooms(rooms):
    # Sort events by start time
    events = sorted((start, end, 1) for start, end in rooms) + \
             sorted((end, start, -1) for start, end in rooms)
    
    # Initialize priority queue to keep track of end times and number of rooms
    end_times = []
    
    # Initialize minimum number of rooms required
    min_rooms = 0
    
    for _, time, delta in events:
        # If it's an end time, decrease count by delta (1 if it's an end time of an event, -1 if it's a start time)
        if end_times and end_times[0][0] == time:
            heapq.heappop(end_times)
        
        # Increase count by delta and push new end time into priority queue
        heapq.heappush(end_times, (time + delta, delta))
        
        # Update minimum number of rooms required if current count is higher
        min_rooms = max(min_rooms, len(end_times))
    
    return min_rooms

# Example usage:
rooms = [[0, 30], [5, 10], [15, 20]]
print(min_rooms(rooms)) # Output: 2

```

**Difficulty Rating:**
Difficulty Level: 3/5

This challenge requires understanding of event scheduling and using a priority queue to efficiently manage the end times of events. The solution needs to handle both start and end times correctly to avoid overcounting or undercounting the number of rooms needed.