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

### Challenge: Trie-Based Substring Matching

#### Problem Description

Given a list of strings and a query string, implement a Trie-based system to find all occurrences of the query string as substrings within the given list of strings. The system should efficiently handle overlapping matches.

#### Example Input/Output

**Input:**
- List of strings: `["apple", "banana", "cherry", "applepie"]`
- Query string: `"app"`

**Output:**
- List of matching substrings: `["apple", "applepie"]`

#### Constraints

1. The input list of strings and the query string are case-insensitive.
2. The system should handle multiple occurrences of the query string.
3. The solution should be efficient in terms of time complexity, as the input list of strings can be large.

#### Most Efficient Solution

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.end_of_word = True

    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.end_of_word

    def find_substring_matches(self, query):
        matches = []
        node = self.root
        for char in query:
            if char not in node.children:
                return matches
            node = node.children[char]
        
        def dfs(node, word, index):
            if node.end_of_word:
                matches.append(word)
            for char, child_node in node.children.items():
                dfs(child_node, word + char if index == len(query) - 1 else word + char.lower(), index + 1)

        dfs(node, query.lower(), len(query))
        return matches

# Usage Example:
trie = Trie()
strings = ["apple", "banana", "cherry", "applepie"]
for s in strings:
    trie.insert(s.lower())

query = "app"
matches = trie.find_substring_matches(query.lower())
print(matches) # Output: ["apple", "applepie"]
```

#### Detailed Explanation

1. **Trie Construction**: The `insert` method constructs the Trie by iterating over each character of the input string and adding it to the appropriate child node. This ensures efficient storage and retrieval.

2. **Search**: The `search` method checks if a given string exists in the Trie by traversing the nodes corresponding to each character. It returns `True` if it finds an end of word marker and `False` otherwise.

3. **Find Substring Matches**: The `find_substring_matches` method is designed to find all occurrences of the query string as substrings within any words in the list. It does this by:
   - Building the Trie up to the last character of the query string.
   - Performing a depth-first search (DFS) starting from this last node, appending characters from child nodes to build potential matches.

4. **Time Complexity Analysis**: 
   - Insertion into Trie: O(m) where m is the length of a string.
   - Searching for a word: O(m).
   - Finding all occurrences as substrings: O(n * m) where n is the number of words and m is the length of the query string.

5. **Space Complexity Analysis**: The Trie itself uses O(n * m) space for storing all characters from all strings.

#### Difficulty Rating

This problem requires understanding how to implement and manipulate a Trie efficiently. The key challenges include:
- Efficiently searching for words in a Trie.
- Finding all overlapping matches using DFS.
- Handling case-insensitivity correctly.

The solution provided is optimized for both time and space complexity using standard Trie operations.