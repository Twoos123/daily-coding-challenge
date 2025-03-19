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

### Coding Challenge: **"Rotate Linked List by K Steps"**

#### Problem Description

Given a singly or doubly linked list and an integer `k`, rotate the list by `k` steps. If `k` is greater than the length of the list, you should rotate the list by the remainder of `k` divided by the length of the list.

#### Example Input/Output

**Input:**
- Singly Linked List: `1 -> 2 -> 3 -> 4 -> 5`
- Integer `k`: 2

**Output:**
- Rotated Linked List: `4 -> 5 -> 1 -> 2 -> 3`

**Constraints:**
- The linked list may be empty.
- The integer `k` can be any integer.

#### Solution Approach

To solve this problem efficiently, we can use the following approach:

1. **Calculate the length of the list**: This will help us determine how many steps are needed to rotate the list. The remainder of `k` divided by the length of the list gives us the effective number of steps to rotate.

2. **Rotate the list**: Use three pointers to rotate: two for traversing and one for updating the nodes.

Here is the Python solution using a singly linked list:

```python
class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def rotate(self, k):
        if not self.head or not k:
            return
        
        # Calculate effective number of steps
        k = k % self.count_nodes()

        # Adjust head and tail pointers based on k
        prev_tail = self.get_nth_node(k)
        prev_tail.next = None
        
        # Connect rotated list to head of original list
        self.head.next = self.head
        
    def count_nodes(self):
        count = 0
        current = self.head
        while current:
            count += 1
            current = current.next
        return count
    
    def get_nth_node(self, n):
        current = self.head
        for _ in range(n):
            if current:
                current = current.next
            else:
                break
        return current
    
    def print_list(self):
        current = self.head
        while current:
            print(current.val, end=" ")
            current = current.next
        print()

# Example usage:
if __name__ == "__main__":
    linked_list = LinkedList()
    
    linked_list.head = Node(1)
    second_node = Node(2)
    third_node = Node(3)
    fourth_node = Node(4)
    fifth_node = Node(5)
    
    linked_list.head.next = second_node
    second_node.next = third_node
    third_node.next = fourth_node
    fourth_node.next = fifth_node
    
   linked_list.print_list() # Output: 1 2 3 4 5
    
   linked_list.rotate(2)
   
   linked_list.print_list() # Output: 4 5 1 2 
```

#### Analysis

- **Time Complexity:** The time complexity of this solution is primarily O(n) for counting nodes and O(n) for rotating the list by k steps. However, since we use a constant amount of extra space to compute `k % self.count_nodes()`, the overall time complexity remains at O(n).
  
- **Space Complexity:** The space complexity is O(1) as we only use a constant amount of extra space to store the `current` and `prev_tail` pointers during rotation.

#### Why This Approach is Optimal

This approach is optimal because it directly manipulates the linked list in-place without creating additional lists or using more than a constant amount of extra space. It efficiently handles the edge cases where k exceeds the length of the list by taking advantage of Python's modular arithmetic to compute the effective number of steps.

#### Difficulty Rating

This challenge requires understanding linked list operations and performing manipulation in-place, which is moderately challenging for someone familiar with basic linked list operations. The rotation logic needs careful consideration to handle cases where k exceeds the list length, making it a bit more complex than some simpler linked list problems but not as challenging as some advanced ones.