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

**Challenge: "Find the Closest Common Ancestor in a Binary Tree"**

Given a binary tree and two nodes, find the closest common ancestor of these two nodes. The closest common ancestor is the node that is the farthest from the root but still has both nodes as descendants.

**Example Input/Output:**

- **Input:** Root of a binary tree, nodes `A` and `B`.
- **Output:** The closest common ancestor of nodes `A` and `B`.

### Constraints

- The binary tree does not have any null nodes.
- The nodes `A` and `B` exist in the binary tree.

### Optimal Solution

To solve this problem efficiently, we can use a recursive approach combined with a clever traversal strategy. The key insight is to find the lowest common ancestor by traversing both paths from the root to the nodes `A` and `B` simultaneously.

Here is the most optimal solution in Python:

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
    """
    Find the closest common ancestor of two nodes in a binary tree.
    
    :param root: The root of the binary tree.
    :param p: The first node.
    :param q: The second node.
    :return: The closest common ancestor.
    """
    
    # Base case: If the tree is empty, return None.
    if not root:
        return None
    
    # If the current node is one of the target nodes, return it.
    if root == p or root == q:
        return root
    
    # Recursively search for the target nodes in the left and right subtrees.
    left_lca = lowestCommonAncestor(root.left, p, q)
    right_lca = lowestCommonAncestor(root.right, p, q)
    
    # If both target nodes are found in different subtrees, the current node is the LCA.
    if left_lca and right_lca:
        return root
    
    # If both target nodes are found in the left subtree, return the LCA from the left subtree.
    if left_lca:
        return left_lca
    
    # If both target nodes are found in the right subtree, return the LCA from the right subtree.
    if right_lca:
        return right_lca
    
    # If neither of the above conditions are met, return None.
    return None

# Example usage:
# Create a sample binary tree:
#         3
#        / \
#       5   1
#      / \ / \
#     6  2 0  8

root = TreeNode(3)
root.left = TreeNode(5)
root.right = TreeNode(1)
root.left.left = TreeNode(6)
root.left.right = TreeNode(2)
root.right.left = TreeNode(0)
root.right.right = TreeNode(8)

p = root.left.left  # Node 6
q = root.right.right # Node 8

lca = lowestCommonAncestor(root, p, q)  # Output: Node with value 3

print("Lowest Common Ancestor:", lca.val)  # Output: 3

```

### Analysis

#### Time Complexity:
The time complexity of this solution is O(N), where N is the number of nodes in the binary tree. This is because we potentially visit each node once during our recursive traversal.

#### Space Complexity:
The space complexity is O(H), where H is the height of the binary tree. This is due to the maximum depth of our recursive call stack, which in the worst case can be equal to H. However, if we consider the space complexity in terms of recursion and iteration, it remains O(H) but practically it's more efficient because we avoid unnecessary recursion by directly returning when we find both nodes.

### Difficulty Rating:
DIFFICULTY: 4

This problem requires understanding how to traverse a binary tree and find a specific node or path efficiently. The solution involves a straightforward recursive approach but requires careful handling of base cases and recursive conditions, making it moderately challenging.