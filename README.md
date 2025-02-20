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

Difficulty: ⭐⭐⭐⭐ (4/5)

****

### Problem Description: Merging Sorted Linked Lists

Given two singly linked lists, both sorted in ascending order, merge them into a single sorted linked list. The resulting linked list should also be sorted in ascending order. You can modify the given linked lists as needed to merge them.

#### Example Input/Output:

**Input:**
- First Linked List: `1 -> 2 -> 4 -> 5`  
- Second Linked List: `3 -> 6 -> 7`

**Output:**
- Merged Linked List: `1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7`

#### Constraints:
- Both linked lists are singly linked lists.
- Elements in both linked lists are unique and sorted in ascending order.
- The result should be a new linked list.

### Solution Implementation

```python
class ListNode:
    def __init__(self, value=0, next=None):
        self.val = value
        self.next = next

def merge_sorted_lists(list1, list2):
    # Create a dummy node to simplify the merging process
    dummy = ListNode()
    current = dummy

    # Initialize pointers for both lists
    p1 = list1
    p2 = list2

    # Merge smaller elements first
    while p1 and p2:
        if p1.val < p2.val:
            current.next = p1
            p1 = p1.next
        else:
            current.next = p2
            p2 = p2.next
        current = current.next

    # If there are remaining nodes in either list, append them
    if p1:
        current.next = p1
    elif p2:
        current.next = p2

    # Return the merged list (excluding the dummy node)
    return dummy.next

# Example usage
# Create nodes for the first linked list: 1 -> 2 -> 4 -> 5
list1 = ListNode(1)
list1.next = ListNode(2)
list1.next.next = ListNode(4)
list1.next.next.next = ListNode(5)

# Create nodes for the second linked list: 3 -> 6 -> 7
list2 = ListNode(3)
list2.next = ListNode(6)
list2.next.next = ListNode(7)

# Merge the two linked lists
merged_list = merge_sorted_lists(list1, list2)

# Print the merged linked list (in reverse for clarity)
while merged_list:
    print(merged_list.val, end=' ')
    merged_list = merged_list.next
```

### Analysis:

- **Time Complexity:** O(n + m) where n and m are the lengths of the two input linked lists. This is because we traverse both lists once and merge them.
- **Space Complexity:** O(1) because we only use a constant amount of extra space to store pointers and temporary nodes.

This approach ensures that we handle each element from both lists in a single pass, resulting in optimal time complexity. The use of a dummy node simplifies edge cases like handling empty lists or ensuring proper termination of the merging process.

### Difficulty Rating:
The difficulty rating for this problem is 4 because it requires understanding how to merge two sorted linked lists efficiently while maintaining the sorted order. This involves managing pointers correctly and handling edge cases properly, which can be challenging but not excessively so when compared to more complex linked list problems.