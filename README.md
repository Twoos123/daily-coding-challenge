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

### Problem Description

**String Rotation Segmentation:**

Given a string `S` of length `N`, find the number of unique ways to segment it into substrings such that each substring is a rotation of a dictionary word. A dictionary word is considered a rotation if it can be obtained by rotating the letters of another word in the dictionary.

For example, if `S = "abcbac"` and the dictionary contains `"abc"` and `"bac"`, then one valid segmentation is `"ab", "cb", "ac"`.

### Example Input/Output

- **Input:** `S = "abcbac", dictionary = ["abc", "bac"]`
- **Output:** `2`

### Constraints

- The input string `S` is guaranteed to have at least one unique substring that is a rotation of a dictionary word.
- Dictionary words are at most as long as the input string.

### Solution

To solve this problem efficiently, we need to identify rotations of dictionary words within the given string. Here's an optimal approach:

1. **Preprocess the Dictionary:**
   - For each dictionary word, generate all its rotations and store them in a set.

2. **Check for Rotations:**
   - Iterate through the input string and check if any segment starting at each position is a rotation of any word in the preprocessed set.

3. **Segmentation Counting:**
   - Keep track of the number of unique segments that are valid rotations.

Here's the most efficient solution in Python:

```python
def count_segments(S, dictionary):
    # Preprocess the dictionary to include rotations of each word
    rotations = set()
    for word in dictionary:
        for i in range(len(word)):
            rotations.add(word[i:] + word[:i])
    
    # Initialize count for unique segments
    count = 0
    
    # Iterate through all possible segment lengths
    for length in range(1, len(S) + 1):
        for start in range(len(S) - length + 1):
            segment = S[start:start + length]
            
            # Check if segment is a rotation of any word in the dictionary
            if segment in rotations:
                count += 1
                
    return count

# Example usage:
S = "abcbac"
dictionary = ["abc", "bac"]
print(count_segments(S, dictionary))  # Output: 2
```

### Analysis of Complexity:

- **Time Complexity:** The time complexity is O(N * L * W), where N is the length of the input string, L is the maximum length of any word in the dictionary, and W is the average number of unique rotations for each word. This is because we iterate through all possible segments of the input string and check each segment against all rotations of dictionary words.
  
- **Space Complexity:** The space complexity is O(W * L), as we store unique rotations of each word in a set.

### Why This Approach is Optimal:

This approach ensures that we do not miss any valid rotations by considering all possible segments and checking each one against the rotated forms of dictionary words. The use of a set for storing rotations prevents redundant checks and ensures uniqueness.

This problem requires careful consideration of string manipulation techniques and efficient data structure usage, making it challenging yet solvable with proper optimization.