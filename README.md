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

**Trie-Based Prefix Queries**

Given a set of strings and an array of query prefixes, implement a Trie data structure to efficiently handle prefix queries. The goal is to determine for each query prefix whether it is a full string or a prefix of a string in the given set.

### Example Input/Output

**Input:**
- Strings: `["apple", "banana", "cherry"]`
- Query Prefixes: `["app", "ban", "che"]`

**Output:**
- For each query prefix, determine if it is a full string or a prefix:
  - `"app"`: Full string
  - `"ban"`: Prefix of "banana"
  - `"che"`: Full string

### Constraints

- The strings in the input set are unique.
- The query prefixes are also unique.
- The length of each query prefix is at most 10 characters.

### Most Efficient Solution

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

    def query(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return "Not Full String"
            node = node.children[char]
        if node.is_end_of_word:
            return "Full String"
        else:
            return "Prefix of a String"

# Example usage:
trie = Trie()
strings = ["apple", "banana", "cherry"]
for string in strings:
    trie.insert(string)

query_prefixes = ["app", "ban", "che"]
for prefix in query_prefixes:
    print(trie.query(prefix))
```

### Detailed Explanation of the Algorithm

1. **Trie Node Creation:**
   - Each node in the Trie represents a character in the strings.
   - The `children` dictionary stores child nodes based on characters.
   - The `is_end_of_word` attribute indicates whether a node marks the end of a word.

2. **Inserting Strings:**
   - Iterate through each character of a string and insert it into the Trie.
   - If a character is not present in the current node's children, create a new node for it.
   - Move to the child node corresponding to the current character.
   - Finally, mark the last node as an end-of-word.

3. **Handling Queries:**
   - For each query prefix, iterate through its characters.
   - If any character is not found in the Trie, it's not a full string.
   - If all characters are found and the last node marks an end-of-word, it's a full string.
   - Otherwise, it's a prefix of a string.

### Time and Space Complexity Analysis

- **Time Complexity:**
  - Insertion: O(m), where m is the length of the string.
  - Query: O(m), where m is the length of the query prefix.
  
- **Space Complexity:**
  - The space required to store all nodes in the Trie is proportional to the total number of unique characters across all strings, which is O(N * M), where N is the number of strings and M is the average length of strings.

### Optimal Approach Explanation

This approach is optimal because:

- **Efficient String Insertion:** Using a Trie allows us to insert strings in amortized O(m) time complexity, where m is the length of the string.
- **Efficient Prefix Queries:** For each query, we only traverse up to the length of the query prefix, ensuring an amortized O(m) time complexity for queries as well.

This solution balances both time and space complexities effectively by leveraging the inherent properties of Trie data structures for prefix matching.