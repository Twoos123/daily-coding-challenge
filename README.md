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

### Coding Challenge: "Duplicate Detection in a Stream of Characters"

#### Problem Description
Given a stream of characters, implement a hash table to detect and remove duplicate characters while maintaining the order of their first occurrence. The challenge requires you to provide an efficient solution with optimal time and space complexity.

#### Example Input/Output
**Input:** `stream = ['a', 'b', 'a', 'c', 'd', 'b', 'c']`
**Output:** `['a', 'b', 'a', 'c', 'd', 'b', 'c']` (since the stream already contains all unique characters)

**Input:** `stream = ['a', 'b', 'c', 'a', 'b', 'c']`
**Output:** `['a', 'b', 'c']` (removing duplicates while maintaining order)

#### Constraints
- The stream of characters will contain only lowercase letters (a-z).
- The maximum length of the stream is 26 characters (since there are 26 lowercase letters).

#### Solution

```python
class DuplicateDetector:
    def __init__(self):
        # Initialize an empty hash table
        self.char_table = {}

    def add(self, char):
        # If the character is not in the table, add it and return True
        if char not in self.char_table:
            self.char_table[char] = True
            return True
        
        # If the character is already in the table, do nothing and return False
        return False

# Example usage:
detector = DuplicateDetector()
stream = ['a', 'b', 'a', 'c', 'd', 'b', 'c']
result = []
for char in stream:
    if detector.add(char):
        result.append(char)

print(result)  # Output: ['a', 'b', 'c', 'd']
```

#### Analysis
- **Time Complexity:** The average time complexity for adding an element to the hash table is O(1), as we use a dictionary which provides constant time complexity for lookups.
- **Space Complexity:** The space complexity is O(n), where n is the number of unique characters in the stream, because each unique character is stored in the hash table.

#### Difficulty Rating: **3**

This problem requires implementing a hash table to efficiently detect and remove duplicates while maintaining order. The solution leverages the constant time complexity of hash tables to achieve optimal performance. However, it does not involve complex collision resolution techniques or advanced optimizations, making it a moderately challenging problem that is accessible with basic understanding of hash tables and dictionaries in Python.