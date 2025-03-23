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

**Closest K Values in a Binary Search Tree**

Given a binary search tree (BST) and a target value, find the k values in the BST that are closest to the target value. The values can be returned in any order, and it is guaranteed that there is a unique set of k values in the tree that are closest to the target.

### Example Input/Output

#### Example BST
```
    4
   / \
  2   6
 / \   \
1   3   7

Target: 5
k: 3
Output: [4, 3, 7]
```

### Constraints

- The binary search tree must be a valid BST.
- The target value must be within the range of node values in the BST.
- The number of closest values (k) is a positive integer.

### The Most Efficient Solution

To solve this problem efficiently, we use a modified in-order traversal of the BST. This approach ensures that we visit nodes in ascending order while maintaining the ability to stop early and track the closest values.

#### Solution in Python

```python
class Solution:
    def closestKValues(self, root, target, k):
        self.ans = []
        self.target = target
        self.k = k
        
        def inOrder(node):
            if not node:
                return
            
            # Traverse left subtree if target < current node value
            if self.target < node.val:
                inOrder(node.left)
            else:
                # Add current node to result list if not full or if closer than current front
                if len(self.ans) < k or abs(self.target - node.val) < abs(self.target - self.ans[-1]):
                    self.ans.append(node.val)
                    if len(self.ans) > k:
                        self.ans.pop(0)
                inOrder(node.right)
        
        inOrder(root)
        
        return self.ans
```

#### Detailed Explanation of the Algorithm

1. **Initialization**:
   - The `closestKValues` method initializes three variables: `self.ans` for storing the result, `self.target` for storing the target value, and `self.k` for storing the count of closest values.
   
2. **In-Order Traversal**:
   - A helper function `inOrder` is defined to perform in-order traversal of the BST.
   - If the target value is less than the current node's value, it traverses the left subtree.
   - Otherwise, it checks if adding the current node to `self.ans` is necessary based on whether `self.ans` is full (`k` elements) or if adding this node makes it closer than the current front element of `self.ans`.

3. **Tracking Closest Values**:
   - During traversal, it maintains a list (`self.ans`) with at most `k` elements that are closest to the target value.
   - If `self.ans` is not full and adding this node makes it closer than the current front element, it adds this node and removes the front element if it exceeds `k`.

4. **Returning Result**:
   - After completing traversal, it returns `self.ans`, which contains exactly `k` values closest to the target value in any order.

#### Time and Space Complexity

- The time complexity is O(N), where N is the number of nodes in the BST. This is because in the worst case, we visit each node exactly once.
- The space complexity is O(k), as we need to keep track of up to k values at any given time.

#### Why This Approach is Optimal

This approach leverages in-order traversal to efficiently find closest values. By using a dynamic list (`self.ans`) that stops early when necessary and maintains only k elements, we ensure both time and space efficiency.

### Difficulty Rating

This problem requires efficient use of data structures and algorithms to traverse a BST while maintaining a running set of closest values. It necessitates understanding how to optimize both time and space complexity, making it challenging but not extremely difficult like some advanced LeetCode problems.