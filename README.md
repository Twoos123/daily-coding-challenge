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

**Problem: Reconstruct a Binary Search Tree from a Sorted Array**

Given a sorted array of integers, reconstruct a binary search tree where the values of the nodes follow the order specified by the array. The resulting tree should be as balanced as possible.

### Example Input/Output

**Input:** `[1, 2, 3, 4, 5, 6, 7]`

**Output:** A balanced binary search tree where the values are in the order `[1, 2, 3, 4, 5, 6, 7]`.

### Constraints

- The input array is sorted in ascending order.
- The array contains `n` distinct integers.
- The resulting binary search tree should be as balanced as possible.

### Solution

To construct a balanced binary search tree from a sorted array, we can use the approach described below. This approach ensures that the tree is as balanced as possible and maintains the order specified by the array.

```python
class TreeNode:
    def __init__(self, value=0, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

def sortedArrayToBST(nums):
    if not nums:
        return None
    
    # Find the middle index to ensure the tree is balanced
    mid = len(nums) // 2
    
    # Create the root node with the middle value
    root = TreeNode(nums[mid])
    
    # Recursively construct the left and right subtrees with the left and right halves
    # of the array, respectively.
    
    # The left subtree should include all values less than the root's value.
    # The right subtree should include all values greater than the root's value.
    
    root.left = sortedArrayToBST(nums[:mid])
    
    root.right = sortedArrayToBST(nums[mid+1:])
    
    return root

# Example usage:
nums = [1, 2, 3, 4, 5, 6, 7]
root = sortedArrayToBST(nums)

# Perform inorder traversal to verify that values are in sorted order.
def inorderTraversal(root):
    if root:
        inorderTraversal(root.left)
        print(root.value, end=' ')
        inorderTraversal(root.right)

inorderTraversal(root)
```

### Detailed Explanation of the Algorithm

1. **Base Case:**
   - If `nums` is empty, return `None`.

2. **Choosings the Root Node:**
   - Find the middle index of `nums` to ensure that the tree is balanced.
   - Create a new `TreeNode` with the value at this middle index as the root.

3. **Construct Left and Right Subtrees:**
   - Recursively call `sortedArrayToBST` on the left half (`nums[:mid]`) to construct the left subtree.
   - Recursively call `sortedArrayToBST` on the right half (`nums[mid+1:]`) to construct the right subtree.

4. **Assigning Left and Right Subtrees:**
   - Set `root.left` to the constructed left subtree.
   - Set `root.right` to the constructed right subtree.

5. **Return Result:**
   - Return the constructed binary search tree root.

### Analysis of Complexity

#### Time Complexity:
The time complexity is O(n), where n is the number of elements in `nums`. This is because each element in `nums` is visited once during the construction process.

#### Space Complexity:
The space complexity is O(n), where n is the number of elements in `nums`. This is because in the worst case (a skewed tree), we might need to store all nodes in our call stack.

### Optimality
This approach ensures that we construct a balanced binary search tree, which is essential for maintaining efficient search, insertion, and deletion operations. The use of recursion allows us to easily handle arrays of any size while ensuring that no additional memory storage beyond what's needed for recursion is used.

---

### Difficulty Rating: This problem requires understanding both the properties of balanced binary search trees and how recursion can be used to construct such trees efficiently. The solution involves finding the middle element of the array and recursively constructing left and right subtrees, making it moderately challenging but still accessible for those familiar with basic tree operations and recursion techniques.