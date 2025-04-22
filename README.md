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

**Rotated Palindrome Check**

Given a string `s`, determine if it is possible to make `s` a palindrome by rotating it. A rotation of a string is obtained by slicing off some characters from the beginning and appending them to the end. For example, the string "aaaad" can be rotated to form a palindrome "aadaa".

### Example Input/Output

- **Input:** str = "abcd"
- **Output:** False // "abcd" is not a rotation of any palindrome.

- **Input:** str = "aaaad"
- **Output:** True // "aaaad" can be rotated to form a palindrome "aadaa".

### Constraints

- The input string contains only lowercase letters.
- The string has a length between 1 and 10,000 characters.

### Most Efficient Solution in Python

```python
def isRotatedPalindrome(s):
    n = len(s)
    
    # Step 1:assistant

**DIFFICULTY:4**

### Problem Description

**Rotated Palindrome Check**

Given a string `s`, determine if it is possible to make `s` a palindrome by rotating it. A rotation of a string is obtained by slicing off some characters from the beginning and appending them to the end. For example, the string "aaaad" can be rotated to form a palindrome "aadaa".

### Example Input/Output

- **Input:** str = "abcd"
- **Output:** False // "abcd" is not a rotation of any palindrome.

- **Input:** str = "aaaad"
- **Output:** True // "aaaad" can be rotated to form a palindrome "aadaa".

### Constraints

- The input string contains only lowercase letters.
- The string has a length between 1 and 10,000 characters.

### Most Efficient Solution in Python

```python
def isRotatedPalindrome(s):
    if len(s) <= 1:  # Single character or empty string is already a palindrome
        return True
    
    n = len(s)
    
    # Step 1: Check if the string is already a palindrome
    if s == s[::-1]:
        return True
    
    # Step 2: Check for rotations
    for i in range(n):
        rotated_s = s[i:] + s[:i]
        if rotated_s == rotated_s[::-1]:
            return True
    
    return False

# Example usage:
print(isRotatedPalindrome("abcd"))  # Output: False
print(isRotatedPalindrome("aaaad"))  # Output: True
```

### Analysis of Complexity and Difficulty

#### Time Complexity:
The solution involves two main steps:
1. **Checking if the string is already a palindrome**: This involves slicing the string and checking if it's equal to its reverse (`s == s[::-1]`). This operation has a time complexity of O(n).
2. **Checking for rotations**: This involves rotating the string and checking if it's a palindrome. This is done by concatenating the end of the string with its beginning (`s[i:] + s[:i]`) and checking if it's equal to its reverse. This operation also has a time complexity of O(n).

Therefore, the overall time complexity of the solution is O(n).

#### Space Complexity:
The solution uses Python's slicing feature which creates new strings in memory. Each rotation operation creates a new string. However, since we are only checking equality and not modifying the original string significantly, the space complexity remains O(n) due to the creation of new strings during slicing.

### Explanation of the Approach
The approach first checks if the string is already a palindrome. If it is not, it then checks for each rotation of the string if it becomes a palindrome. This approach ensures that we cover all possible rotations of the input string efficiently.

### Trade-offs
The main trade-off here is between time and space complexity. While we have an optimal time complexity of O(n), we also incur some additional space complexity due to creating new strings during slicing operations. However, this space complexity remains within the constraints of the problem (up to 10,000 characters).

This problem should be rated as moderately difficult due to its requirement for both efficient time and manageable space complexity, making it suitable for aassistant

**DIFFICULTY:4**

### Problem Description

**Rotated Palindrome Check**

Given a string `s`, determine if it is possible to make `s` a palindrome by rotating it. A rotation of a string is obtained by slicing off some characters from the beginning and appending them to the end. For example, the string "aaaad" can be rotated to form a palindrome "aadaa".

### Example Input/Output

- **Input:** str = "abcd"
- **Output:** False // "abcd"