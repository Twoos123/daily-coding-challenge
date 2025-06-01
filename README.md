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

### Coding Challenge: **Reverse Substrings Between Two Indices**

**Problem Description:**
Given a string `s` and two indices `left` and `right`, reverse the substrings between these indices and return the modified string. If there are multiple substrings between `left` and `right`, each should be reversed individually.

**Example Input/Output:**
- **Input:** `s = "abcdefg"`, `left = 2`, `right = 5`
- **Output:** "abedcfa"

**Constraints:**
- The indices `left` and `right` are guaranteed to be within the range of the string.
- The string `s` contains only valid characters.

**Solution in Python:**
```python
def reverse_substrings(s, left, right):
    s = list(s)
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1
    return "".join(s)

# Example usage:
s = "abcdefg"
left = 2
right = 5
print(reverse_substrings(s, left, right)) # Output: "abedcfa"
```

**Analysis of the Most Efficient Solution:**

1. **Time Complexity:** The solution involves iterating over the range from `left` to `right` and swapping characters at these indices. This process is performed in a single pass through the substring, resulting in a time complexity of O((right - left)).

2. **Space Complexity:** The solution converts the input string into a list to allow for in-place swapping of characters. This conversion requires additional space proportional to the length of the input string, resulting in a space complexity of O(n), where n is the length of the input string.

3. **Optimality Explanation:** The chosen solution is optimal because it directly addresses the problem by iterating over the specified range and swapping characters in a single pass. This approach is both efficient in terms of time and space.

4. **Trade-offs:** There are no significant trade-offs between time and space complexity in this approach. The conversion to a list allows for efficient swapping operations within the range specified by `left` and `right`.

### Difficulty Rating
This problem requires understanding how to manipulate strings efficiently using basic operations like swapping characters. It also requires handling indices correctly to ensure that all specified substrings are reversed correctly. The difficulty level is rated 4 because it involves more complex string manipulation compared to simpler operations like reversing an entire string but is still manageable with basic understanding of Python and string manipulation techniques.