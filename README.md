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

****

### Problem Description

**Prefix Matching with Trie**

Given a Trie data structure, implement a function that returns all words in the Trie that are prefixes of a given query string. The function should handle multiple query strings and return all matching words.

### Example Input/Output

**Input:**
- Trie: `["apple", "banana", "app", "ape", "bat"]`
- Queries:
  - `"ap"`
  - `"ban"`
  - `"at"`

**Output:**
- For `"ap"`: `["apple", "app", "ape"]`
- For `"ban"`: `["banana"]`
- For `"at"`: `[]` (no matching words)

### Constraints

- The input Trie contains only lowercase letters.
- The query strings are also lowercase.
- The function should be efficient in terms of time complexity.

### Solution

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        current = self.root
        for char in word:
            if char not in current.children:
                current.children[char] = TrieNode()
            current = current.children[char]
        current.is_end_of_word = True

    def prefix_match(self, query):
        current = self.root
        result = []
        for char in query:
            if char not in current.children:
                break
            current = current.children[char]
            if current.is_end_of_word:
                result.append(self._collect_words_from_node(current))
        return result

    def _collect_words_from_node(self, node):
        words = []
        if node.is_end_of_word:
            words.append(self._get_word_from_node(node))
        for char, child in sorted(node.children.items()):
            words.extend(self._collect_words_from_node(child))
        return words

    def _get_word_from_node(self, node):
        word = ''
        while node:
            word = node.is_end_of_word and word or chr(97 + ord(word[-1])) + word
            node = node.parent if hasattr(node, 'parent') else None
        return word
```

### Explanation of the Algorithm

1. **Inserting Words**:
   - The `insert` method adds a word to the Trie by iterating through each character and creating new nodes as needed.
   - Time complexity: O(L), where L is the length of the word.
   - Space complexity: O(L), as in the worst case, we need to add L new nodes.

2. **Prefix Matching**:
   - The `prefix_match` method iterates through each character of the query string and checks if it exists in the Trie.
   - For each character that exists, it moves down to the corresponding child node and checks if this node marks an end of a word.
   - If so, it collects all words rooted at this node using `_collect_words_from_node`.

3. **Collecting Words**:
   - The `_collect_words_from_node` method performs a depth-first search to collect all words rooted at a given node.
   - It keeps track of whether a node marks an end of a word and adds it to the result list accordingly.
   - It also recursively explores all child nodes and collects words from them.

4. **Getting Word from Node**:
   - The `_get_word_from_node` method reconstructs a word from a given node by traversing up to the root while storing characters along the way.

### Time and Space Complexity Analysis

- **Time Complexity**:
  - The `insert` method runs in O(L), where L is the length of the word.
  - The `prefix_match` method also runs in O(L), as it needs to traverse each character of the query string.
  - The `_collect_words_from_node` and `_get_word_from_node` methods also have a time complexity of O(L) due to their recursive nature.

- **Space Complexity**:
  - Both methods use O(L) space complexity because in the worst-case scenario, they need to store L characters during traversal.

This approach ensures that both insertion and prefix matching operations are efficient in terms of time complexity while maintaining reasonable space complexity. The trade-off lies in the recursive calls which might increase stack size but are necessary for building and traversing the Trie structure effectively.

### Why this Approach is Optimal

The approach is optimal because it leverages the inherent properties of a Trie:
- It efficiently stores and retrieves strings by utilizing shared prefixes.
- It allows quick identification of word prefixes through direct traversal.
- It handles multiple queries efficiently by reusing paths already traversed during construction.

This makes it suitable for real-time applications where prefix matching is common, such as auto-completion in search engines