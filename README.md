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

### Challenge: "Flatten and Reorder a Sorted LinkedList"

#### Problem Description
Given a sorted singly linked list, flatten it into a doubly linked list such that the elements are reordered in alternating ascending and descending order. For example, if the input is 1 -> 2 -> 3 -> 4 -> 5, the output should be 1 -> 5 -> 2 -> 4 -> 3.

#### Example Input/Output
Input: `1 -> 2 -> 3 -> 4 -> 5`
Output: `1 -> 5 -> 2 -> 4 -> 3`

#### Constraints
- The input linked list is sorted in ascending order.
- The resulting doubly linked list should have alternating elements in ascending and descending order.
- The linked list nodes contain integers.

#### Solution in Python

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, value):
        if not self.head:
            self.head = Node(value)
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = Node(value)
            current.next.prev = current

    def flatten_and_reorder(self):
        # Convert to list for easier manipulation
        values = []
        current = self.head
        while current:
            values.append(current.value)
            current = current.next
        
        # Reorder values
        reordered_values = []
        for i in range(len(values)):
            if i % 2 == 0:
                reordered_values.append(values[i])
            else:
                reordered_values.append(values[-i-1])
        
        # Create a new doubly linked list with reordered values
        result_head = None
        result_tail = None
        
        for value in reordered_values:
            new_node = Node(value)
            if not result_head:
                result_head = new_node
                result_tail = new_node
            else:
                result_tail.next = new_node
                new_node.prev = result_tail
                result_tail = new_node
        
        # Update the head of the original LinkedList to point to the new head
        self.head = result_head

# Example usage
linked_list = LinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)
linked_list.append(4)
linked_list.append(5)

print("Original List:", end=" ")
current = linked_list.head
while current:
    print(current.value, end=" -> ")
    current = current.next
print("nil")

linked_list.flatten_and_reorder()

print("Flattened and Reordered List:", end=" ")
current = linked_list.head
while current:
    print(current.value, end=" -> ")
    current = current.next
print("nil")
```

#### Analysis
- **Time Complexity**: The flattening process involves converting the linked list to a list, which takes O(n) time where n is the number of nodes. The reordering operation also takes O(n) time. Therefore, the overall time complexity is O(n).
- **Space Complexity**: The additional space needed for storing the values in a list is O(n), but this can be reduced by performing the flattening and reordering operations directly on the linked list without using extra space for the list representation. However, considering the conversion step for clarity, the space complexity is O(n).

This challenge requires manipulating a linked list while maintaining its structure and then reordering its elements in an alternating fashion, which adds some complexity compared to basic linked list operations. It is more challenging than basic linked list operations but less complex than designing a custom linked list implementation from scratch.

Thus, it is rated as a difficulty level of 4.