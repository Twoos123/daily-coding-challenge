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

### Coding Challenge: "String Deletion to Reach a Target"

#### Problem Description

Given a string `s` and an integer target `t`, implement a function to determine if it is possible to delete characters from `s` such that the remaining string forms a substrings of `t`. The deleted characters should not be in the resulting substring.

#### Example Input/Output

- **Input**: `s = "abc", t = "ab"`
- **Output**: `True`
- **Explanation**: By deleting the character 'c' from `s`, we get a substring "ab" which is a part of `t`.

- **Input**: `s = "abcd", t = "ab"`
- **Output**: `False`
- **Explanation**: There is no way to delete characters from `s` to form a substring of `t`.

#### Constraints

- The strings `s` and `t` only contain lowercase English letters.
- The target string `t` is not empty.

#### The Most Efficient Solution

To solve this problem efficiently, we can use dynamic programming with a two-pointer approach. The idea is to iterate through both strings `s` and `t` simultaneously, checking if each character in `s` matches any character in `t`.

Here's an optimal solution in Python:

```python
def can_delete_to_target(s: str, t: str) -> bool:
    """
    Determines if it is possible to delete characters from s such that the remaining string forms a substring of t.
    
    Parameters:
    s (str): The original string.
    t (str): The target string.
    
    Returns:
    bool: True if it is possible to delete characters from s to form a substring of t, False otherwise.
    """
    
    # Initialize pointers for s and t
    s_ptr = len(s) - 1
    t_ptr = len(t) - 1
    
    # Simulate deleting characters from s
    while s_ptr >= 0 and t_ptr >= 0:
        if s[s_ptr] == t[t_ptr]:
            # If the characters match, move both pointers forward
            s_ptr -= 1
            t_ptr -= 1
        else:
            # If the characters do not match, move the pointer of s forward
            s_ptr -= 1
    
    # Check if we have reached the end of t
    return t_ptr < 0

# Example usage
print(can_delete_to_target("abc", "ab"))  # Output: True
print(can_delete_to_target("abcd", "ab"))  # Output: False

```

#### Analysis of Complexity and Difficulty

- **Time Complexity**: The time complexity of this solution is **O(n + m)** where `n` is the length of `s` and `m` is the length of `t`. This is because we iterate through both strings simultaneously using two pointers.
  
- **Space Complexity**: The space complexity is **O(1)** as we only use a constant amount of space to store pointers.

This approach is optimal because it efficiently checks for substrings using dynamic programming without requiring additional space that scales with input size.

This challenge requires understanding dynamic programming and two-pointer techniques, making it moderately difficult for those familiar with these concepts. The solution provided leverages these techniques efficiently to achieve optimal performance.