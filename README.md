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

**Task:**
Given a list of words, implement a Trie data structure to efficiently handle prefix searches and word occurrences. The task requires you to:
1. **Insert** words into the Trie.
2. **Search** for words within the Trie.
3. **Count** the number of words that start with a given prefix.
4. **Query** for the longest prefix that matches a given string.

### Example Input/Output

**Input:**
- Words: ["apple", "app", "banana", "band"]
- Queries: [search for "app", count words starting with "a", query for longest prefix of "band"]

**Output:**
- Search for "app": True
- Count words starting with "a": 3
- Longest prefix of "band": "band"

### Constraints
1. **Word Length:** Each word can have a maximum length of 2000 characters.
2. **Prefix Length:** Prefixes can have any length up to the length of the words.
3. **Case Sensitivity:** Words and prefixes are case-sensitive (only lowercase English letters).
4. **Queries Limitation:** No more than 3 * 10^4 operations (insert, search, count, query) will be made.

### Complexity Analysis

#### Time Complexity:
- **Insert Operation:** O(m), where m is the length of the word.
- **Search Operation:** O(m), where m is the length of the word.
- **Count Words Starting with Prefix Operation:** O(m), where m is the length of the prefix.
- **Query Longest Prefix Operation:** O(m), where m is the length of the query string.

#### Space Complexity:
- The space complexity is O(n * m), where n is the number of words and m is the maximum length of a word.

### Most Efficient Solution in Python

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        current = self.root
        for char in word:
            if char not in current.children:
                current.children[char] = TrieNode()
            current = current.children[char]
        current.is_word = True

    def search(self, word):
        current = self.root
        for char in word:
            if char not in current.children:
                return False
            current = current.children[char]
        return current.is_word

    def count_words_starting_with(self, prefix):
        current = self.root
        for char in prefix:
            if char not in current.children:
                return 0
            current = current.children[char]
        return self._count_words_from_node(current, prefix)

    def _count_words_from_node(self, node, prefix):
        if node.is_word:
            return 1
        count = 0
        for char, child in node.children.items():
            if char >= prefix[-1]: # Ensure we only count words that are a continuation of the prefix
                count += self._count_words_from_node(child, prefix + char)
        return count

    def query_longest_prefix(self, query_string):
        current = self.root
        longest_prefix = ""
        for char in query_string:
            if char not in current.children:
                break
            longest_prefix += char
            current = current.children[char]
        return longest_prefix

# Example usage:
trie = Trie()
trie.insert("apple")
trie.insert("app")
trie.insert("banana")
trie.insert("band")

print(trie.search("app"))  # True
print(trie.count_words_starting_with("a"))  # 3
print(trie.query_longest_prefix("band"))  # "band"
```

### Detailed Explanation

1. **Trie Node Implementation:**
   - Each node in the Trie has a dictionary `children` to store its child nodes and a boolean flag `is_word` to indicate if the current node represents the end of a word.

2. **Insert Operation:**
   - We traverse through the Trie, creating new nodes as needed and marking the last character of the inserted word as `True` using `is_word`.

3. **Search Operation:**
   - We traverse through the Trie and return `True` if we reach a node marked as `True`, indicating that the word exists in the Trie.

4. **Count Words Starting with Prefix Operation:**
   - We traverse through the Trie up to the prefix length and then recursively count all words that start with this prefix by traversing down from each character node.

5. **Query Longest Prefix Operation:**
   - We traverse through the Trie up to where it matches the query string and return that matched part as it represents the longest possible prefix.

### Trade-offs

-