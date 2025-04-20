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

**Challenge: Detect and Remove Cycles in a Linked List**

Given a singly linked list, determine if it contains a cycle (i.e., if any node points back to a previous node). If a cycle exists, remove the cycle by merging the two parts of the linked list that form the cycle.

**Example Input/Output:**

- **Input:** `1 -> 2 -> 3 -> 4 -> 5 -> 1` (contains a cycle)
  - **Output:** `1 -> 2 -> 3 -> 4 -> 5`
- **Input:** `1 -> 2 -> 3 -> 4 -> 5` (no cycle)
  - **Output:** `1 -> 2 -> 3 -> 4 -> 5`

### Constraints

- The linked list nodes have a `value` and a `next` pointer.
- No additional data structures like dictionaries or sets are allowed.
- The algorithm should run in O(n) time complexity where n is the number of nodes in the linked list.
- The algorithm should useassistant

### Problem Description

**Challenge: Detect and Remove Cycles in a Linked List**

Given a singly linked list, determine if it contains a cycle (i.e., if any node points back to a previous node). If a cycle exists, remove the cycle by merging the two parts of the linked list that form the cycle.

**Example Input/Output:**

- **Input:** `1 -> 2 -> 3 -> 4 -> 5 -> 1` (contains a cycle)
  - **Output:** `1 -> 2 -> 3 -> 4 -> 5`
- **Input:** `1 -> 2 -> 3 -> 4 -> 5` (no cycle)
  - **Output:** `1 -> 2 -> 3 -> 4 -> 5`

### Constraints

- The linked list nodes have a `value` and a `next` pointer.
- No additional data structures like dictionaries or sets are allowed.
- The algorithm should run in O(n) time complexity where n is the number of nodes in the linked list.
- The algorithm should use minimal space.

### averages

To solve this problem efficiently, we can use Floyd's cycle-finding algorithm (also known as the "tortoise and the hare" algorithm) to detect the presence of a cycle, and then remove it by identifying and merging the two parts of the cycle.

### Solution

#### Detecting a Cycle

We use Floyd's cycle-finding algorithm to detect if there is a cycle in the linked list.

```python
def hasCycle(head):
    if not head or not head.next:
        return False
    
    tortoise = head
    hare = head
    while tortoise and hare and hare.next:
        tortoise = tortoise.next
        hare = hare.next.next
        
        if tortoise == hare:
            return True
    
    return False
```

#### Removing a Cycle

If a cycle is detected, we need to remove it. We can do this by identifying the start and end of the cycle and merging them.

```python
def removeCycle(head):
    if not head or not head.next:
        return head
    
    # Detecting the cycle using Floyd's algorithm
    if not hasCycle(head):
        return head
    
    # Finding the meeting point of the two pointers
    tortoise = head
    hare = head
    while True:
        tortoise = tortoise.next
        hare = hare.next.next
        if tortoise == hare:
            break
    
    # Finding the length of the cycle
    length = 1
    while hare.next == tortoise:
        length += 1
        hare = hare.next
    
    # Moving tortoise to the start of the list and hare to the end of the cycle
    tortoise = head
    hare = hare
    
    # Removing the cycle by merging it with the rest of the list
    while length > 0:
        tortoise = tortoise.next
        length -= 1
    
    # The node after the meeting point will be the start of the merged list
    while tortoise != hare:
        tortoise = tortoise.next
        hare = hare.next
    
    # Setting next pointer of hare to null to break the cycle
    hare.next = None
    
    return head
```

### Analysis

- **Time Complexity:** The time complexity for detecting a cycle using Floyd's algorithm is O(n), where n is the number of nodes in the linked list. The additional operations to remove the cycle also run in O(n) time.
- **Space Complexity:** The space complexity is O(1) as we are using constant space to store the pointers.

### Why This Approach is Optimal

This approach is optimal because it uses Floyd's cycle-finding algorithm