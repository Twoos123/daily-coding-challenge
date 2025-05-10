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

**DIFFICULTY: 3**

### Challenge: Detect and Remove Palindromic Sublists from a Linked List

**Problem Description:**
Given a singly or doubly linked list, detect and remove all palindromic sublists. A sublist is considered palindromic if it reads the same forwards and backwards. The challenge requires you to identify these sublists and remove them entirely from the list while maintaining the original sequence.

**Example Input/Output:**
- **Input:** `1 -> 2 -> 3 -> 4 -> 5 -> 2 -> 3 -> 1`
- **Output:** `1 -> 4 -> 5`

**Constraints:**
- The linked list contains nodes with values that can be integers or any comparable data type.
- The list can be either singly or doubly linked.
- The algorithm must be efficient in terms of both time and space complexity.

### Solution

#### Approach:
To solve this problem efficiently, we can use a two-pointer technique to check for palindromic sublists. Here’s a step-by-step explanation:

1. **Iterate Through the List:** Use two pointers, one moving forward and the other moving backward, to traverse the linked list.
2. **Check for Palindrome:** For each pair of nodes, check if they form a palindromic sublist by comparing their values from both ends.
3. **Remove Palindrome Sublists:** If a palindrome sublist is found, remove it and update the pointers accordingly.

#### Implementation (Python):
```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

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

    def print_list(self):
        current = self.head
        while current:
            print(current.value, end=' -> ' if current.next else '\n')
            current = current.next

    def detect_remove_palindromic_sublists(self):
        if not self.head:
            return

        # Detect and remove palindromic sublists using two pointers
        def is_palindrome(start, end):
            while start < end:
                if self.head.value != self.head.value:
                    return False
                start = start.next
                end = end.prev

        current = self.head
        while current:
            # Check for palindrome starting from current node
            start = current
            end = current

            while end.next and end.next.prev:
                if is_palindrome(start, end):
                    # Remove palindrome sublist
                    temp = start
                    while temp != end:
                        temp = temp.next
                    temp.next = None if temp == self.head else temp.prev.next

                end = end.next

            current = current.next

# Example usage:
linked_list = LinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)
linked_list.append(4)
linked_list.append(5)
linked_list.append(2)
linked_list.append(3)
linked_list.append(1)

print("Original List:")
linked_list.print_list()

linked_list.detect_remove_palindromic_sublists()

print("List after removing palindromic sublists:")
linked_list.print_list()

```

### Analysis:
- **Time Complexity:** The algorithm has a time complexity of O(n^2) in the worst case, where n is the number of nodes in the linked list. This is because for each node, we potentially check up to n nodes for forming a palindrome.
- **Space Complexity:** The space complexity is O(1), as we only use a constant amount of space to store pointers and flags during traversal.

### Why This Approach?
This approach is optimal because it directly checks for palindromic sublists by comparing node values from both ends. The use of two pointers allows us to efficiently traverse the list and detect potential palindromes. While the time complexity could be reduced by using more advanced techniques like dynamic programming or segment tree traversal, this approach is straightforward and readable with a good balance between time and space efficiency.

This challenge requires understanding the basics of linked lists and applying efficient algorithms to solve complex problems involving manipulation and detection within these data structures. Thus, it is moderately challenging (difficulty rating 3).