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

### Challenge: "In-Order Sum of Unique Binary Search Trees"

**Problem Description:**
Given an integer `n`, generate all structurally unique binary search trees (BSTs) that can be constructed with `n` uniquely valued nodes. For each unique BST, calculate the sum of all nodes in the BST and find the maximum in-order sum among these unique BSTs.

**Example Input/Output:**
- **Input:** `n = 3`
- **Output:** Maximum in-order sum of unique BSTs

**Constraints:**
- The binary search tree must be constructed with `n` unique node values.
- The in-order sum is calculated by summing all nodes in each unique BST.
- The maximum in-order sum should be determined from all generated unique BSTs.

### Solution

To solve this problem, we need to generate all unique BSTs and then calculate their in-order sums. The maximum in-order sum will be our final answer.

1. **Generate Unique BSTs:**
   - The number of unique BSTs for `n` nodes is given by the `n`th Catalan number, `C_n`.
   - We can use recursion to generate these trees by considering each node as a potential root and attaching all possible left and right subtrees.

2. **Calculate In-Order Sum of Each BST:**
   - For each generated BST, perform an in-order traversal to sum all nodes.
   - The in-order traversal visits nodes in ascending order (left -> root -> right), making it efficient for calculating sums.

3. **Find Maximum In-Order Sum:**
   - Compare the in-order sums of all generated BSTs to find the maximum sum.

### Implementation in Python

```python
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

def generate_trees(n, left=0, right=n):
    if left > right: return [None]
    if left == right: return [TreeNode(left)]
    
    all_trees = []
    
    for i in range(left, right + 1):
        left_trees = generate_trees(n, left, i - 1)
        right_trees = generate_trees(n, i + 1, right)
        
        for left_tree in left_trees:
            for right_tree in right_trees:
                root = TreeNode(i)
                root.left = left_tree
                root.right = right_tree
                all_trees.append(root)
                
    return all_trees

def in_order_sum(root):
    if root is None: return 0
    return root.val + in_order_sum(root.left) + in_order_sum(root.right)

def max_in_order_sum(n):
    all_bsts = generate_trees(n)
    
    max_sum = float('-inf')
    
    for bst in all_bsts:
        total_sum = in_order_sum(bst)
        
        if total_sum > max_sum:
            max_sum = total_sum
            
    return max_sum

# Example usage
n = 3
print(max_in_order_sum(n))
```

### Analysis of Complexity

1. **Time Complexity:**
   - Generating all unique BSTs involves recursive calls with a branching factor proportional to `n`. The number of such calls is related to the `n`th Catalan number, `C_n`, which makes the overall time complexity approximately `O(n * C_n)`.
   - Calculating the in-order sum for each BST involves traversing the tree, which takes `O(n)` time where `n` is the number of nodes in the BST.
   - Comparing in-order sums across all generated BSTs involves iterating through each BST once, adding another `O(C_n)` term for checking sums.

Thus, the overall time complexity is approximately `O(n * C_n)`, where `C_n` is the `n`th Catalan number.

2. **Space Complexity:**
   - The space required for storing all generated unique BSTs is proportional to the number of unique BSTs, which is approximately `O(n * C_n)`.
   - The recursion stack space used during generation will be proportional to the height of the recursion tree, typically around `O(n)` in the worst case scenario.

### Difficulty Rating

This problem requires generating unique BSTs, calculating their in-order sums, and finding the maximum among them. Given its emphasis on both tree construction and traversal with a complex condition (maximum in-order sum), it falls under a moderate to challenging category due to its recursive nature and the need to handle a large number of unique trees.

Given these factors:

```plaintext
```

This problem is rated a 4 out of 5 in terms of difficulty. It involves intricate tree generation and traversal, along with sum calculations and comparisons across multiple unique trees. The recursive nature and handling of Catalan numbers add complexity, making it a challenging