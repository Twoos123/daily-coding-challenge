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
**Reverse and Merge Linked Lists**

Given two singly linked lists, one of which is reversed, merge them into a single sorted linked list. The reversed list is also sorted in ascending order but has been reversed. Your task is to create a function that merges these two lists into a single sorted order.

#### Example Input/Output
- **Input 1: Reversed List `R`:** `3 -> 2 -> 1`
- **Input 2: Sorted List `S`:** `4 -> 10 -> 11`
- **Output:** Merged List: `1 -> 2 -> 3 -> 4 -> 10 -> 11`

#### Constraints
- Both input lists are singly linked lists.
- The reversed list is already sorted in ascending order.
- The sorted list is also sorted in ascending order.

### Difficulty Rating
**DIFFICULTY: 4**

### Solution in Python

#### Reversing a Linked List Function

First, we need to reverse the linked list. This can be done using a simple iterative approach.

```python
class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None

def reverse_list(head):
    prev = None
    while head:
        next_node = head.next
        head.next = prev
        prev = head
        head = next_node
    return prev
```

#### Merging Two Sorted Linked Lists Function

Next, we need to merge these two lists. We can do this by comparing nodes from both lists and adding them in sorted order.

```python
def merge_sorted_lists(reversed_head, sorted_head):
    # Initialize dummy node for merged list
    dummy = Node()
    current = dummy
    
    # Pointers for both lists
    reversed_current = reversed_head
    sorted_current = sorted_head
    
    while reversed_current and sorted_current:
        if reversed_current.data < sorted_current.data:
            current.next = reversed_current
            reversed_current = reversed_current.next
        else:
            current.next = sorted_current
            sorted_current = sorted_current.next
        
        current = current.next
    
    # If there are remaining nodes in either list, append them to the merged list
    if reversed_current:
        current.next = reversed_current
    elif sorted_current:
        current.next = sorted_current
    
    return dummy.next

# Example usage:
def create_and_reverse_list(data):
    head = None
    for i in reversed(data):
        head = Node(i, head)
    return head

# Create example lists
data1 = [3, 2, 1]
data2 = [4, 10, 11]

# Reverse and merge lists
reversed_head = create_and_reverse_list(data1)
sorted_head = create_and_sorted_list(data2)  # Assuming this function exists

merged_head = merge_sorted_lists(reversed_head, sorted_head)

def print_list(head):
    while head:
        print(head.data, end=" ")
        head = head.next
    print()

print("Merged List:")
print_list(merged_head)
```

### Analysis of Time and Space Complexity

- **Time Complexity:**
  - Reversing a linked list takes O(n) time where n is the number of nodes in the list.
  - Merging two sorted linked lists takes O(n+m) time where n and m are the numbers of nodes in each list.
  - Therefore, the overall time complexity is O(n+m).

- **Space Complexity:**
  - The space complexity for reversing a linked list is O(1) since we only use a constant amount of space.
  - The space complexity for merging two sorted linked lists is also O(1) since we only need additional pointers and a dummy node.

### Optimal Approach Explanation

The chosen solution is optimal because it:

1. **Efficiently Reverses the Linked List:** Using an iterative approach ensures that we don't incur the overhead of recursive calls or additional data structures that might consume more space and time.

2. **Efficiently Merges Sorted Lists:** By comparing nodes from both lists and adding them in sorted order, we ensure that the merged list remains sorted without requiring additional sorting operations.

3. **Minimal Space Usage:** Both operations use minimal additional space, making them efficient in terms of space complexity.

In summary, this problem requires implementing and manipulating linked lists in an interesting way, requiring efficient algorithms for both reversing and merging operations.