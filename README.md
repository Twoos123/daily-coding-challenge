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

### Challenge: Detecting Cycles in a Linked List

**Problem Description:**
Given the head of a singly linked list, write a function to determine whether the linked list contains a cycle. A cycle is defined as a node that points back to a previous node in the list.

**Example Input/Output:**
```
// Example linked list with a cycle:
// 1 -> 2 -> 3 -> 4 -> 5 -> 2 (cycle starts at node 2)
// Function should return True

// Example linked list without a cycle:
// 1 -> 2 -> 3 -> NULL
// Function should return False
```

**Constraints:**
- The linked list nodes may contain integer data.
- The list may contain cycles.
- The function should return a boolean indicating whether a cycle exists.

**Most Efficient Solution:**

```python
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def hasCycle(head: ListNode) -> bool:
    """
    Detects whether a singly linked list contains a cycle.

    Args:
        head (ListNode): The head of the linked list.

    Returns:
        bool: True if the linked list contains a cycle, False otherwise.
    """
    
    # Phase 1: Detecting cycle using Floyd's Tortoise and Hare algorithm
    # Initialize two pointers, slow and fast, both starting at the head
    slow = head
    fast = head
    
    while fast and fast.next:
        # Move slow one step at a time
        slow = slow.next
        
        # Move fast two steps at a time
        fast = fast.next.next
        
        # If slow and fast meet at some point, it means there is a cycle
        if slow == fast:
            return True
    
    # If no cycle is detected after traversing the entire list, return False
    return False
```

**Detailed Explanation:**

1. **Algorithm**: The solution uses Floyd's Tortoise and Hare algorithm, which is an efficient method for detecting cycles in linked lists.
2. **Time Complexity**: The time complexity of this algorithm is O(n), where n is the number of nodes in the linked list. This is because each node is visited at most twice (once by the slow pointer and once by the fast pointer).
3. **Space Complexity**: The space complexity is O(1), as only a constant amount of space is used for the two pointers (slow and fast).

**Why This Approach is Optimal:**
- Floyd's Tortoise and Hare algorithm is particularly efficient because it avoids the need for recursive calls or explicit node tracking, making it both space and time efficient.
- It leverages the property that if there's a cycle, certain distances between nodes will eventually match due to the properties of linked lists.

### Difficulty Rating: 4 (Moderate)
This problem requires understanding of basic linked list traversal and a clever use of pointers to detect cycles efficiently. It's challenging enough to require careful attention but not so complex as to be overly difficult for someone familiar with data structures and algorithms.

---

To implement this challenge in your preferred programming language, simply translate the provided Python code into your chosen language while maintaining the same algorithmic approach.