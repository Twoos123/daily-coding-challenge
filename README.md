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

**Challenge: Prefix Tree Queries**

You are given a Trie data structure and a set of operations related to prefix queries. Your task is to implement a Trie class that supports the following operations:

1. **Insert** a word into the Trie.
2. **Count Words Equal To** a given word, which returns the number of instances of the given word in the Trie.
3. **Count Words Starting With** a given prefix, which returns the number of strings in the Trie that have the given prefix as a prefix.
4. **Erase** a word from the Trie.

Your implementation should ensure that these operations are efficient, especially for large datasets.

### Example Input/Output

- **Insert**: `trie.insert("apple")`
- **Count Words Equal To**: `trie.countWordsEqualTo("apple")` returns `1`
- **Count Words Starting With**: `trie.countWordsStartingWith("app")` returns `2`
- **Erase**: `trie.erase("apple")`
- **Count Words Equal To**: `trie.countWordsEqualTo("apple")` returns `0`

### Constraints

- The words and prefixes consist only of lowercase English letters.
- The maximum length of a word or prefix is 2000 characters.
- At most 3 * 10^4 calls will be made to `insert`, `search`, and `startsWith`.

### Most Efficient Solution

Here is the most efficient solution in Python:

```python
class TrieNode:
    def __init__(self):
        self.children = [None] * 26  # Children nodes for a-z
        self.count = 0  # Number of words ending at this node

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def _char_to_index(self, char):
        return ord(char) - ord('a')  # Convert char to index (0-25)

    def insert(self, word):
        node = self.root
        for char in word:
            index = self._char_to_index(char)
            if not node.children[index]:
                node.children[index] = TrieNode()
            node = node.children[index]
            node.count += 1

    def countWordsEqualTo(self, word):
        node = self.root
        for char in word:
            index = self._char_to_index(char)
            if not node.children[index]:
                return 0
            node = node.children[index]
        return node.count

    def countWordsStartingWith(self, prefix):
        node = self.root
        for char in prefix:
            index = self._char_to_index(char)
            if not node.children[index]:
                return 0
            node = node.children[index]
        return self._dfs(node, prefix)

    def erase(self, word):
        self._erase(word, self.root)

    def _erase(self, word, node):
        if not node:
            return False
        if not word:
            node.count -= 1
            return node.count > 0 and any(child.count > 0 for child in node.children)
        
        index = self._char_to_index(word[0])
        if self._erase(word[1:], node.children[index]):
            node.children[index] = None
            return True
        
        return False

    def _dfs(self, node, prefix):
        count = 0
        for child in node.children:
            if child:
                count += self._dfs(child, prefix)
        
        return count + (node.count if node.count > 0 else 0)

```

### Detailed Explanation

**Time Complexity Analysis:**

- **Insert**: O(m), where m is the length of the word. This is because we traverse down the Trie once for each character in the word.
- **Count Words Equal To**: O(m), as we traverse down the Trie once for each character in the word.
- **Count Words Starting With**: O(m), as we traverse down the Trie once for each character in the prefix. The `_dfs` function recursively counts all words starting with the given prefix.
- **Erase**: O(m), as we traverse down the Trie once for each character in the word.

**Space Complexity Analysis:**
The space complexity is O(n * m), where n is the number of nodes in the Trie and m is the average length of a word. However, in practice, it's closer to O(n) since each node only stores a reference to its children and a count.

### Why This Approach is Optimal

This approach is optimal because it uses a combination of efficient insertion and traversal techniques:

1. **Indexing**: Using an array of size 26 simplifies indexing since we only need to handle lowercase English letters.
2. **Child Node Initialization**: Ensuring that child nodes are initialized only when necessary reduces unnecessary memory allocations.
3. **Count Maintenance**: Updating node counts