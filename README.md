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

### Problem Description: 
**Two String Anagrams Detection**

Given two strings `s1` and `s2`, determine if the two strings are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of another word or phrase, typically using all the original letters exactly once.

**Example Input/Output:**
- **Input:** `s1 = "listen", s2 = "silent"`
- **Output:** `True`
- **Input:** `s1 = "hello", s2 = "world"`
- **Output:** `False`

### Constraints:
- The length of both strings can vary.
- The strings can contain any character from the alphabet (no spaces, punctuation, etc.).
- The solution should be efficient in terms of both time and space complexity.

### Solution:
The most efficient solution for this problem is to use a hash table (dictionary in Python) to count the frequency of each character in both strings. If the two strings are anagrams, their character counts will be identical.

#### Python Solution

```python
def are_anagrams(s1, s2):
    # If lengths differ, they can't be anagrams
    if len(s1) != len(s2):
        return False

    # Create a hash table to count characters
    char_counts = {}

    # Count characters in s1
    for char in s1:
        char_counts[char] = char_counts.get(char, 0) + 1

    # Decrease counts for s2
    for char in s2:
        char_counts[char] = char_counts.get(char, 0) - 1
        # If count becomes negative, strings are not anagrams
        if char_counts[char] < 0:
            return False

    return True

# Example usage:
print(are_anagrams("listen", "silent"))   # True
print(are_anagrams("hello", "world"))     # False
```

#### Analysis of Complexity:
1. **Time Complexity:**
   - The first loop to count characters in `s1` iterates over `len(s1)` characters, making it O(n).
   - The second loop to decrease counts for `s2` also iterates over `len(s2)` characters, making it another O(n).
   - Therefore, the overall time complexity is O(n) + O(n) = O(2n), which simplifies to O(n).

2. **Space Complexity:**
   - We need a hash table (dictionary) that stores at most 26 entries (for English alphabet), assuming no repeated characters.
   - Therefore, the space complexity is O(26), which simplifies to O(1) because it does not grow with input size.

### Difficulty Rating:
****

This problem requires understanding how to effectively use a hash table for counting and comparing frequencies of characters in two strings. The solution is straightforward and efficient with a linear time complexity and constant space complexity. It is moderately challenging due to requiring precise handling of character counts but does not involve complex collision resolution techniques or advanced data structures.