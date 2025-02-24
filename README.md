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

**Challenge: "Rotate Linked List"**

Given a singly or doubly linked list, rotate the list by a specified number of positions such that the node at the end becomes the new head. For example, if you have a list `1 -> 2 -> 3 -> 4 -> nil` and you want to rotate it by 2 positions, the new list should be `3 -> 4 -> 1 -> 2 -> nil`.

### Example Input/Output

**Input:**
- Singly Linked List: `1 -> 2 -> 3 -> 4 -> nil`
- Rotation Positions: 2

**Output:**
- New List: `3 -> 4 -> 1 -> 2 -> nil`

### Constraints
- The rotation positions can be any integer value.
- The linked list nodes contain an integer value and a reference to the next node (for singly linked list) or references to both next and previous nodes (for doubly linked list).

### Solution

#### Singly Linked List

To solve this problem efficiently, we can use a single pass through the list to achieve O(n) time complexity. However, to simplify the implementation and handle edge cases more elegantly, we can use two passes: one to find the end of the list and another to rotate the nodes.

Here is a Python implementation:

```python
class ListNode:
    def __init__(self, value=0, next=None):
        self.val = value
        self.next = next

def rotate_linked_list(head, k):
    if not head or not head.next:
        return head
    
    # Step 1: Find the length of the linked list.
    length = 0
    current = head
    while current:
        length += 1
        current = current.next

    # Step 2: Adjust k to be within 0 to length-1.
    k %= length
    
    # Step 3: If k is 0, the list does not need to be rotated.
    if k == 0:
        return head

    # Step 4: Find the new tail (kth node from current head).
    new_tail = head
    for _ in range(k - 1):
        new_tail = new_tail.next

    # Step 5: Store the new head.
    new_head = new_tail.next

    # Step 6: Connect the new tail with null.
    new_tail.next = None

    # Step 7: Connect the new head with original head.
    current = head
    while current.next:
        current = current.next
    current.next = new_head

    return new_head

# Example usage:
# Create a singly linked list: 1 -> 2 -> 3 -> 4 -> nil
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)

# Rotate by 2 positions.
new_head = rotate_linked_list(head, 2)

# Print the rotated list.
while new_head:
    print(new_head.val)
    new_head = new_head.next

```

#### Analysis

- **Time Complexity:** O(n), where n is the number of nodes in the linked list. We need to traverse through the list once to find its length and another time to connect nodes.
- **Space Complexity:** O(1), as we only use a few extra variables to keep track of the new head and tail.

This approach is optimal because it minimizes the number of passes through the list while ensuring that all edge cases are handled correctly.

### Explanation

1. **Find Length:** We start by finding the length of the linked list. This gives us an understanding of how many nodes we need to traverse.
2. **Adjust k:** We then adjust `k` to be within 0 to `length-1`. This ensures that even if `k` is greater than the length of the list, we can still find a valid rotation position.
3. **Find New Tail:** We find the node that will become the new tail of our rotated list by moving `k-1` steps from the current head.
4. **Store New Head:** We store the node after `new_tail` as our new head.
5. **Disconnect Old Tail:** We disconnect `new_tail` from its next node by setting its next pointer to `None`.
6. **Connect New Head:** We then connect our new tail (`new_head`) with our original head's last node (`current`).

This solution ensures that we perform operations in constant space while achieving linear time complexity.