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
**Challenge: Autocomplete with Trie**

Implement an autocomplete system using a Trie data structure. Given a list of words and a search string, return the top 5 most relevant words starting with the search string. The relevance is determined by the frequency of each word in the list.

### Example Input/Output

**Input:**
- `words` = ["dog", "cat", "apple", "banana", "cherry"]
- `search_string` = "ca"

**Output:**
- `["cat"]`

### Constraints:
- The list of words is not empty.
- The search string is at least one character long.
- The frequency of each word in the list should be considered for relevance.

### Most Efficient Solution in Python

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word_end = False
        self.word_frequency = 0

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_word_end = True
        node.word_frequency += 1

    def search(self, search_string):
        node = self.root
        for char in search_string:
            if char not in node.children:
                return []
            node = node.children[char]
        
        # If search_string is a prefix of some words, traverse down from node 
        return self._dfs(node, search_string)

    def _dfs(self, node, prefix):
        result = []
        if node.is_word_end:
            result.append((prefix, node.word_frequency))
        
        for char, child_node in node.children.items():
            result.extend(self._dfs(child_node, prefix + char))
        
        return sorted(result, key=lambda x: x[1], reverse=True)[:5]

# Usage example:
trie = Trie()
words = ["dog", "cat", "apple", "banana", "cherry"]
for word in words:
    trie.insert(word)

search_string = "ca"
result = trie.search(search_string)
print(result)  # Output: [("cat", 1)]
```

### Detailed Explanation of the Algorithm

1. **Trie Construction**:
   - The `TrieNode` class initializes each node with a dictionary `children` to store child nodes and a boolean flag `is_word_end` to mark the end of a word. Additionally, a `word_frequency` attribute is added to store the frequency of each word.
   - The `insert` method iterates through each character of the word and creates new nodes as needed. It also increments the frequency count for each word.

2. **Search and Autocomplete**:
   - The `search` method starts from the root node and traverses down based on the characters of the search string. If any character does not exist in the current node's children, it returns an empty list.
   - If all characters match (i.e., it's a prefix), it calls `_dfs` to perform a depth-first search from this node.
   - `_dfs` method recursively traverses down and collects all words ending with this prefix along with their frequencies. It then sorts these results by frequency in descending order and returns the top 5 most relevant words.

### Time and Space Complexity Analysis

- **Time Complexity**:
  - Building the Trie: O(N * avgL), where N is the number of words and avgL is the average length of words [2].
  - Searching for a prefix: O(k), where k is the length of the search string [2].
  - Depth-first search for top 5 most relevant words: O(k * V), where V is the number of nodes visited (in this case, at most 26^k for English alphabet), thus O(k * k^k) which simplifies to O(k^k+1) due to constant number of operations per node.

Since k^k+1 grows very fast but in practice we are looking at small values of k (typically up to 16 for typical English words), this remains manageable.

- **Space Complexity**:
  - Memory required to store each node in the Trie: O(S), where S is the sum of all patterns' lengths [4].
  - Additional memory for storing frequencies in each node: O(N * S).

### Why This Approach is Optimal

This approach is optimal because:

- It efficiently constructs the Trie using O(N * avgL) time.
- The search operation is efficiently performed in O(k) time.
- The depth-first search for finding top 5 relevant words has a reasonable time complexity due to its practical nature.
- It uses minimal additional space by storing frequencies directly within each node