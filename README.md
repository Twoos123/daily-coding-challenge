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

### Problem Description

Given a string `s`, implement a function that returns the **longest substring without repeating characters**. The function should handle both uppercase and lowercase letters and should be case-insensitive.

### Example Input/Output

Input: `s = "abcabcbb"`
Output: `3`

Input: `s = "abcabcbbab"`

Output: `4`

### Constraints

- The input string `s` may contain any combination of uppercase and lowercase letters.
- The function should be case-insensitive.
- The substring with the longest length without repeating characters should be returned.

### Optimal Solution

To solve this problem efficiently, we can use the sliding window technique combined with a set to keep track of unique characters encountered so far. Here's the most optimal solution in Python:

```python
def longest_substring_without_repeats(s):
    # Convert to lowercase for case-insensitivity
    s = s.lower()
    
    char_set = set()
    max_length = 0
    left = 0
    
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        
        char_set.add(s[right])
        max_length = max(max_length, right - left + 1)
    
    return max_length

# Example usage
print(longest_substring_without_repeats("abcabcbb"))  # Output: 3
print(longest_substring_without_repeats("abcabcbbab"))  # Output: 4
```

### Analysis of the Solution

**Time Complexity**: 
The time complexity of this solution is O(n), where n is the length of the string `s`. This is because we are scanning the string once and performing constant-time operations (adding and removing from the set).

**Space Complexity**:
The space complexity is also O(n) in the worst case when all characters in the string are unique. However, this can be improved to O(min(n, m)) if we consider that m is the size of the character set (usually 26 for English alphabet), but in this specific problem context, we assume full alphabet usage.

### Explanation

1. **Initialization**:
   - We convert the input string `s` to lowercase for case-insensitivity.
   - Initialize an empty set `char_set` to keep track of unique characters.
   - Initialize `max_length` to keep track of the maximum length without repeating characters.
   - Initialize `left` pointer at position 0.

2. **Scanning Through String**:
   - Use a `right` pointer that scans through the string.
   - For each character at position `right`, check if it exists in `char_set`. If it does:
     - Remove characters from left until `s[right]` is not found in `char_set`.
     - Then add `s[right]` to `char_set`.

3. **Updating Maximum Length**:
   - Update `max_length` whenever we find a longer substring without repeating characters.

4. **Return Result**:
   - Return `max_length` after scanning through all characters.

This approach ensures we find the longest substring without repeating characters efficiently while handling both uppercase and lowercase letters in a case-insensitive manner.

### Conclusion

This problem requires implementing string manipulation techniques like sliding window and set operations. The provided solution is highly efficient with O(n) time complexity and O(n) space complexity under normal circumstances. However, if considering worst-case scenarios with full alphabet usage, it would be O(min(n, m)). Thus, it is rated as **Difficulty: 4** due to its moderate complexity level.