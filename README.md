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

### Challenge: **"Maximize the Sum of Descendants in a Binary Tree"**

**Problem Description:**
Given a binary tree where each node contains a non-negative integer value, determine the maximum sum of the descendants of a given node. The sum of descendants for a node is the sum of all values in its subtree.

**Example Input/Output:**
Consider the following binary tree:
```
    1
   / \
  2   3
 / \
4   5
```
- If we query for the node with value 1, the sum of its descendants would be \(1 + 2 + 4 + 5 = 12\).
- If we query for the node with value 3, the sum of its descendants would be \(3\).

**Constraints:**
- The binary tree is not necessarily a balanced tree.
- Each node's value is a non-negative integer.

**Difficulty Rating: 3**

### Most Efficient Solution in Python:

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maxDescendantSum(self, root):
        def dfs(node):
            if not node:
                return 0, 0  # Return (sum of descendants, value of current node)
            left_sum, _ = dfs(node.left)
            right_sum, _ = dfs(node.right)
            return left_sum + right_sum + node.val

        return dfs(root)[0]
```

**Detailed Explanation of the Algorithm:**

1. **Definition of `TreeNode`:** A simple definition to represent a node in the binary tree.

2. **Solution Class:**
   - The `maxDescendantSum` method uses a helper function `dfs` (depth-first search) to calculate the maximum sum of descendants for any given node.

3. **Helper Function `dfs`:**
   - It recursively traverses the tree.
   - If the current node is `None`, it returns `(0, 0)` indicating no node (sum = 0 and value = 0).
   - It then calculates the sum of descendants for the left and right subtrees and adds the value of the current node to get the total sum.

4. **Return Value:** The function returns the total sum of descendants for the given root.

**Time Complexity Analysis:**
- The time complexity is O(n) where n is the number of nodes in the tree. This is because each node is visited once during the DFS traversal.

**Space Complexity Analysis:**
- The space complexity is O(h) where h is the height of the tree. This is because in the worst case, the recursive call stack will have a depth equal to the height of the tree.

This solution is optimal because it uses a single pass through the tree with a constant amount of extra space for recursion or iteration. It leverages the properties of tree traversal to efficiently compute the sum of descendants for any given node.