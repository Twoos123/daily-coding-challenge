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

**Challenge: "Reverse Every k Nodes in a Linked List"**

Given a singly linked list and an integer `k`, reverse every `k` nodes in the list. For example, if `k` is 3, the list `1 -> 2 -> 3 -> 4 -> 5 -> 6` should be transformed into `3 -> 2 -> 1 -> 4 -> 5 -> 6`.

### Example Input/Output

**Input:**
- Linked List: `1 -> 2 -> 3 -> 4 -> 5 -> 6`
- `k`: 3

**Output:**
- Reversed Linked List: `3 -> 2 -> 1 -> 4 -> 5 -> 6`

### Constraints

- `k` is a positive integer.
- The linked list does not contain any cycles.
- The linked list is non-empty.

### Solution

#### Most Efficient Solution

To solve this problem efficiently, we can use a two-pointer approach where we maintain two pointers, one for the current node and one for the next group of nodes to be reversed. This approach ensures that we only traverse the list once, making it time-efficient.

```python
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def reverseKGroup(head, k):
    dummy = ListNode(0)
    dummy.next = head
    prev_tail = dummy
    
    while True:
        # Find the next k-th node from tail pointer
        tail = prev_tail
        for _ in range(k):
            if tail.next is None:
                return dummy.next
        
        # Reverse the current k-th group of nodes
        curr = tail.next
        for i in range(k - 1):
            next_node = curr.next
            curr.next = next_node.next
            next_node.next = tail.next
            tail.next = next_node
        
        prev_tail = curr  # Update tail pointer
    
    return dummy.next

# Example usage:
# Create linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)
head.next.next.next.next.next = ListNode(6)

# Reverse every k-th node in the linked list with k=3
k = 3
new_head = reverseKGroup(head, k)

# Print the resulting linked list
while new_head:
    print(new_head.val, end=' ')
    new_head = new_head.next

# Output should be:
# 3 2 1 4 5 6
```

#### Analysis of Complexity

**Time Complexity:** O(n*k), where n is the number of nodes in the linked list. This is because we traverse the list up to `k` times in each iteration of reversing groups of nodes.

**Space Complexity:** O(1), since we only use a constant amount of space for pointers and variables. The additional space required for reverse operations is within the linked list itself, which does not count towards space complexity.

This approach is optimal because it minimizes the number of traversals through the linked list by reusing pointers effectively.

**Difficulty Rating:** 4

This problem requires a good understanding of linked lists and efficient traversal techniques. The two-pointer approach helps in minimizing the number of iterations over the linked list, making it a challenging yet solvable problem with an optimal solution.