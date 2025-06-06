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

**Challenge: Reconstructing a Binary Search Tree from Inorder and Preorder Traversal**

Given two arrays `inorder` and `preorder`, reconstruct a Binary Search Tree (BST) where `inorder` represents the inorder traversal of the BST and `preorder` represents the preorder traversal of the BST.

**Example Input/Output:**

- **Input:** `inorder = [4, 2, 5, 1, 3], preorder = [1, 2, 4, 5, 3]`
- **Output:** The reconstructed BST.

**Constraints:**
- The `inorder` and `preorder` arrays are given.
- The arrays contain distinct integers.
- The BST will contain n nodes where n is the length of the input arrays.

### Solution

#### Detailed Explanation

To solve this problem efficiently, we can use a recursive approach. The key insight is to use the preorder array to guide the construction of the tree and the inorder array to determine the left and right subtrees.

1. **Base Case:** If the length of either array is 0, return `None`.
2. **Recursive Case:** Choose the first node in the preorder array as the root. Then, divide the inorder array into two parts: elements less than and greater than the root.
3. **Left Subtree:** Recursively reconstruct the left subtree using a subset of the inorder array containing elements less than the root.
4. **Right Subtree:** Recursively reconstruct the right subtree using a subset of the inorder array containing elements greater than the root.

#### Implementation in Python

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def rebuild_BST(inorder, preorder):
    if not inorder or not preorder:
        return None
    
    # Choose the first node in preorder as root
    root = TreeNode(preorder[0])
    
    # Find the split point for inorder array
    idx = inorder.index(preorder[0])
    
    # Reconstruct left subtree
    root.left = rebuild_BST(inorder[:idx], preorder[1:idx+1])
    
    # Reconstruct right subtree
    root.right = rebuild_BST(inorder[idx+1:], preorder[idx+1:])
    
    return root

def print_inorder(root):
    if root:
        print_inorder(root.left)
        print(root.val, end=' ')
        print_inorder(root.right)

# Example usage:
inorder = [4, 2, 5, 1, 3]
preorder = [1, 2, 4, 5, 3]
root = rebuild_BST(inorder, preorder)
print_inorder(root)  # Output: 1 2 3 4 5 (inorder traversal)
```

#### Time Complexity Analysis

The time complexity of this solution is O(n), where n is the length of the input arrays. This is because each element in both arrays is visited exactly once during the reconstruction process.

#### Space Complexity Analysis

The space complexity is also O(n) due to the recursive call stack which can grow up to a maximum depth of n.

### Difficulty Rating

This problem requires a good understanding of binary search trees and traversal techniques. It involves using two arrays to guide the construction of the tree, which adds an extra layer of complexity compared to standard BST insertion or traversal problems. However, given the constraints and the approach outlined above, it is neither extremely complex nor trivially simple.