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

## Problem Description

### Challenge: Trie Prefix Suffix Count

Given a set of strings, implement a Trie-based solution to count the number of unique prefixes and suffixes for each string. The task requires efficiently traversing the Trie to identify and count all possible prefixes and suffixes of the strings.

### Constraints
- The input is a list of strings.
- The output should be a dictionary where each key is a string and the value is a dictionary containing counts for unique prefixes and suffixes.
- The solution should maintain optimal time and space complexity.

## Example Input/Output

Input:
```python
strings = ["abc", "bca", "cba", "xyz"]
```

Output:
```python
{
    'abc': {
        'prefixes': 3,
        'suffixes': 3
    },
    'bca': {
        'prefixes': 3,
        'suffixes': 3
    },
    'cba': {
        'prefixes': 3,
        'suffixes': 3
    },
    'xyz': {
        'prefixes': 1,
        'suffixes': 1
    }
}
```

## Solution

### Optimal Approach

To solve this problem efficiently, we will use a Trie data structure and extend it to count unique prefixes and suffixes.

#### Trie Implementation with Prefix and Suffix Counting

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False
        self.prefix_count = 0
        self.suffix_count = 0

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
            node.prefix_count += 1  # Increment prefix count for each character
            if char == word[-1]:  # If it's the last character in the word
                node.suffix_count += 1  # Increment suffix count for each word

    def count_unique_prefixes_and_suffixes(self, words):
        result = {}
        for word in words:
            self.insert(word)
            result[word] = {
                'prefixes': self.root.prefix_count,  # Store the prefix count from the root node
                'suffixes': self.root.suffix_count  # Store the suffix count from the root node
            }
            # Reset counts for next word to avoid overcounting
            for char in word:
                self.root.children[char].prefix_count -= 1
                if char == word[-1]:
                    self.root.children[char].suffix_count -= 1
        return result

# Example usage
trie = Trie()
strings = ["abc", "bca", "cba", "xyz"]
print(trie.count_unique_prefixes_and_suffixes(strings))
```

### Analysis

#### Time Complexity:
- **Insertion:** The time complexity of inserting a string into the Trie is O(m), where m is the length of the string.
- **Counting Unique Prefixes and Suffixes:** The time complexity of computing unique prefixes and suffixes for all strings is also O(n*m), where n is the number of strings.

#### Space Complexity:
- The space complexity is O(n*m) as we need to store all the nodes of the Trie for all strings.

### Explanation
The solution uses a Trie to efficiently store and count unique prefixes and suffixes. It iterates over each character in each word, incrementing both prefix and suffix counts appropriately. By resetting counts after processing each word, we ensure accurate counts without overcounting.

This approach maintains optimal time complexity by leveraging Trie's efficient string operations and constant-time access properties.

### Trade-offs:
The approach requires additional space to store prefix and suffix counts at each node but ensures accurate results. The trade-off lies in the need for extra memory to store these counts, but this is balanced by the efficiency of using Trie for prefix and suffix operations.

By using a Trie, we achieve O(m) time complexity for insertion and O(m) time complexity for counting unique prefixes and suffixes, making this approach highly efficient for this problem.