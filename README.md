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

### Problem Description: Reorder a Linked List using Two Stacks

#### Problem Statement
Given a linked list, reorder it such that all elements from the second half of the list come first, followed by elements from the first half. The reordering should be done using two stacks.

#### Example Input/Output

```
Input: 
1 -> 2 -> 3 -> 4 -> 5

Output:
3 -> 4 -> 5 -> 1 -> 2
```

#### Constraints
- The linked list must be reordered in place.
- The reordering should be done using two stacks.
- The solution should be implemented efficiently, with both time and space complexity considered.

### Most Efficient Solution (Python)

```python
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def reorderList(head):
    if not head or not head.next or not head.next.next:
        return
    
    # First half from head to mid
    first_half_end = end_of_first_half(head)
    
    # Reverse second half of list
    second_half_start = reverse_list(first_half_end.next)
    
    # Merge two sorted halves with help of two stacks
    merge_two_halves(head, second_half_start)

def end_of_first_half(head):
    slow = fast = head
    while fast.next and fast.next.next:
        slow = slow.next
        fast = fast.next.next
    return slow

def reverse_list(head):
    prev_node = None
    while head:
        next_node = head.next
        head.next = prev_node
        prev_node = head
        head = next_node
    return prev_node

def merge_two_halves(list1, list2):
    while list2:
        temp1, temp2 = list1, list2
        list1 = list2.next
        list2.next = temp1
        temp1.next, temp2 = temp2, list1.next 
        list2 = temp2.next 

# Example usage:
# Create linked list: 1 -> 2 -> 3 -> 4 -> 5
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)

reorderList(head)

# Print reordered linked list:
current_node = head 
while current_node:
     print(current_node.val, end=' ')
     current_node = current_node.next 
```

### Analysis of Complexity

- **Time Complexity**:
  - Reversing the second half of the list using `reverse_list` takes O(n) time.
  - Merging two halves using `merge_two_halves` also takes O(n) time.
  - Therefore, the overall time complexity is O(n).

- **Space Complexity**:
  - We use two stacks (or equivalently, two pointers for reversing) which requires O(n) space.

### Difficulty Rating

### Explanation

The problem requires us to reorder a linked list using two stacks. This involves several steps:
1. **Finding the End of First Half**: We use two pointers (slow and fast) to find the end of the first half in O(n) time.
2. **Reversing Second Half**: We reverse the second half of the list using a standard reverse list algorithm also in O(n) time.
3. **Merging Halves**: We merge these two halves while maintaining their order.

The chosen solution is optimal because it leverages standard techniques for reversing and merging lists efficiently without additional data structures beyond what's required for the problem statement. The trade-off here is space complexity, which is necessary to reverse part of the list efficiently.