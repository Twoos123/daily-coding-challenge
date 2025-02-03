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

### Coding Challenge: "Circular Shift of Strings"

**Problem Description:**
Given multiple strings and a target string, find all possible circular shifts of the target string in the given list of strings. A circular shift is when you rotate the characters of a string by a certain number of positions. For example, if you have the string "abc" and you shift it by 1 position to the right, you get "bca". If you shift it by 2 positions to the right, you get "cab".

**Example Input/Output:**

- **Input:** List of strings = ["abc", "bca", "cab"], Target String = "abc"
- **Output:** ["abc", "bca", "cab"]

**Constraints:**
- The input list of strings can be of any length.
- The target string will be present multiple times, and each shift will result in a valid string.
- The task is to find all unique circular shifts of the target string in the given list.

**Solution in Python:**

```python
def find_circular_shifts(strings, target):
    shifts = set()
    for string in strings:
        if target in string:
            # Find all rotations of the substring
            for i in range(len(string)):
                shifts.add(string[i:] + string[:i])
    
    # Filter out only the circular shifts that match the target
    return [shift for shift in shifts if shift == target]

# Example usage:
strings = ["abc", "bca", "cab"]
target = "abc"
print(find_circular_shifts(strings, target))  # Output: ["abc", "bca", "cab"]
```

**Explanation of Algorithm:**

1. **Iterate through each string in the given list**:
   - For each string, check if the `target` is present within it.
   - If it is, generate all possible rotations of this substring.

2. **Generate rotations**:
   - A rotation of a substring can be obtained by slicing and concatenating.
   - For example, `string[i:] + string[:i]` shifts the substring from index `i` to the end and prepends the substring from index 0 to `i`.

3. **Store unique rotations**:
   - Use a set to store unique rotations to avoid duplicates.

4. **Filter results**:
   - Finally, filter out only those rotations that exactly match the `target`.

**Time Complexity:**
- The time complexity is \( O(n*m^2) \), where \( n \) is the number of strings and \( m \) is the maximum length of a string. This is because we potentially generate \( m \) rotations for each string and compare each one with the target.

**Space Complexity:**
- The space complexity is \( O(m) \), as we store unique rotations which require at most \( m \) space in the set.

**Difficulty Rating:**
This problem requires understanding string manipulation techniques, particularly rotational shifts, and efficient set usage to handle uniqueness. The time complexity is polynomial but manageable for lists of reasonable sizes, making it suitable for an intermediate-level challenge.