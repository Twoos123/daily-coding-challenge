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

**Trie-Based Auto-Complete with Limitation**

Develop an auto-complete system using a Trie data structure that supports the following functionalities:
- **Insert**: Insert a word into the Trie.
- **Suggest**: Given a prefix, suggest all words in the Trie that start with this prefix.
- **Limitation**: The system must handle a large number of words and ensure that the suggest operation returns words in lexicographic order. However, it should also prevent the suggest operation from returning more than a limited number of suggestions (e.g., 5).

### Example Input/Output

**Input**:
- `insert_words`: `["apple", "banana", "cherry"]`
- `suggest_prefix`: `"app"`

**Output**:
- `["apple"]`

**Input**:
- `insert_words`: `["apple", "banana", "cherry"]`
- `suggest_prefix`: `"ban"`

**Output**:
- `["banana"]`

### Constraints

- The system should handle a large number of words (e.g., millions).
- The suggest operation should return at most a limited number of suggestions (e.g., 5).

### Solution

To solve this problem efficiently, we will use a Trie data structure and implement the necessary operations. The key steps include:
1. **Inserting Words into the Trie**: Ensure that each character of each word is inserted correctly into the Trie.
2. **Suggesting Words**: Traverse the Trie based on the given prefix and return up to a limited number of suggestions in lexicographic order.

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_word = True

    def suggest(self, prefix, limit=5):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return []
            node = node.children[char]

        # Perform breadth-first search from the current node to find all words
        # that start with the given prefix and return up to 'limit' suggestions
        return self._bfs(node, prefix, limit)

    def _bfs(self, node, prefix, limit):
        queue = [(node, prefix)]
        visited = set()
        suggestions = []
        
        while queue and len(suggestions) < limit:
            current_node, current_prefix = queue.pop(0)
            
            # If we've already visited this node, skip it
            if (current_node, current_prefix) in visited:
                continue
            
            # Mark it as visited
            visited.add((current_node, current_prefix))
            
            # If it's a complete word
            if current_node.is_word and len(current_prefix) == len(prefix):
                suggestions.append(current_prefix)
            
            # Add children to the queue
            for char, child_node in current_node.children.items():
                queue.append((child_node, current_prefix + char))
        
        return suggestions

# Example usage:
trie = Trie()
trie.insert("apple")
trie.insert("banana")
trie.insert("cherry")

print(trie.suggest("app", 1)) # Output: ["apple"]
print(trie.suggest("ban", 1)) # Output: ["banana"]
```

### Analysis of Complexity

- **Insert Operation**:
  - Time Complexity: \(O(m)\) where \(m\) is the length of the word.
  - Space Complexity: \(O(m)\) for storing the word in the Trie.

- **Suggest Operation**:
  - Time Complexity: \(O(m + k)\) where \(m\) is the length of the prefix and \(k\) is the number of suggestions returned (up to 'limit').
  - Space Complexity: \(O(k)\) for storing the suggestions.

### Explanation

The chosen solution uses a standard Trie data structure to efficiently store and retrieve words. The `insert` operation simply traverses through each character of the word and adds it to the Trie. The `suggest` operation uses a breadth-first search (BFS) to find all words that start with the given prefix. It ensures that only up to a limited number of suggestions are returned by keeping track of visited nodes and limiting the BFS traversal based on the specified 'limit'.

This approach avoids unnecessary traversals and ensures lexicographic order by using BFS. It is optimal in terms of both time and space complexity for handling large datasets with a constraint on suggested word count.