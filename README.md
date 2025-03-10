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

### Coding Challenge: Hash Table - Duplicate Character Filter

**Problem Description:**
Given a string `s`, filter out the characters that appear more than once in the string. Use a hash table to efficiently keep track of character frequencies and return a new string containing only the unique characters.

**Example Input/Output:**
- **Input:** `s = "abacdef"`
- **Output:** `"abcdef"`

**Constraints:**
- The input string `s` will contain only lowercase English letters.
- The length of `s` will be between 1 and 1000 characters.

### Most Efficient Solution in Python

```python
def filter_unique_chars(s):
    # Create a hash table to store character frequencies
    char_freq = {}
    
    # Count the frequency of each character in the string
    for char in s:
        if char in char_freq:
            char_freq[char] += 1
        else:
            char_freq[char] = 1
    
    # Initialize an empty string to store unique characters
    unique_chars = ""
    
    # Iterate through the original string and add unique characters to the result
    for char in s:
        if char_freq[char] == 1:
            unique_chars += char
    
    return unique_chars

# Example usage:
s = "abacdef"
print(filter_unique_chars(s))  # Output: "abcdef"
```

### Algorithm Explanation

1. **Initialization:**
   - Create an empty dictionary `char_freq` to store the frequency of each character in the string.

2. **Frequency Counting:**
   - Iterate through each character in the string `s`.
   - If the character is already in `char_freq`, increment its count by 1.
   - If it's not, set its count to 1.

3. **Unique Characters Extraction:**
   - Initialize an empty string `unique_chars` to store the unique characters.
   - Iterate through each character in the original string again.
   - If the frequency of a character is 1 (i.e., it appears only once), append it to `unique_chars`.

4. **Return Result:**
   - Return the string containing only the unique characters.

### Complexity Analysis

- **Time Complexity:** O(n)
  - The frequency counting step iterates through the string once, resulting in O(n).
  - The extraction step also iterates through the string once, but this is inherently part of the problem and doesn't add additional complexity.
  - Therefore, the overall time complexity remains O(n).

- **Space Complexity:** O(n)
  - The dictionary used to store character frequencies can potentially store up to n entries (where n is the length of the string).
  - Therefore, the space complexity is also O(n).

### Difficulty Rating

This problem is moderately complex because it requires using a hash table (dictionary in Python) for efficient frequency counting and then extracting unique characters from the string. However, given the straightforward implementation and lack of complex collision resolution techniques, it is still relatively beginner-friendly.

**Difficulty Rating: 3**

This problem should be accessible for someone with basic knowledge of data structures and algorithms, including hash tables. The solution provided is both efficient (O(n) time and space) and easy to understand.