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

### Coding Challenge: Trie-Based String Matching

**Problem Description:**
Given a set of strings and a query string, find all strings in the set that match the query string as a prefix. Implement this using a Trie data structure and optimize for both time and space complexity.

**Example Input/Output:**
- **Input:** Set of strings = ["apple", "banana", "cherry", "date"], Query String = "ap"
- **Output:** ["apple"]

**Constraints:**
- The input set of strings can be large.
- The query string can be any prefix of the strings in the set.

### Most Efficient Solution in Python

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True

    def search_prefix(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return []
            node = node.children[char]
        # Perform DFS from this node to find all matching words
        return self._dfs(node, prefix)

    def _dfs(self, node, prefix):
        result = []
        if node.is_end_of_word:
            result.append(prefix)
        for char in node.children:
            result.extend(self._dfs(node.children[char], prefix + char))
        return result

# Example usage
trie = Trie()
strings = ["apple", "banana", "cherry", "date"]
for string in strings:
    trie.insert(string)

query_prefix = "ap"
result = trie.search_prefix(query_prefix)
print(result)  # Output: ['apple']

```

### Detailed Explanation of the Algorithm

1. **Trie Construction:**
   - We create a Trie node class with children and an `is_end_of_word` flag.
   - The Trie class initializes with a root node.
   - The `insert` method traverses the Trie, creating new nodes if necessary, and marks the end of a word when it encounters the end of the string.

2. **Prefix Search:**
   - The `search_prefix` method first checks if each character in the prefix exists in the Trie.
   - If all characters in the prefix exist, it performs a depth-first search (DFS) starting from this node to find all words that match or extend the prefix.

3. **DFS Function:**
   - The `_dfs` function recursively traverses through children of each node and appends matching words (i.e., words that are already marked as ends of words) to the result list.

### Time and Space Complexity Analysis

- **Insert Operation:** The time complexity for inserting a word into the Trie is O(m), where m is the length of the word due to the linear traversal through each character.
- **Prefix Search:** 
  - The time complexity for searching a prefix in the Trie and performing DFS is initially O(m) to check each character in the prefix.
  - The subsequent DFS traversal can potentially visit up to m+1 nodes (including the prefix itself), leading to a total time complexity of O(m) for finding matching words.
- **Space Complexity:** Both space used by nodes created during insertion and space used during DFS traversal are bounded by O(m*n), where n is the number of words in the set. However, this worst-case scenario assumes every suffix of every word matches exactly one prefix character, which is unlikely.

### Optimality and Trade-offs

This approach is optimal because it leverages the inherent structure of a Trie to efficiently search for matching prefixes by directly traversing through nodes corresponding to prefix characters.

The trade-off here is between time spent on initial prefix checking vs. potential increased space usage during DFS traversal. However, given typical use cases where prefix lengths are generally short compared to word lengths, this implementation remains efficient and scalable.

### Difficulty Rating: 3

This problem combines elements of Trie construction and traversal with a practical application of finding matching prefixes efficiently. While it requires understanding and implementation details specific to Tries, it does not involve complex algorithms beyond what is standard for this data structure. Hence, it's rated as moderately challenging.