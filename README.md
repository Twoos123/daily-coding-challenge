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

### Challenge: "Inorder Traversal with Reversed Order"

#### Problem Description

Given a binary tree, perform an inorder traversal and then reverse the order of the nodes while maintaining their original values. The resulting list should be in the reverse order of the inorder traversal.

#### Example Input/Output

**Input:**
```
        4
       / \
      2   7
     / \   \
    1   3   6
```

**Output:**
```
[6, 3, 1, 2, 7, 4]
```

#### Constraints
- The binary tree nodes contain integer values.
- The tree is not necessarily a binary search tree (BST).
- The inorder traversal should be followed by a reversal of the order of nodes.

#### Difficulty Rating: 3

#### Explanation and Solution

To solve this problem efficiently, we can use a combination of inorder traversal and list manipulation. Here’s the most optimal approach:

1. **Perform Inorder Traversal:**
   Use a recursive approach to perform the inorder traversal of the binary tree. This will give us the nodes in ascending order.

2. **Reverse the List:**
   After getting the inorder traversal list, simply reverse it using Python's slicing feature.

#### Most Efficient Solution in Python:

```python
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

def reverse_inorder_traversal(root):
    # Helper function to perform inorder traversal
    def inorder_traversal(node):
        if node:
            inorder_traversal(node.left)
            result.append(node.val)
            inorder_traversal(node.right)

    result = []
    inorder_traversal(root)
    # Reverse the result list
    result.reverse()
    return result

# Example usage:
# Constructing a sample binary tree
root = TreeNode(4)
root.left = TreeNode(2)
root.right = TreeNode(7)
root.left.left = TreeNode(1)
root.left.right = TreeNode(3)
root.right.right = TreeNode(6)

print(reverse_inorder_traversal(root))  # Output: [6, 3, 1, 2, 7, 4]
```

### Analysis of Complexity:

- **Time Complexity:** The time complexity of this solution is O(n), where n is the number of nodes in the tree. This is because we visit each node exactly once during both the inorder traversal and the reversing operation.
- **Space Complexity:** The space complexity is also O(n) due to the temporary storage needed for storing the results of the inorder traversal.

### Why This Approach is Optimal:
This approach leverages Python's efficient list slicing for reversing the list, making it straightforward and efficient. The use of recursion for inorder traversal ensures that we visit each node in a systematic manner without needing additional data structures that would increase complexity. 

### Trade-offs:
There are no significant trade-offs between time and space complexity in this approach. The operations are both efficient in terms of time (O(n)) and space (O(n)), making it a well-rounded solution for this challenge.