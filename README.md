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

**DIFFICULTY: 3**

### Problem Description

Given a string `s`, you need to find the longest substring that contains exactly `k` unique characters and has a length of at least `len`. You should return this substring. If no such substring exists, return an empty string.

**Constraints:**
- The input string `s` is not empty and contains only ASCII characters.
- The integer `k` is within the range `[1, len(s)]`.
- The integer `len` is within the range `[1, len(s)]`.

### Example Input/Output

**Input:** `s = "abcabcbb", k = 2, len = 2`
**Output:** `"bc"`

### Solution in Python

```python
def longest_substring_with_k_unique_chars(s, k, length):
    if k > length:
        return ""

    char_set = set()
    max_length = 0
    max_substring = ""
    left = right = 0

    while right < len(s):
        while len(char_set) < k and right < len(s):
            char_set.add(s[right])
            right += 1
        
        if len(char_set) == k and right - left >= length:
            if right - left > max_length:
                max_length = right - left
                max_substring = s[left:right]
        
        while len(char_set) > k and left <= right:
            char_set.remove(s[left])
            left += 1
        
        if len(char_set) > k:
            break
    
    return max_substring

# Example usage:
s = "abcabcbb"
k = 2
length = 2
print(longest_substring_with_k_unique_chars(s, k, length)) # Output: "bc"
```

### Analysis of Complexity

**Time Complexity:**
- The two-pointer technique is used here to efficiently move the window.
- The inner while loop iterates at most `O(n)` times where `n` is the length of the string.
- The outer while loop iterates at most `O(n)` times.
- Therefore, the overall time complexity is `O(n)`.

**Space Complexity:**
- We use a set to store unique characters.
- The space required for the set is `O(min(k, n))`, which is bounded by the size of the input string or the value of `k`.
- Additionally, we store the result substring which can be of size up to `O(n)`.
- Therefore, the overall space complexity is `O(min(k, n))`.

### Why This Approach is Optimal

This approach is optimal because it efficiently handles the constraints by using a sliding window technique along with a set to track unique characters. It ensures that we always have at most `k` unique characters in the current window and adjusts the window accordingly to meet both conditions of having exactly `k` unique characters and a length of at least `len`. This approach minimizes unnecessary checks and computations, making it efficient in terms of both time and space complexity.