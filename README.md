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

### Coding Challenge: "Longest Increasing Path in Binary Tree"

**Problem Description:**
Given a binary tree, find the longest increasing path from root to any leaf node. An increasing path means that for every pair of adjacent nodes in the path, the value of the former node is less than the value of the latter node.

**Example Input/Output:**
```plaintext
Input:
    5
   / \
  4   6
 / \   \
1   3   8

Output:
The longest increasing path is: 1 -> 3 -> 4 -> 5.
The length of the longest increasing path is: 4.
```

**Constraints:**
- The binary tree nodes contain distinct values.
- The binary tree may contain nodes with negative values.

### Most Efficient Solution

To solve this problem, we will use a depth-first search (DFS) approach with a dynamic programming technique to keep track of the longest increasing path encountered at each node.

```python
class Solution:
    def longestIncreasingPath(self, root):
        if not root:
            return 0

        # Define a helper function to perform DFS with dynamic programming
        def dfs(node):
            # If the node's value is not cached, perform DFS and cache it
            if not hasattr(node, 'val'):
                node.val = 1 + max(dfs(node.left), dfs(node.right), key=lambda x: x if x == 1 else float('-inf'))
            return node.val

        # Perform DFS from the root node
        return dfs(root)

# Example usage:
# Constructing the example binary tree
#       5
#      / \
#     4   6
#    / \   \
#   1   3   8

# Creating nodes for the example tree (for illustrative purposes)
# root = TreeNode(5)
# root.left = TreeNode(4)
# root.right = TreeNode(6)
# root.left.left = TreeNode(1)
# root.left.right = TreeNode(3)
# root.right.right = TreeNode(8)

# Running the solution on the example tree (commented out for clarity)
# solution = Solution()
# result = solution.longestIncreasingPath(root)

# Print result (commented out for clarity)
# print("The length of the longest increasing path is:", result)
```

### Detailed Explanation and Complexity Analysis:

#### Algorithm:
1. **Initialization**: If the input `root` is `None`, return `0`.
2. **Define Helper Function `dfs`**:
   - If a node's value is not cached (`not hasattr(node, 'val')`), perform DFS on its left and right subtrees and cache the maximum length of their longest increasing paths.
   - Return the cached value if it exists; otherwise, return `1 + max(dfs(node.left), dfs(node.right), key=lambda x: x if x == 1 else float('-inf'))`.
3. **Perform DFS from Root Node**: Call `dfs(root)` to start traversing from the root.

#### Time Complexity:
- The time complexity of this algorithm is `O(N log N)` where `N` is the number of nodes in the binary tree.
  - Each node is visited once during DFS.
  - The recursive calls for left and right subtrees result in `log N` depth due to the nature of binary trees.

#### Space Complexity:
- The space complexity is primarily due to the recursive call stack which can go up to `log N` in height for balanced trees but may reach `N` in skewed trees.
  - Therefore, the space complexity is approximately `O(log N)` for balanced trees and `O(N)` for highly skewed trees.

### Why This Approach is Optimal:
The approach uses a dynamic programming technique within DFS to efficiently keep track of the longest increasing paths encountered at each node. This ensures that we avoid redundant computations and focus on exploring maximal paths efficiently.

### Difficulty Rating:
This problem requires understanding how to apply dynamic programming within DFS while handling tree traversals. It demands careful management of state (the current node's value) and optimization through caching results from sub-problems. While not extremely challenging like some advanced LeetCode problems, it still requires thoughtful implementation and analysis of time and space complexities.