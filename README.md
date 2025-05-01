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

### Problem Description: **Find Kth Node from End of LinkedList**

Given the head of a singly linked list, find and return the Kth node from the end of the linked list.

#### Example Input/Output

- **Input**: Head of a singly linked list, K (an integer)
- **Output**: Node at the Kth position from the end of the linked list

#### Constraints

- The linked list can be empty (i.e., head is `None`).
- K is within the bounds of the length of the linked list.

#### Analysis

This problem requires traversing the linked list to find the Kth node from the end. The most efficient approach is to use two pointers, one that moves K steps ahead and another that moves at normal speed. When the ahead pointer reaches the end, the slower pointer will be at the Kth position from the end.

### Solution in Python

```python
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def findKthNodeFromEnd(head: ListNode, k: int) -> ListNode:
    # Initialize two pointers, one k steps ahead and one at the start
    ahead = head
    for _ in range(k):
        if ahead is None:
            raise ValueError("K is larger than the length of the list")
        ahead = ahead.next
    
    # Move both pointers at the same pace until ahead pointer reaches the end
    behind = head
    while ahead is not None:
        ahead = ahead.next
        behind = behind.next
    
    return behind

# Example usage:
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)

kth_node = findKthNodeFromEnd(head, 2)  # Output: Node with value 4
```

### Algorithm Explanation

1. **Initialization**: The function initializes two pointers, `ahead` and `behind`, both pointing to the head of the list. The `ahead` pointer moves K steps ahead.
2. **Validation**: If `ahead` reaches `None`, it means K is larger than the length of the list, so we raise an error.
3. **Traversal**: Both pointers move at the same pace until `ahead` reaches the end of the list. At this point, `behind` will be K steps from the end.
4. **Return**: The function returns the node at Kth position from the end.

### Time and Space Complexity

- **Time Complexity**: O(L), where L is the length of the linked list.
  - The traversal takes linear time because each node is visited once.
  
- **Space Complexity**: O(1), as no additional space is used other than a constant amount for pointers.

### Why This Approach is Optimal

This approach is optimal because it uses a constant amount of space and has a linear time complexity. Using two pointers allows us to traverse the list in one pass, making it more efficient than other methods like recursive approaches that could potentially visit each node multiple times.

### Trade-offs

There are no significant trade-offs between time and space in this approach. However, for very large linked lists where memory constraints are critical, other methods might be necessary, but they would likely involve more complex implementations.

### Difficulty Rating

This problem is moderately challenging because it requires understanding how to use two pointers effectively for traversing a linked list and handling edge cases like invalid values for K.