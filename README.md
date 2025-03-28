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

### Coding Challenge: **Longest Common Prefix Among Multiple Strings**

**Problem Description:**
Given a list of strings `strs`, find the longest common prefix among all strings. The common prefix is the substring that appears as a prefix to each of the strings in the given list.

**Example Input/Output:**

- **Input:** `strs = ["flower","flow","flight"]`
- **Output:** `"fl"`

- **Input:** `strs = ["dog","racecar","car"]`
- **Output:** `""`

- **Input:** `strs = ["interspecies","interstellar","intergalactic"]`
- **Output:** `"inter"`

**Constraints:**
- The list of strings `strs` is not empty.
- All strings in `strs` have the same length.

**Difficulty Rating:** **Most Efficient Solution in Python:**
The most efficient solution to this problem involves iterating through the characters of the first string and comparing them to the characters at the same position in all other strings. This approach ensures that we find the common prefix as early as possible and stops as soon as a mismatch is found.

```python
def longest_common_prefix(strs):
    if not strs:
        return ""
    
    shortest_str = min(strs, key=len)
    
    for i, char in enumerate(shortest_str):
        for other in strs:
            if other[i] != char:
                return shortest_str[:i]
    
    return shortest_str

# Example usage
print(longest_common_prefix(["flower","flow","flight"]))  # Output: "fl"
print(longest_common_prefix(["dog","racecar","car"]))  # Output: ""
print(longest_common_prefix(["interspecies","interstellar","intergalactic"]))  # Output: "inter"
```

**Detailed Explanation:**
1. **Initialization:**
   - Check if the input list `strs` is empty. If it is, return an empty string.
   - Find the shortest string in the list using the `min` function with the `key` argument set to `len`. This ensures that we don't waste time iterating through longer strings when a shorter one will suffice.

2. **Iteration:**
   - Iterate through each character of the shortest string using `enumerate`, which provides both the index `i` and the character itself.
   - For each position `i`, check if all other strings have the same character at that position by iterating through each string in `strs`.
   - As soon as a mismatch is found (i.e., any other string does not have the same character), return the common prefix up to the previous position `i`.

3. **Return Result:**
   - If no mismatches are found during iteration, return the entire shortest string, which represents the longest common prefix among all strings.

**Time Complexity Analysis:**
- The solution has a time complexity of O(n*m), where n is the length of the shortest string and m is the number of strings. This is because we iterate through each character of the shortest string and compare it with each corresponding character in all other strings.

**Space Complexity Analysis:**
- The solution has a space complexity of O(1), excluding the input, because we only use a constant amount of space to store indices and characters.

**Optimality Explanation:**
- This approach is optimal because it leverages the fact that we only need to consider characters up to the length of the shortest string.
- By stopping as soon as a mismatch is found, we avoid unnecessary iterations beyond what is necessary to determine the common prefix.
- Using the shortest string as our reference ensures that we find any common prefix as efficiently as possible without compromising on correctness.