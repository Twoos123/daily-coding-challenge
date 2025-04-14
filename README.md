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

**Challenge: "Delete Consecutive Duplicates in a Linked List"**

Given a singly-linked list, delete all consecutive duplicate nodes. If a sequence of identical nodes is found, remove all of them, leaving only the first occurrence of each node.

### Example Input/Output

**Input List:** `1 -> 2 -> 2 -> 3 -> 3 -> 3 -> 4`
**Output List:** `1 -> 2 -> 3 -> 4`

### Constraints

- The linked list can be empty.
- The input list can contain cycles, but this problem assumes no cycles.
- The solution must be implemented in a single pass through the list.

### Difficulty Rating

****

This problem requires managing a pointer to keep track of the previous node and handling cases where there are no duplicates or non-consecutive duplicates. It is moderately challenging because it involves updating the list in-place without creating additional space, which is a common requirement in linked list problems.

### Optimal Solution in Python

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def delete_consecutive_duplicates(head):
    if not head or not head.next:
        return head
    
    dummy = ListNode(0)
    dummy.next = head
    current = dummy
    
    while current.next and current.next.next:
        if current.next.val == current.next.next.val:
            temp = current.next
            # Skip over all consecutive duplicates by updating next pointers
            while temp and temp.next and temp.val == temp.next.val:
                temp = temp.next
            # Update dummy pointers to skip over all consecutive duplicates
            current.next = temp.next if temp else None
        else:
            # Move to the next unique node if no duplicates are found
            current = current.next
    
    return dummy.next
```

### Detailed Explanation of the Algorithm

1. **Handle Edge Cases:**
   - If the input list is empty or only contains one node, return the head as it is.
   
2. **Create a Dummy Node:**
   - A dummy node is created to simplify handling edge cases at the beginning of the list.

3. **Initialize Current Pointer:**
   - The current pointer (`dummy`) points to the dummy node and then moves to the head of the list.

4. **Traversal Loop:**
   - The while loop ensures that we check for at least two nodes ahead.
   - Check if the next two nodes have the same value. If they do, mark them as duplicates by updating pointers accordingly.

5. **Skipping Consecutive Duplicates:**
   - If duplicates are found, traverse through them by updating `temp` until a non-duplicate node or end of list is reached.
   - Update `current.next` to skip over all consecutive duplicates.

6. **Move to Next Unique Node:**
   - If no duplicates are found, simply move `current` to the next unique node.

7. **Return Result:**
   - After traversing the entire list, return `dummy.next`, which points to the modified head of the list.

### Time and Space Complexity Analysis

- **Time Complexity:** O(n), where n is the number of nodes in the linked list. This is because we make a single pass through the list.
- **Space Complexity:** O(1), since we only use a constant amount of space to store pointers and do not create any additional data structures that scale with input size.

This approach ensures that we handle all edge cases efficiently and modify the list in-place without requiring additional space beyond what is needed for pointers, making it both time and space efficient.