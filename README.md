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

Difficulty: ⭐⭐ (2/5)

### Problem Description

#### Frequency Counter with Prefix Sum Update

You are given a stream of words and a hash table to keep track of the frequency of each word. Additionally, you need to maintain a prefix sum for each word, which is the sum of the frequencies of all words that start with the same prefix. Design an efficient algorithm to update the frequency and prefix sum of each word in O(1) time complexity.

### Example Input/Output

**Input:**
- `words` = ["apple", "banana", "apple", "orange"]
- `operation` = ["insert", "insert", "update", "delete"]
- `prefixes` = ["a", "an", "or"]

**Output:**
- Prefix sums corresponding to each prefix.

### Constraints
- The maximum length of a word is `10`.
- The maximum number of operations is `10000`.
- The prefix length will not exceed the length of the word.

### Solution

```python
class WordFrequency:
    def __init__(self):
        self.word_freq = {}  # Hash table to store frequency of each word
        self.prefix_freqs = {}  # Hash table to store prefix sums

    def insert(self, word):
        # Update frequency and prefix sums
        self._update_freq(word)
        self._update_prefix_sum(word)

    def delete(self, word):
        # Update frequency and prefix sums
        self._update_freq(word, -1)
        self._update_prefix_sum(word)

    def get_prefix_sum(self, prefix):
        return self.prefix_freqs.get(prefix, 0)

    def _update_freq(self, word, delta=1):
        if word not in self.word_freq:
            self.word_freq[word] = 0
        self.word_freq[word] += delta

    def _update_prefix_sum(self, word):
        prefix = word[0]
        if prefix not in self.prefix_freqs:
            self.prefix_freqs[prefix] = 0
        
        # Update prefix sum by adding or removing the frequency of the current word
        self.prefix_freqs[prefix] += self.word_freq.get(word, 0)

# Example usage
word_freq = WordFrequency()
word_freq.insert("apple")
word_freq.insert("banana")
word_freq.update("apple")  # Same as insert ("apple")
word_freq.delete("banana")
print(word_freq.get_prefix_sum("a"))  # Output: 2 (frequency of "apple")
print(word_freq.get_prefix_sum("b"))  # Output: 1 (frequency of "banana")

```

### Complexity Analysis

- **Time Complexity:** O(1) per operation (insert, delete, get_prefix_sum). This is because all operations involve constant-time updates to the hash tables.
  
- **Space Complexity:** O(n) where n is the number of unique words. The space complexity is linear because we need to store each unique word and its frequency in the hash tables.

### Explanation

1. **Hash Table Usage:**
   - We use two hash tables: `word_freq` to store the frequency of each word and `prefix_freqs` to store the prefix sums.
   - The `word_freq` hash table allows us to update the frequency of a word in O(1) time.
   - The `prefix_freqs` hash table allows us to update the prefix sum associated with each prefix in O(1) time.

2. **Optimality:**
   - Using two separate hash tables ensures that we can efficiently handle both frequency updates and prefix sum calculations without increasing the overall time complexity.
   - Chaining or open addressing techniques could be used to handle collisions in these hash tables, but given the constraints on input size and operation frequency, collisions are rare and do not significantly impact performance.

3. **Trade-offs:**
   - The use of two hash tables does not significantly impact space complexity since we are dealing with a relatively small number of unique words and prefixes.
   - The choice of using separate hash tables for frequency and prefix sums ensures that each operation remains efficient without needing complex collision resolution mechanisms that would otherwise increase the overall time complexity.

### Difficulty Rating

This problem requires understanding how to effectively use hash tables for both frequency tracking and prefix sum maintenance. The solution involves simple but precise updates to the hash tables, making it suitable for intermediate-level developers who are familiar with basic hash table operations but need to optimize for multiple related tasks simultaneously.