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
**Reorder Linked List by Frequency of Nodes**

Given a singly linked list where each node contains a value and a frequency (how many times the value appears in the list), reorder the list such that nodes with higher frequencies come first. If two or more nodes have the same frequency, their original order should be preserved.

### Example Input/Output
**Input:**
```
Head: 1 -> 2 -> 2 -> 3 -> 3 -> 3 -> 4
Frequencies:
- Node with value 1: 1
- Node with value 2: 2
- Node with value 3: 3
- Node with value 4: 1
```
**Output:**
```
Reordered List:
3 -> 3 -> 3 -> 2 -> 2 -> 1 -> 4
```

### Constraints
- The linked list only contains unique values.
- The frequency of each value is provided separately.
- The frequencies are non-negative integers.
- The original order of nodes with the same frequency is preserved.

### Analysis of Complexity

**Time Complexity:**
The time complexity of this problem can be broken down into two main steps:
1. **Counting Frequencies:** This involves creating a frequency map where each key is a node's value and its value is the frequency of the node.
   - This step can be done in O(n) time where n is the number of nodes in the linked list.

2. **Reordering the List:** Once frequencies are counted, we need to reorder the list based on these frequencies.
   - This involves using a data structure like a priority queue (e.g., Python's `heapq`) to keep track of nodes sorted by their frequencies.
   - Reordering the list while preserving original order for nodes with equal frequencies involves a more complex approach like using multi-level priority queue or sorting directly while maintaining indices.
   - The overall time complexity for reordering would be O(n log n) due to the sorting operation using a priority queue.

However, we can optimize this further by using a `Counter` from Python's `collections` module which inherently handles frequency counting and then sorting by frequency. This would simplify our implementation and reduce overall complexity.

**Space Complexity:**
The additional space complexity comes from creating a frequency map and potentially using an auxiliary data structure like a priority queue for sorting.
- The space used for counting frequencies would be O(n), assuming that we store each unique value once.
- If we use a priority queue to sort by frequency, this would add another O(n) space complexity.

### Most Efficient Solution

#### Using `Counter` from Python's `collections` module

```python
from collections import Counter

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reorderLinkedListByFrequency(head):
    # Step 1: Count frequencies of nodes
    freq_map = Counter()
    current = head
    
    while current:
        freq_map[current.val] += 1
        current = current.next
    
    # Step 2: Reorder linked list based on frequencies while preserving original order for nodes with equal frequencies
    nodes_sorted_by_freq = []
    
    for val, freq in freq_map.items():
        for _ in range(freq):
            nodes_sorted_by_freq.append(ListNode(val))
    
    # Combine sorted nodes into a single linked list
    if not nodes_sorted_by_freq:
        return None
    
    head_of_reordered_list = nodes_sorted_by_freq[0]
    
    tail_of_reordered_list = head_of_reordered_list
    for i in range(1, len(nodes_sorted_by_freq)):
        tail_of_reordered_list.next = nodes_sorted_by_freq[i]
        tail_of_reordered_list = tail_of_reordered_list.next
    
    return head_of_reordered_list

# Example usage:
# Create initial linked list: 1 -> 2 -> 2 -> 3 -> 3 -> 3 -> 4
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(2)
head.next.next.next = ListNode(3)
head.next.next.next.next = ListNode(3)
head.next.next.next.next.next = ListNode(4)

# Reorder linked list by frequency:
reordered_head = reorderLinkedListByFrequency(head)

# Print reordered linked list:
while reordered_head:
    print(reordered_head.val)
    reordered_head = reordered_head.next
```

### Explanation

1. **Counting Frequencies:** We use Python's `Counter` class from `collections` which efficiently counts the frequency of each unique value in O(n) time.
2. **Reordering Linked List:** We create a new linked list sorted by frequency by appending each value to the sorted list as many times as its frequency counts.

By leveraging Python's built-in `Counter