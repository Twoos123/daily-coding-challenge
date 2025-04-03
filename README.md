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

### Challenge: "Maximum Sum Path in N-ary Tree"

**Problem Description:**

Given an N-ary tree, find the maximum sum path from the root to any leaf node. This path can include nodes from any level of the tree, and the sum of the path should be maximized.

**Example Input/Output:**

Input:
```
       1
      / \
     3   2
    / \   \
   4   5   6
  / \
 7   8
```

Output: The maximum sum path is `1 -> 3 -> 4 -> 7` with a sum of `20`.

**Constraints:**
1. The N-ary tree is represented as a list of nodes where each node contains a value and a list of its children.
2. The input tree is valid (i.e., no cycles and all nodes have unique values).
3. The path can start from any node in the tree.

### Most Efficient Solution:

To solve this problem efficiently, we can use a depth-first search (DFS) approach with backtracking to explore all possible paths and keep track of the maximum sum encountered.

**Solution in Python:**

```python
class Node:
    def __init__(self, value, children=None):
        self.value = value
        self.children = children if children else []

def max_sum_path(root):
    # Base case: If the tree is empty, return 0
    if not root:
        return 0
    
    # Initialize maximum sum with positive infinity
    max_sum = float('-inf')
    
    # Helper function for DFS with backtracking
    def dfs(node, current_sum):
        nonlocal max_sum
        
        # Update current sum with node's value
        current_sum += node.value
        
        # If the node is a leaf node, update max_sum if necessary
        if not node.children:
            max_sum = max(max_sum, current_sum)
        
        # Recursively explore children nodes
        for child in node.children:
            dfs(child, current_sum)
    
    dfs(root, 0)
    
    return max_sum

# Example usage:
# Constructing the example N-ary tree
root = Node(1)
root.children = [Node(3), Node(2)]
root.children[0].children = [Node(4), Node(5)]
root.children[0].children[0].children = [Node(7), Node(8)]
root.children[1].children = [Node(6)]

print(max_sum_path(root))  # Output should be 20
```

### Analysis:

**Time Complexity:** The time complexity of this solution is O(N * M), where N is the number of nodes in the tree and M is the maximum number of children for any node. This is because each node may be visited multiple times during DFS traversal.

**Space Complexity:** The space complexity is O(H), where H is the height of the tree. This includes both recursion stack space and potential extra space needed for storing temporary data during DFS.

### Why This Approach is Optimal:

1. **DFS Traversal:** Using DFS allows us to explore all possible paths efficiently by traversing down the tree recursively.
2. **Backtracking:** By keeping track of the current sum in each recursive call, we can ensure that we consider all possible combinations of nodes along the path.
3. **Efficient Handling of Leaf Nodes:** When we reach a leaf node, we update our maximum sum immediately since we have exhausted all possibilities from that node.

This approach ensures that we find the maximum sum path efficiently while handling large and complex N-ary trees effectively.

### Difficulty Rating: 4

This problem requires a good understanding of DFS traversal techniques along with careful handling of backtracking logic to ensure that all possible paths are explored optimally. The challenge lies in handling leaf nodes correctly while keeping track of maximum sums efficiently, making it moderately difficult like many LeetCode problems rated around difficulty level 4.