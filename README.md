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

**Unique Root is Unique Tree**

Given an unrooted tree represented as a set of nodes and their connections, determine if the tree can be uniquely rooted such that the resulting rooted tree is a Binary Search Tree (BST). If it can be uniquely rooted, return True; otherwise, return False.

### Example Input/Output

**Input:**
```python
connections = [
    {'node1': 'A', 'node2': 'B'},
    {'node1': 'A', 'node2': 'C'},
    {'node1': 'B', 'node2': 'D'}
]
```

**Output:**
```python
True
```

### Constraints

- The input connections represent an unrooted tree.
- Each connection is between two distinct nodes.
- The resulting rooted tree must be a BST.

### The Most Efficient Solution in Python

The problem involves determining whether the given unrooted tree can be uniquely rooted to form a BST. We will use a depth-first search (DFS) approach to traverse the tree and check if it satisfies the BST property.

```python
def is_unique_root_bst(connections):
    # Function to perform DFS and check if a subtree is BST
    def is_bst(node, min_val=float('-inf'), max_val=float('inf')):
        if not node:
            return True
        
        if node not in connections:
            return False
        
        for neighbor in connections[node]:
            if neighbor != node:
                # Recursively check left and right subtrees
                left = is_bst(neighbor, min_val, node)
                right = is_bst(neighbor, node, max_val)
                
                # If any subtree is not a BST, return False
                if not left or not right:
                    return False
                
                # Update the node value based on the smallest and largest values in its subtree
                if connections[node][neighbor] < node:
                    min_val = min(min_val, connections[node][neighbor])
                if connections[node][neighbor] > node:
                    max_val = max(max_val, connections[node][neighbor])
        
        return True
    
    # Check if any node can be the root of the tree
    for node in connections:
        if is_bst(node):
            return True
    
    return False

# Example usage:
connections = {
    'A': {'B', 'C'},
    'B': {'D'},
    'C': set(),
    'D': set()
}

print(is_unique_root_bst(connections))  # Output: True
```

### Analysis

**Time Complexity:**
The time complexity of this solution is O(V + E), where V is the number of nodes and E is the number of edges, because we perform a DFS traversal of the tree once.

**Space Complexity:**
The space complexity is O(V), as we use a recursive call stack that can go up to V levels deep in the worst case.

### Explanation

1. **DFS Traversal:** We perform a DFS traversal on each node to determine if it can be the root of a BST.
2. **BST Check:** For each potential root node, we recursively check if its subtrees satisfy the BST property.
3. **Node Value Update:** We update the smallest and largest values seen in each subtree to ensure that they comply with BST ordering.
4. **Uniqueness Check:** If any node can be rooted as a valid BST, we return True; otherwise, we continue checking other potential roots.

This approach ensures that we efficiently check all possible rootings of the given unrooted tree and verify if they form a unique BST.

### Difficulty Rating
This problem requires a good understanding of tree traversals and the properties of Binary Search Trees. It involves implementing a DFS traversal to check multiple subtrees efficiently, making it moderately challenging but not extremely complex like a hard LeetCode problem.