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

## Problem Description: Trie-Based String Completion

Given a Trie data structure, you need to implement a function that completes words based on a provided prefix. The function should return all words that start with the given prefix and are stored in the Trie. This problem is essential for understanding how Tries can be used efficiently for prefix CURLOPTs and auto-suggestions in applications.

### Example Input/Output

- **Input**: `["apple", "banana", "orange"]`, `prefix = "a"`
- **Output**: `["apple"]`

### Constraints

- The input strings are all unique.
- The prefix will always be a non-empty string.
- The length of the prefix will be less than or equal to the length of any string in the Trie.

## Optimal Solution in Python

```python
class TrieNode:
    def __init__(self):
        self.children = [None] * 26  # Using 26 for 'a' to 'z'
        self.isEndOfWord = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            idx = ord(char) - ord('a')
            if not node.children[idx]:
                node.children[idx] = TrieNode()
            node = node.children[idx]
        node.isEndOfWord = True

    def search(self, word):
        node = self.root
        for char in word:
            idx = ord(char) - ord('a')
            if not node.children[idx]:
                return False
            node = node.children[idx]
        return node.isEndOfWord

    def prefixSearch(self, prefix):
        node = self.root
        for char in prefix:
            idx = ord(char) - ord('a')
            if not node.children[idx]:
                return []
            node = node.children[idx]
        
        # Find all words starting from the current node
        words = []
        self._dfs(node, prefix, words)
        return words

    def _dfs(self, node, prefix, words):
        if node.isEndOfWord:
            words.append(prefix)
        
        for i in range(26):
            if node.children[i]:
                self._dfs(node.children[i], prefix + chr(i + ord('a')), words)

# Example usage:
trie = Trie()
trie.insert("apple")
trie.insert("banana")
trie.insert("orange")

prefix = "a"
print(trie.prefixSearch(prefix))  # Output: ['apple']
```

## Algorithm Explanation

1. **Initialization**: The `TrieNode` class initializes a node with an array of 26 children and a boolean flag `isEndOfWord`.
2. **Insertion**: The `insert` method iterates through each character in the word and creates new nodes as necessary. It marks the final node as the end of a word.
3. **Search**: The `search` method checks if a given word exists by traversing through characters and verifying if each node exists and if it marks the end of a word.
4. **Prefix Search**: The `prefixSearch` method locates the prefix in the Trie by traversing through characters and then uses depth-first search (`_dfs`) to find all words starting from that prefix.

## Time and Space Complexity Analysis

- **Insertion**: \(O(m)\) where \(m\) is the length of the string because we are inserting each character once.
- **Search**: \(O(m)\) where \(m\) is the length of the string because we are traversing through each character.
- **Prefix Search**: \(O(n)\) where \(n\) is typically less than or equal to \(m\) because we are traversing through characters to find the prefix and then using DFS to find all matching words.

The space complexity for both insertion and search operations is \(O(m)\) due to the additional space required for storing nodes and flags in the Trie.

## Difficulty Rating: 3

The problem requires understanding how Tries work and implementing basic operations like insertion, search, and prefix search. The prefix search operation involves traversing through characters to locate the prefix and then using DFS for finding matching words, which adds a slight complexity compared to simple insertion or search operations but is still manageable with clear understanding of Trie data structure.

Thus, it is rated as a moderate difficulty problem, requiring a good grasp of Trie operations but not being overly complex or abstract.