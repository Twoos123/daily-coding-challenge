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

### Problem: Trie-based Longest Prefix Matching

**Description:**
Given a list of strings, implement a Trie-based system that supports efficient prefix matching. The system should be able to find all strings in the list that have a given prefix. For example, if the list contains ["apple", "banana", "cherry", "date", "elderberry"] and the prefix is "a", the system should return ["apple", "banana", "date", "elderberry"].

**Constraints:**
1. The input list of strings must be finite.
2. The prefix string should be extracted from the input list.
3. The system should return all strings from the input list that match or extend the given prefix.

**Example Input/Output:**
- **Input:** `["apple", "banana", "cherry", "date", "elderberry"]`, `prefix = "a"`
- **Output:** `["apple", "banana", "date", "elderberry"]`

### Complexity Analysis:
1. **Time Complexity:**
   - **Insertion:** O(k), where k is the length of a string. This is because we traverse each character once.
   - **Prefix Matching:** O(k), because we also traverse each character once to find matching prefixes.
   - **Building Trie:** O(N * avgL), where N is the number of strings and avgL is the average length of strings in the list.

2. **Space Complexity:**
   - The space complexity depends on the number of unique characters and strings. In the worst case, it can be O(N * avgL), but typically it would be much less due to shared prefixes.

### Optimal Solution

To achieve efficient prefix matching, we can use a Trie with the following implementation:

```python
class TrieNode:
    def __init__(self):
        self.children = {}  # Dictionary to store child nodes
        self.is_word_end = False  # Flag to indicate word end

class Trie:
    def __init__(self):
        self.root = TrieNode()  # Initialize root node

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_word_end = True

    def search_prefix(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return []
            node = node.children[char]
        
        # Start DFS from the last node to find all matching words
        matching_words = []
        self._dfs(node, prefix, matching_words)
        return matching_words

    def _dfs(self, node, prefix, matching_words):
        if node.is_word_end:
            matching_words.append(prefix)
        
        for char, child_node in node.children.items():
            self._dfs(child_node, prefix + char, matching_words)

# Example usage
trie = Trie()
words = ["apple", "banana", "cherry", "date", "elderberry"]
for word in words:
    trie.insert(word)

prefix = "a"
result = trie.search_prefix(prefix)
print(result)  # Output: ['apple', 'banana', 'date', 'elderberry']
```

### Explanation:

1. **Trie Construction:**
   - The `insert` method iterates over each character of a string and adds a new node to the Trie if necessary. It then marks the last node as the end of a word.

2. **Prefix Matching:**
   - The `search_prefix` method finds the last node that matches the given prefix. It then uses a Depth-First Search (DFS) to traverse the remaining nodes from this point and collect all matching words.

3. **DFS:**
   - The `_dfs` method recursively explores all branches starting from a given node. If a node is marked as the end of a word, it adds that word to the result list.

### Why this approach is optimal:

- **Efficiency:** This approach ensures that we only traverse through the Trie once for finding matching prefixes, leading to an overall time complexity of O(k), where k is the length of the prefix.
- **Space:** The space complexity remains efficient because we do not store multiple copies of matching prefixes but instead traverse through them once during DFS.

Overall, this implementation is both efficient and scalable for handling large lists of strings with various prefixes efficiently using Trie data structure.

### Difficulty Rating
****

The difficulty level is rated as 3 because it involves understanding and implementing Trie operations along with a specific use case that requires efficient prefix matching. While it does not involve complex algorithms like dynamic programming or graph theory, it still requires a good grasp of Trie data structure and its applications in string matching problems.