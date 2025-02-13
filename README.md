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

### Challenge: Longest Palindromic Substring with Constraints

**Problem Description:**
Given a string `s` and an integer `k`, find the longest palindromic substring within `s` such that the substring contains at least `k` distinct characters.

**Example Input/Output:**
- **Input:** `s = "abccba", k = 3`
- **Output:** `"abccba"`

**Constraints:**
- The input string `s` contains only lowercase English letters.
- The integer `k` is in the range `[1, len(s)]`.
- The result should be the longest palindromic substring that meets the distinct character condition.

**Difficulty Rating:** ### Solution Explanation

To solve this problem efficiently, we can use a dynamic programming approach combined with a helper function to check for palindromes.

1. **Dynamic Programming:** Create a 2D table `dp` where `dp[i][j]` is `True` if the substring from index `i` to `j` is a palindrome.
2. **Palindromic Substring Check:** Use a helper function to check if a given substring is palindromic.
3. **Distinct Character Count:** During the dynamic programming traversal, keep track of the number of distinct characters in the current substring.

Here's the optimized solution in Python:

```python
def longest_palindromic_substring(s, k):
    n = len(s)
    dp = [[False] * n for _ in range(n)]
    max_len = 0
    max_str = ""

    def is_palindrome(i, j):
        return s[i] == s[j] and (j - i <= 1 or dp[i + 1][j - 1])

    def count_distinct_chars(i, j):
        return len(set(s[i:j + 1]))

    for i in range(n):
        dp[i][i] = True
        if s[i] != '0':
            max_str = s[i]

    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            if is_palindrome(i, j):
                dist_chars = count_distinct_chars(i, j)
                if dist_chars >= k:
                    if length > max_len:
                        max_len = length
                        max_str = s[i:j + 1]

    return max_str

# Example usage:
s = "abccba"
k = 3
result = longest_palindromic_substring(s, k)
print(result)  # Output: "abccba"
```

### Complexity Analysis:
- **Time Complexity:** The algorithm runs in O(n^3) where n is the length of the string. This is because we traverse through all substrings with a nested loop structure.
- **Space Complexity:** We use a 2D table of size n x n and a few extra variables for tracking maximum length and distinct characters, resulting in O(n) space complexity.

### Optimality Explanation:
The dynamic programming approach ensures that we efficiently compute whether each substring is palindromic by leveraging previously computed results. The helper function `is_palindrome` simplifies checking if a substring is palindromic by using the `dp` table. The `count_distinct_chars` function tracks the number of distinct characters within a given substring, allowing us to filter out substrings that do not meet the `k` distinct character requirement. This combination makes the solution both efficient and optimal for this type of problem.