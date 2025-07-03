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

### Problem Description

**Linked List Cycle Detection**

Given a singly linked list, determine if the list contains a cycle (i.e., if any node points back to a previous node). Implement a method to detect such a cycle and return `True` if one exists, otherwise return `False`.

### Example Input/Output

**Input:** A singly linked list with nodes `[1, 2, 3, 4]` where node `3` points back to node `1`.
**Output:** `True`

**Input:** A singly linked list with nodes `[1, 2, 3, 4]` where no nodes point back.
**Output:** `False`

### Constraints

- The list may or may not contain a cycle.
- Nodes in the list contain only integer data.

### Solution

```python
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def hasCycle(head):
    if head is None:
        return False
    
    slow = head
    fast = head
    
    while fast is not None and fast.next is not None:
        slow = slow.next  # Move one step at a time
        fast = fast.next.next  # Move two steps at a time
        
        if slow == fast:
            return True
    
    return False
```

### Detailed Explanation

The solution uses Floyd's Tortoise and Hare algorithm to detect the cycle in the linked list. This algorithm leverages two pointers, `slow` and `fast`, which move at different speeds through the linked list.

1. **Initialization**:
   - If the head is `None`, it means there are no nodes, so we return `False`.

2. **Main Loop**:
   - Set both pointers (`slow` and `fast`) to the head of the linked list.
   - While `fast` and its next node are not `None`, move `slow` one step at a time and `fast` two steps at a time.
   - If `slow` and `fast` ever meet, it indicates that there is a cycle in the linked list, so we return `True`.

3. **Termination**:
   - If `fast` becomes `None` or its next node becomes `None`, it means there are no more nodes or no more adjacent nodes left, so we return `False`.

This algorithm has a time complexity of O(n), where n is the number of nodes in the linked list because each node is visited at most twice (once by `slow` and once by `fast`). The space complexity is O(1) since only a constant amount of space is used.

### Complexity Analysis

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### Why This Approach is Optimal

Floyd's Tortoise and Hare algorithm is optimal for detecting cycles in linked lists because it takes advantage of the fact that if there is a cycle, eventually the faster pointer will caught up with the slower one. This approach ensures that every node is visited at most twice, making it highly efficient.