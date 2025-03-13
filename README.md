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

**DIFFICULTY: 4**

## Problem Description

**Validating a Balanced Binary Search Tree**

Given a binary tree, determine if it is a valid binary search tree (BST). A valid BST has the following properties:
1. The left subtree of a node contains only nodes with keys less than the node's key.
2. The right subtree of a node contains only nodes with keys greater than the node's key.
3. For any node, all elements in the left subtree must be less than the node, and all elements in the right subtree must be greater than the node.

### Example Input/Output

**Input**
```python
   4
 /   \
2     5
  / \   \
 /   \   \
1     3   6
```

**Output**
- True: The given binary tree is a valid BST.
- False: The given binary tree is not a valid BST.

### Constraints

- The binary tree is not necessarily balanced.
- The tree can be empty.

## Constraints Analysis

The problem requires checking if a given binary tree satisfies the properties of a BST. This involves traversing the tree and ensuring that all nodes adhere to the BST properties.

## Solution Explanation

The most efficient approach to solve this problem is to use an in-order traversal and check if the result is a sorted sequence. This method leverages the inherent property that an in-order traversal of a valid BST will yield a sorted sequence of node values.

### Implementation

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def isValidBST(root):
    def inOrderTraversal(node, lower=float('-inf'), upper=float('inf')):
        if not node:
            return True
        
        # Check if current node's value is out of range [lower, upper]
        if node.val <= lower or node.val >= upper:
            return False
        
        # Recursively check left and right subtrees with updated ranges
        return (inOrderTraversal(node.left, lower, node.val) and 
                inOrderTraversal(node.right, node.val, upper))
    
    return inOrderTraversal(root)

# Example usage:
# Constructing the given BST
#      4
#     / \
#    2   5
#   / \   \
#  1   3   6

root = TreeNode(4)
root.left = TreeNode(2)
root.right = TreeNode(5)
root.left.left = TreeNode(1)
root.left.right = TreeNode(3)
root.right.right = TreeNode(6)

print(isValidBST(root)) # Output: True
```

### Time and Space Complexity Analysis

- **Time Complexity**: The time complexity of this solution is O(N), where N is the number of nodes in the binary tree. This is because we potentially visit each node once during the in-order traversal.
- **Space Complexity**: The space complexity is O(H), where H is the height of the tree. This is because in the worst case scenario (a skewed tree), we might use O(N) space for recursive call stack.

## Why This Approach is Optimal

Using an in-order traversal ensures that we check each subtree's validity relative to its parent node's value, making it straightforward to verify if all nodes satisfy BST properties. This method does not require balancing or maintaining additional data structures, making it efficient both in terms of time and space complexity.

This challenge requires understanding and implementing a technique for validating whether a given binary tree adheres to BST constraints, which involves traversing and checking node values against sorted sequences. The difficulty level is rated at **4** due to its requirement for understanding traversal methods and ensuring property checks across all nodes in a non-balanced tree context.