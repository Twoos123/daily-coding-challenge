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

**Challenge:** "Remove Consecutive Duplicates in a Linked List"

**Problem Statement:**

Given a singly linked list where each node contains an integer, remove all consecutive duplicate nodes. The resulting list should contain only unique integers in the same order as they appeared in the original list.

For example, if the input linked list is `1 -> 2 -> 2 -> 3 -> 3 -> 3 -> 4 -> 5`, the resulting linked list should be `1 -> 2 -> 3 -> 4 -> 5`.

### Example Input/Output

**Input:**
```
1 -> 2 -> 2 -> 3 -> 3 -> 3 -> 4 -> 5
```

**Output:**
```
1 -> 2 -> 3 -> 4 -> 5
```

### Constraints
- The input linked list is singly linked.
- The nodes contain integer values.
- The resulting linked list should not contain any consecutive duplicates.

### Solution

The most optimal solution for this problem is to traverse the linked list and keep track of the previous node's value. If a duplicate is found, remove the current node and update the previous node's next pointer accordingly.

Here is a Python implementation of this approach:

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def removeConsecutiveDuplicates(head):
    # Create a dummy node to simplify handling of the head of the list
    dummy_node = ListNode(0)
    dummy_node.next = head
    prev_node = dummy_node
    
    while prev_node.next is not None:
        # Check if the current node's value is the same as the previous node's value
        if prev_node.next.val == prev_node.next.next.val:
            # If it is a duplicate, skip it by setting its next pointer to the node after it
            prev_node.next = prev_node.next.next
        else:
            # Otherwise, move to the next non-duplicate node
            prev_node = prev_node.next
    
    # Return the next node of the dummy node which now points to the head of the updated list
    return dummy_node.next

# Example usage:
# Create the linked list 1 -> 2 -> 2 -> 3 -> 3 -> 3 -> 4 -> 5
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(2)
head.next.next.next = ListNode(3)
head.next.next.next.next = ListNode(3)
head.next.next.next.next.next = ListNode(3)
head.next.next.next.next.next.next = ListNode(4)
head.next.next.next.next.next.next.next = ListNode(5)

# Call the function to remove consecutive duplicates
updated_head = removeConsecutiveDuplicates(head)

# Print the updated linked list nodes' values to verify correctness.
while updated_head:
    print(updated_head.val, end=' -> ' if updated_head.next else '\n')
    updated_head = updated_head.next

```

### Complexity Analysis

- **Time Complexity:** The solution has a time complexity of O(n), where n is the number of nodes in the linked list. This is because we make a single pass through the list.
  
- **Space Complexity:** The space complexity is O(1) because we only use a constant amount of space to store pointers and variables.

### Difficulty Rating

The problem requires understanding how to traverse a linked list while keeping track of previous nodes, which makes it moderately challenging. The solution does not require any advanced techniques but does necessitate careful handling of pointers and maintaining the correct order of nodes.