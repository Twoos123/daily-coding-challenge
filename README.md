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

### Problem Description

**Title: Longest Substring with K Distinct Characters**

**Problem Statement:**
Given a string `s` and an integer `k`, find the length of the longest substring that contains `k` distinct characters. You should implement this using a hash table to efficiently track the frequency of characters in each substring.

**Example Input/Output:**
- **Input:** `s = "abcbaab"` and `k = 2`
- **Output:** `4`

### Constraints:
- The string `s` contains only lowercase English letters.
- The integer `k` is in the range `[1, 26]`.

### Solution

```python
def longest_substring(s, k):
    if not s or k > len(s):
        return 0
    
    char_freq = {}
    left = 0
    max_length = 0
    
    for right in range(len(s)):
        char_freq[s[right]] = char_freq.get(s[right], 0) + 1
        
        while len(char_freq) > k:
            char_freq[s[left]] -= 1
            if char_freq[s[left]] == 0:
                del char_freq[s[left]]
            left += 1
        
        max_length = max(max_length, right - left + 1)
    
    return max_length

# Example usage:
s = "abcbaab"
k = 2
print(longest_substring(s, k))  # Output: 4
```

### Detailed Explanation of the Algorithm

1. **Initialization:**
   - `char_freq` is a dictionary to store the frequency of each character.
   - `left` and `right` pointers represent the sliding window.
   - `max_length` stores the maximum length of the substring seen so far.

2. **Iterate Through String:**
   - For each character in the string, increment its frequency in `char_freq`.
   - If the number of distinct characters exceeds `k`, start moving the left pointer to the right until `k` distinct characters are found again.

3. **Update Maximum Length:**
   - Update `max_length` with the maximum length of the substring seen.

4. **Return Result:**
   - Return the maximum length found.

### Complexity Analysis

- **Time Complexity:** O(n), where n is the length of the input string.
  - Each character is processed exactly once.
  - The while loop inside may run up to n times, but it's bounded by the size of the string.

- **Space Complexity:** O(n), where n is the size of the string.
  - In the worst case, we might need to store every character in `char_freq`.

### Optimality Explanation

This approach is optimal because it uses a hash table (`char_freq`) to efficiently track character frequencies. The sliding window technique allows us to find the longest substring containing exactly `k` distinct characters by maintaining a balance between expanding the window (right pointer) and shrinking it (left pointer) based on the number of distinct characters found. This ensures that we explore all possible substrings efficiently.

### Trade-offs

*Time vs Space:* The time complexity is optimal at O(n), but there is a space trade-off since we need O(n) space for storing character frequencies in the worst case. However, this space complexity is unavoidable if we need to track all characters within each substring.

This problem effectively uses hash tables to solve a challenging substring problem while maintaining optimal time and space complexities.