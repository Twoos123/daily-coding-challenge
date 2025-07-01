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

### Problem Description

**Challenge: Detecting Cycles in a LinkedList**

Given a singly or doubly linked list, write an algorithm to detect whether the linked list contains a cycle. A cycle is defined as any node that points back to a previous node in the list, either directly or indirectly.

### Example Input/Output

**Input:** A singly or doubly linked list with nodes containing values and references to other nodes.
**Output:** True if the linked list contains a cycle; False otherwise.

### Constraints

- The linked list can be either singly or doubly linked.
- Each node in the linked list should have a reference to its next node(s).
- The list can contain any number of nodes including zero.

### Most Efficient Solution in Python

To detect a cycle in a singly linked list, we can use Floyd's Tortoise and Hare algorithm. For doubly linked lists, the approach remains similar but we need to traverse both forward and backward directions.

#### Singly Linked List (Floyd's Cycle Detection Algorithm)

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def hasCycle(head):
    if not head or not head.next:
        return False
    
    slow = head
    fast = head
    
    while fast and fast.next:
        slow = slow.next  # Move one step at a time
        fast = fast.next.next  # Move two steps at a time
        
        if slow == fast:
            return True
    
    return False

# Example usage:
node1 = ListNode(1)
node2 = ListNode(2)
node3 = ListNode(3)

node1.next = node2
node2.next = node3
node3.next = node1  # Creating a cycle

print(hasCycle(node1))  # Output: True

# Example without cycle:
node1.next = node2
node2.next = node3
node3.next = None

print(hasCycle(node1))  # Output: False
```

#### Doubly Linked List

For doubly linked lists, we need to traverse both forward and backward directions to detect cycles efficiently.

```python
class DoublyListNode:
    def __init__(self, val=0, prev=None, next=None):
        self.val = val
        self.prev = prev
        self.next = next

def hasCycle(doubly_head):
    if not doubly_head or not doubly_head.next:
        return False
    
    slow = doubly_head
    fast = doubly_head
    
    while fast and fast.next:
        slow = slow.next  # Move one step forward
        fast = fast.next.next  # Move two steps forward
        
        if slow == fast:
            return True
        
        # If we are at an even length, move one step backward for each forward step taken by slow
        if slow == doubly_head or slow.prev == doubly_head:
            slow = slow.prev
        
        if fast == doubly_head or fast.prev == doubly_head:
            fast = fast.prev
    
    return False

# Example usage:
node1 = DoublyListNode(1)
node2 = DoublyListNode(2)
node3 = DoublyListNode(3)

node1.prev = None
node2.prev = node1 
node3.prev = node2 

node1.next = node2 
node2.next = node3 
node3.next = node1 # Creating a cycle

print(hasCycle(node1))  # Output: True

# Example without cycle:
node4 = DoublyListNode(4)
node5 = DoublyListNode(5)
node6= DoublyListNode(6)

node1.prev=None  
node4.prev=None  
node5.prev=None  
node6.prev=None  

node1.next=node4   
node4.next=node5    
node5.next=node6    

print(hasCycle(node1)) # Output :False 

```

### Analysis of Complexity

- **Time Complexity:** The algorithm has a linear time complexity of O(n), where n is the number of nodes in the linked list. This is because in the worst case, we need to visit each node once.
- **Space Complexity:** The space complexity is O(1), as we only use a constant amount of space to keep track of the slow and fast pointers.

### Explanation of Optimal Approach

The Floyd's Tortoise and Hare algorithm is optimal for detecting cycles in singly or doubly linked lists because it converges to a meeting point if a cycle exists and continues traversing otherwise. This approach is efficient due to its simplicity and linear time complexity.

For doubly linked lists, moving one step forward and one step backward (if necessary) ensures that we cover all possible paths in a cycle detection scenario.

### Trade-offs

There are no significant trade-offs between time and space complexity in this approach. The algorithm is optimal in both aspects.