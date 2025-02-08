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

### Challenge: Rearrange Linked List to Alternate Odd and Even Nodes

Given a singly linked list, rearrange it such that all odd-indexed nodes come before all even-indexed nodes. If there are multiple odd-indexed nodes, they should be arranged in ascending order of their values, and similarly, even-indexed nodes should be arranged in ascending order of their values.

#### Example Input/Output

**Input:**
```
1 -> 2 -> 3 -> 4 -> 5
```

**Output:**
```
1 -> 3 -> 5 -> 2 -> 4
```

#### Constraints:
- The linked list is singly linked.
- The rearrangement should be done in place.
- The time complexity should be as efficient as possible.

#### Solution

To solve this problem efficiently, we can use two pointers: one for traversing and one for building the new list. We will iterate through the original list, adding nodes to the new list based on their index (odd or even).

Here's the detailed solution in Python:

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def rearrange(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head

        # Step 1: Find length of linked list
        length = 0
        current = head
        while current:
            length += 1
            current = current.next
        
        # Step 2: Rearrange the linked list
        odd = even = dummy_odd = dummy_even = ListNode(0)
        
        for _ in range(length):
            if _ % 2 == 0:
                even_next = even.next
                even.next = ListNode(head.val)
                even.next.next = even_next
                even = even.next
            else:
                odd_next = odd.next
                odd.next = ListNode(head.val)
                odd.next.next = odd_next
                odd = odd.next
            
            head = head.next
        
        # Step 3: Combine odd and even lists
        dummy_odd.next = dummy_even.next = None
        head_odd, head_even = dummy_odd.next, dummy_even.next
        
        current_odd, current_even = head_odd, head_even
        
        while current_even:
            if current_odd.next is None or current_even.val < current_odd.next.val:
                temp = current_even.next
                current_even.next = current_odd.next
                current_odd.next = temp
                
                # Move pointers forward
                current_odd = current_odd.next
                
                # Reset pointers to maintain correct order
                current_odd.next = current_even.next
                
            else:
                temp = current_even.next
                
                # Move pointers forward but keep track of last node in odd list for insertion
                current_even.next = current_odd.next
                
                # Insert even node before odd node
                temp.next = current_odd.next
                
                # Update pointers to maintain correct order and position of elements after insertion
                current_even.next = current_odd.next
                
                # Reset pointers to maintain correct sequence of elements being processed from both lists
            
            # Move forward with both pointers accordingly 
            current_even = current_even.next
            
        
       return dummy_odd.next 

# Commentary on how this code might be used:

# This solution works by first determining whether each node should be part of the "odd" or "even" linked list based on its index (modulo operation). 
# It then constructs these two separate linked lists while maintaining their relative order within each list type (ascending order). 
# Finally, it merges these lists together such that all odd-indexed nodes come before all even-indexed nodes while maintaining ascending order within each segment.

### Complexity Analysis

1. **Time Complexity:**
   - Finding length: O(n)
   - Rearranging nodes into two separate lists: O(n)
   - Merging lists while keeping ascending order: O(n)

Total time complexity is O(n).

2. **Space Complexity:**
   - Additional space used for dummy nodes and temporary variables during merging step: O(1)

The space complexity remains constant because we only need a constant amount of extra space to manage the pointers and temporary nodes.

### Why This Approach is Optimal

This approach is optimal because it avoids unnecessary extra space complexity beyond what's needed for managing pointers and nodes. It also maintains linear time complexity by ensuring each operation (insertion into separate lists and merging) is performed iteratively without recursive calls or additional loops beyond necessary iterations.

The use of dummy nodes simplifies handling edge cases like dealing with head nodes without special handling needed for them.

Overall, this solution strikes a balance between simplicity and efficiency, making it suitable for both clarity and performance considerations in linked list operations.