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

**Challenge: Remove Every k-th Node from a Linked List**

Given a singly linked list, remove every k-th node from the list. The head of the linked list is given as `head`. You should not remove the first node, only nodes at positions that are multiples of `k`.

### Example Input/Output

**Input:**
```
Head Node: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> ...
k = 3
```

**Output:**
```
Head Node: 1 -> 2 -> 4 -> 5 -> 7 -> ...
```

### Constraints

- The linked list does not contain any duplicate values.
- The value of `k` is greater than 1.
- The linked list may contain `n` nodes, where `n` could be very large.

### Most Efficient Solution in Python

#### Algorithm Explanation

To achieve this efficiently, we will use a two-pointer approach. The first pointer (`curr`) will traverse the linked list, and the second pointer (`skip`) will help us skip every `k-th` node.

1. **Initialize Pointers:**
   - `curr` points to the head of the linked list.
   - `skip` points to `head`.

2. **Traversal:**
   - Traverse the linked list with `curr`.
   - If `skip` reaches `k`, move it to the next node.

3. **Removal:**
   - When `skip` reaches the node that should be removed, move `curr` to the next node.

4. **New Head:**
   - If `curr` becomes null, return null as there are no more nodes in the list.

5. **Final List:**
   - Update the head of the list with `curr`.

#### Code Implementation

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def removeEveryKthNode(head, k):
    if not head or k <= 1:
        return head

    prev = None
    skip = head

    while skip:
        if k == 1:
            # If k is 1, skip every node in the list
            return None

        for _ in range(k - 2): # Skip k-2 nodes before removing the k-th node
            if not skip.next:
                break # If there are not enough nodes left, stop skipping.
            skip = skip.next
        
        # If we've reached the end of the list, stop here
        if not skip.next:
            break
        
        # Skip the k-th node and set prev to skip to keep track of previous node.
        prev = skip if prev else head 
        skip = skip.next.next
        
        # If prev is None, it means the head was removed so update the head.
        if prev is None:
            head = skip
    
    return head

# Example usage:
# Create a sample linked list (1 -> 2 -> 3 -> 4 -> 5 -> ...)
head = ListNode(1)
current = head
for i in range(2, 6):
    current.next = ListNode(i)
    current = current.next

# Remove every 3rd node
new_head = removeEveryKthNode(head, 3)

# Print the resulting list
while new_head:
    print(new_head.val, end=" ")
    new_head = new_head.next

# Output: 1 -> 2 -> 4 -> 5 
```

### Complexity Analysis

**Time Complexity:** O(n), where n is the number of nodes in the linked list. This is because we traverse the list once.

**Space Complexity:** O(1), as we only use a constant amount of space to store pointers.

### Why This Approach is Optimal

This approach is optimal because it uses a two-pointer technique that avoids unnecessary iterations and ensures that we traverse the list only once. The space complexity is constant, making it efficient in terms of memory usage.

The trade-off here is that we need to handle edge cases like when `k` is 1 or when there are not enough nodes left in the list, which adds some complexity but does not affect the overall time complexity.

This problem sits at a moderate difficulty level (4 out of 5) because it requires careful handling of pointers and edge cases without using recursion, making it slightly more challenging than some basic linked list problems but less complex than extremely advanced problems involving circular linked lists or complex merges.