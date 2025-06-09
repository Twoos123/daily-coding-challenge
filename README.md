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

### Challenge: Reconstructing a Binary Search Tree from Inorder and Level Order Traversal

#### Problem Description

Given an inorder traversal and a level order traversal of a binary search tree, reconstruct the original binary search tree. The inorder traversal visits nodes in ascending order, while the level order traversal visits nodes level by level from left to right.

#### Example Input/Output

Input:
- Inorder Traversal: `[5, 3, 7, 2, 4, 6, 8]`
- Level Order Traversal: `[[3], [2, 5], [4], , , ]`

Output:
```
      5
     / \
    3   7
   / \   \
  2   4   8
 / \
3   6
```

#### Constraints

- The binary search tree is non-empty.
- The inorder traversal and level order traversal are given.

#### Complexity Analysis

The problem involves reconstructing a binary search tree from two traversals. We can solve this problem by using a combination of inorder traversal and level order traversal.

1. **Inorder Traversal**: This gives us the order of nodes in ascending order when traversed left-root-right.
2. **Level Order Traversal**: This gives us the nodes at each level from left to right.

The optimal approach involves using these two pieces of information to construct the tree.

#### Solution

```python
from collections import deque

class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def reconstruct_bst(inorder, level_order):
    if not inorder:
        return None

    # Find the root node using the first element of inorder traversal
    root_val = inorder[0]
    root = Node(root_val)

    # Find the index of the root value in inorder traversal
    idx = inorder.index(root_val)

    # Process nodes before the root using level order traversal
    left_inorder = inorder[:idx]
    right_inorder = inorder[idx + 1:]

    # Construct left subtree using level order traversal
    queue = deque([node for node in level_order[0] if node.val < root_val])
    
    if queue:
        left_subtree_root = reconstruct_bst(left_inorder, level_order[1:])
        root.left = left_subtree_root
    
    # Construct right subtree using level order traversal
    queue = deque([node for node in level_order[0] if node.val > root_val])
    
    if queue:
        right_subtree_root = reconstruct_bst(right_inorder, level_order[1:])
        root.right = right_subtree_root

    return root

# Example usage:
inorder = [5, 3, 7, 2, 4, 6, 8]
level_order = [[[3], [2, 5], [4], [7], [6], [8]]]
root = reconstruct_bst(inorder, level_order)

# Print reconstructed tree (optional)
def print_tree(root):
    if root:
        print(root.val)
        print_tree(root.left)
        print_tree(root.right)

print_tree(root)
```

#### Explanation

1. **Initialization**: Find the root node using the first element of `inorder`.
2. **Index Finding**: Determine the index of the root value in `inorder`.
3. **Left Subtree Construction**: Use elements from `level_order` that are less than the root value to construct the left subtree recursively.
4. **Right Subtree Construction**: Use elements from `level_order` that are greater than the root value to construct the right subtree recursively.

#### Time Complexity

- The function processes each node in the inorder traversal once.
- For each node in level order traversal, we check if it is less than or greater than the current node and add it to either the left or right queue respectively.
  
Thus, the overall time complexity is O(n), where n is the total number of nodes in both traversals combined.

#### Space Complexity

- The space complexity is O(n) for storing nodes in queues and recursion stack.

This approach ensures that we use both traversals efficiently and reconstructs the BST correctly.

****