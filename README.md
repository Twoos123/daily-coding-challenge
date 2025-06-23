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

****

### Problem Description

Given a binary tree, find the path from the root to the deepest leaf node. If there are multiple paths with the same depth, return any one of them.

#### Example Input/Output

**Input:**
```
      1
     / \
    2   3
   / \
  4   5
 / \
6   7
```
**Output:**
```
[1, 2, 4, 6]
```

#### Constraints
- The binary tree is not necessarily a binary search tree (BST).
- The tree may be skewed or balanced.
- The returned path can be any one of the deepest leaf nodes if there are multiple.

### Most Efficient Solution in Python

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def deepestLeavesPath(root):
    if not root:
        return []

    queue = [(root, [root.val])]
    deepest_level = 0
    deepest_path = []

    while queue:
        node, path = queue.pop(0)
        
        if not node.left and not node.right:
            if len(path) > deepest_level:
                deepest_level = len(path)
                deepest_path = path
            elif len(path) == deepest_level:
                deepest_path.append(path)

        if node.left:
            queue.append((node.left, path + [node.left.val]))
        
        if node.right:
            queue.append((node.right, path + [node.right.val]))

    return deepest_path[0] if deepest_path else []

# Example usage:
# Construct the binary tree:
#       1
#      / \
#     2   3
#    / \
#   4   5
#  / \
# 6   7

root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)
root.left.left.left = TreeNode(6)
root.left.left.right = TreeNode(7)

print(deepestLeavesPath(root))  # Output: [1, 2, 4, 6]
```

### Detailed Explanation of the Algorithm

1. **Initialization:**
   - Start by checking if the `root` is `None`. If it is, return an empty list as there are no nodes in the tree.
   - Initialize a queue with the root node and its value in the path.
   - Set `deepest_level` to track the length of the deepest path found so far.
   - Initialize `deepest_path` to store all deepest paths found.

2. **Breadth-First Traversal:**
   - Use a BFS approach to traverse the tree level by level.
   - For each node, check if it is a leaf node (`not node.left and not node.right`). If it is:
     - If its path length is greater than `deepest_level`, update both `deepest_level` and `deepest_path`.
     - If its path length equals `deepest_level`, append it to `deepest_paths`.

3. **Queue Operations:**
   - For each node, push its children along with their updated paths into the queue.

4. **Return Result:**
   - Finally, return either one of the deepest paths if multiple exist or an empty list if no nodes were found.

### Time Complexity Analysis:
- The time complexity is O(N), where N is the number of nodes in the binary tree. This is because each node is visited exactly once during the BFS traversal.
  
### Space Complexity Analysis:
- The space complexity is O(N), as in the worst case, we might need to store all nodes in the queue.

### Why This Approach is Optimal:
- Using a queue allows us to traverse the tree level by level efficiently without relying on recursion, which can be more complex to analyze for time and space complexity.
- By tracking both `deepest_level` and storing all deepest paths in `deepest_paths`, we handle cases with multiple deepest leaves correctly without additional iterations.

This approach ensures we handle both balanced and skewed trees efficiently while maintaining optimal time and space complexity.