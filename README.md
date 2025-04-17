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

**DIFFICULTY: 4**

### Challenge: Trie-Based String Completion

**Problem Description:**

Implement a Trie-based string completion system that suggests words as users type. Given a dictionary of words, the system should efficiently handle insertions, searches, and auto-completion queries. When a user types a prefix of a word, the system should return all words in the dictionary that start with that prefix.

**Example Input/Output:**

- **Input:** Dictionary of words: `["apple", "banana", "app", "banana", "bat"]`
- **Query:** User types "ap"
  - **Output:** ["apple", "app"]
- **Query:** User types "ba"
  - **Output:** ["banana"]

**Constraints:**

- The dictionary is a list of strings.
- The system should handle multiple insertions and searches efficiently.
- The system should handle auto-completion queries efficiently.

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
        curr = self.root
        for char in word:
            if char not in curr.children:
                curr.children[char] = TrieNode()
            curr = curr.children[char]
        curr.is_end_of_word = True

    def search(self, word):
        curr = self.root
        for char in word:
            if char not in curr.children:
                return False
            curr = curr.children[char]
        return curr.is_end_of_word

    def auto_complete(self, prefix):
        def _auto_complete(current, word):
            if current.is_end_of_word:
                result.append(word)
            for char, node in current.children.items():
                _auto_complete(node, word + char)

        result = []
        current = self.root
        for char in prefix:
            if char not in current.children:
                return result
            current = current.children[char]
        _auto_complete(current, prefix)
        return result

# Example usage:
trie = Trie()
words = ["apple", "banana", "app", "banana", "bat"]
for word in words:
    trie.insert(word)

print(trie.auto_complete("ap"))  # Output: ["app", "apple"]
print(trie.auto_complete("ba"))  # Output: ["banana"]
```

### Analysis

**Time Complexity:**

- **Insertion:** O(m), where m is the length of the word being inserted.
- **Search:** O(m), where m is the length of the word being searched.
- **Auto-completion:** 
  - **Prefix Search:** O(m) where m is the length of the prefix.
  - **Postfix Search:** O(k), where k is the number of words matching the prefix.

**Space Complexity:**

- **Trie Node Creation:** O(n), where n is the number of unique characters in all words.
- **Child Node Array:** O(26), since each node has at most 26 children (for English alphabet).

### Explanation

The solution uses a basic Trie implementation with optimized child node management. The `auto_complete` method leverages the Trie’s prefix matching capabilities by starting from the root node and traversing down based on the given prefix. This approach ensures that we only visit nodes that are relevant to the query, thus maintaining efficiency.

The time complexity for auto-completion is O(k) because after finding all potential endings (in O(m)), we only traverse down to each ending node once to mark it as a complete word, resulting in linear time complexity for each matching word.

The space complexity remains optimal because we only store references to child nodes and do not duplicate string data within the Trie. This approach ensures that our solution is both time and space efficient while handling the complex task of auto-completion efficiently.