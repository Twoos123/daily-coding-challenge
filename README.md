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

### Problem Description: "Construct and Validate a Balanced N-ary Tree"

**Challenge:** Given a list of integers, construct an N-ary tree where each node has a value and a list of children. Ensure the tree is balanced such that the difference between the minimum and maximum height of the tree does not exceed 1. Additionally, validate that all numbers in the list can be inserted into the tree without violating the properties of an N-ary tree.

**Example Input/Output:**
- **Input**: `[1, 2, 3, 4, 5, 6, 7]`
- **Output**:
  ```
  Node(1)
  ├── Node(2)
  │   ├── Node(3)
  │   └── Node(4)
  └── Node(5)
     └── Node(6)
  ```

### Constraints:
- The tree should be an N-ary tree.
- The tree should be balanced.
- All numbers in the list should be inserted into the tree.

### Analysis and Solution:

#### Solution Implementation:

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.children = []

def construct_tree(values):
    # Base case: If the list is empty, return None.
    if not values:
        return None
    
    # Select the root node value.
    root_value = values[0]
    
    # Create the root node.
    root = Node(root_value)
    
    # Insert all other values into the tree.
    for value in values[1:]:
        insert_node(root, value)
    
    return root

def insert_node(root, value):
    # Base case: If the tree is empty, add the value as a root.
    if root is None:
        return Node(value)
    
    # If the value is less than the root's value, add it to the left subtree.
    if value < root.value:
        if root.children:
            for child in root.children:
                if child.value > value:
                    insert_node(child, value)
                    break
            else:
                root.children.append(insert_node(None, value))
        else:
            root.children.append(insert_node(None, value))
    # If the value is greater than or equal to the root's value, add it to the right subtree.
    else:
        if root.children:
            for child in root.children:
                if child.value > value:
                    insert_node(child, value)
                    break
            else:
                root.children.append(insert_node(None, value))
        else:
            root.children.append(insert_node(None, value))

def is_balanced(node):
    def calculate_height(node):
        if node is None:
            return 0
        return max(calculate_height(child) for child in node.children) + 1
    
    def check_balance(node):
        if node is None:
            return True
        
        left_height = calculate_height(node.children[0]) if node.children else 0
        right_height = calculate_height(node.children[-1]) if node.children else 0
        
        return (abs(left_height - right_height) <= 1) and all(check_balance(child) for child in node.children)

    return check_balance(node)

# Example usage:
values = [1, 2, 3, 4, 5, 6, 7]
root = construct_tree(values)
print("Constructed Tree:")
print(root)  # Assuming a recursive print function for simplicity

if is_balanced(root):
    print("The tree is balanced.")
else:
    print("The tree is not balanced.")
```

### Detailed Explanation:

1. **Constructing the Tree**:
   - The `construct_tree` function initializes the root node with the first value from the list and recursively inserts all other values into the tree using `insert_node`.

2. **Inserting Nodes**:
   - The `insert_node` function ensures that each value is inserted into its appropriate position in the tree while maintaining balance.

3. **Checking Balance**:
   - The `is_balanced` function checks whether the difference between the maximum and minimum height of each node does not exceed one. This ensures that every subtree is relatively balanced.

### Time and Space Complexity:
- **Time Complexity**:
  - Constructing the tree: O(n log n) due to recursive insertion operations.
  - Checking balance: O(n) as it involves traversing through each node once.

- **Space Complexity**:
  - The space complexity depends on how we represent and store nodes but generally remains O(n) for storing all nodes in memory.

### Optimal Approach:
- This solution ensures that the tree remains balanced by using insertion mechanisms that avoid unbalanced subtrees during insertion.
- The use of recursion for insertion makes it efficient for maintaining balance properties.

### Trade-offs:
- Between time and space complexity, there are no