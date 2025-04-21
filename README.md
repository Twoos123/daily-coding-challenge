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

### #### Problem Description
**Flatten a Linked List with Merging Nodes**
Given a singly linked list where each node contains an integer value and an additional pointer `next` and `prev` if it's a doubly linked list, and an optional pointer to another node `merge` (representing a merge point), flatten the linked list. The `merge` pointer should be ignored and treated as part of the normal list. The goal is to traverse through the linked list and merge adjacent nodes that have a value greater than their previous node's value, effectively creating a new flattened linked list.

#### Example Input/Output

Input: A doubly linked list with nodes containing values and merge points:
```
     1 -> 2 -> 3 -> 4 -> 5
      ^   ^       ^       ^
      |   |       |       |  
      2   3       4       5
        ^         ^         ^
        |         |         |
        3         4         5
          ^         ^         
          |         |         
          4         5         
            
```
Output: Flattened linked list:
```
     1 -> 2 -> 3 -> 4 -> 5
```

#### Constraints
- The input linked list is a doubly linked list for simplicity.
- Each node has `value`, `next`, and `prev` pointers.
- The `merge` pointer is optional and should be ignored.
- The final flattened linked list should have adjacent nodes with values in ascending order.

#### Solution

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None

def flatten_linked_list(head):
    # Initialize current and previous pointers
    curr = head
    prev = None

    while curr:
        # Store next node temporarily
        next_node = curr.next

        # Merge adjacent nodes with values greater than previous node's value
        while curr and (prev is None or curr.value >= prev.value):
            prev = curr
            curr = curr.next

        # Merge the stored next node with the current previous node
        if prev:
            prev.next = next_node
            if next_node:
                next_node.prev = prev
        
        # Move to next node in the original list
        curr = next_node

    return head
```

#### Detailed Explanation of Algorithm

1. **Initialization**:
   - Set `curr` to the head of the linked list.
   - Set `prev` to `None`.

2. **Traversal**:
   - While `curr` exists, traverse through the linked list.
   - Store the next node in `next_node`.

3. **Merging Nodes**:
   - While traversing and `prev` exists or if `curr` exists and its value is greater than or equal to `prev`.value, update `prev` to be the current node and move `curr` one step forward.

4. **Linking Adjacent Nodes**:
   - After merging, link the stored `next_node` with `prev`.
   - Update the `prev` and `next` pointers accordingly.

5. **Repeat Traversal**:
   - Move to the next node in the list and repeat steps 2-4 until all nodes are processed.

6. **Return Head**:
   - Return the head of the flattened linked list.

#### Time Complexity Analysis
The time complexity of this algorithm is O(n), where n is the number of nodes in the linked list. This is because each node is visited exactly once during traversal.

#### Space Complexity Analysis
The space complexity is O(1), as we only use a constant amount of space to store temporary pointers (`curr`, `prev`, and `next_node`).

This approach ensures that the linked list is flattened efficiently by merging adjacent nodes with values in ascending order while maintaining correct linkages between nodes.

---

### Difficulty Rating: 3

This problem requires a good understanding of linked list traversal and merging logic. It involves managing pointers efficiently to maintain the correct order while flattening the linked list. The solution provided is optimized in terms of both time and space complexity, making it suitable for a moderate-level difficulty rating.