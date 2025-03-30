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

****

### Challenge: "Hash Table Frequency Counting and Anagram Detection"

**Problem Description:**

Given two strings, `s1` and `s2`, determine if they are anagrams of each other. Additionally, count the frequency of each character in the first string and store this information in a hash table.

**Example Input/Output:**

Input: `s1 = "anagram"`, `s2 = "nagaram"`
Output: 
- **Anagram Detection:** `True`
- **Character Frequencies:**
    - `{'a': 1, 'g': 1, 'm': 1, 'n': 2, 'r': 1}`

**Constraints:**
- The input strings only contain lowercase English letters.
- The strings are not empty, and their lengths are less than or equal to 100 characters.

### Analysis:

#### Solution Approach:

1. **Character Frequency Counting:**
   - Use a hash table (in Python's case, `dict`) to store the frequency of each character in the first string.
   - Iterate through the string and increment the count for each character in the hash table.

2. **Anagram Detection:**
   - Check if the sorted versions of both strings are equal.
   - Alternatively, compare the character frequencies from the hash table for both strings.

#### Optimal Solution in Python:

```python
def hash_table_frequency_counting_and_anagram_detection(s1, s2):
    # Part 1: Character Frequency Counting in Hash Table
    frequency = {}
    for char in s1:
        frequency[char] = frequency.get(char, 0) + 1

    # Part 2: Anagram Detection
    if sorted(s1) == sorted(s2):
        return True, frequency
    else:
        return False, frequency

# Example usage:
s1 = "anagram"
s2 = "nagaram"
is_anagram, frequency = hash_table_frequency_counting_and_anagram_detection(s1, s2)

print(f"Is anagram: {is_anagram}")
print(f"Character frequencies: {frequency}")
```

#### Complexity Analysis:

- **Time Complexity:**
  - The time complexity for counting character frequencies is O(n), where n is the length of the string.
  - The time complexity for sorting and comparing strings is O(n log n) in Python's built-in sorting function. However, this is not strictly necessary as anagram detection can be done with O(n) complexity by directly comparing character frequencies from the hash table.

- **Space Complexity:**
  - The space complexity is O(n) because we need to store the frequency of each character in the hash table.

#### Why This Approach is Optimal:

- **Efficiency:** The approach uses a hash table for efficient counting of character frequencies, which allows for O(n) time complexity.
- **Simplicity:** The algorithm is straightforward and easy to understand.
- **Flexibility:** It handles both tasks (frequency counting and anagram detection) simultaneously, making it a good choice for this problem.

This solution balances both time and space complexity effectively, making it suitable for this challenge. The difficulty rating of 4 indicates that while it requires some understanding of hash tables and efficient algorithms, it is still manageable with a moderate level of programming experience.