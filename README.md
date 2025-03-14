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

### Challenge: Design a Stack-based Token Parser for Balanced Brackets

#### Problem Description
Given a string of round, curly, and square brackets, write a function that parses the string to check whether the brackets are balanced. The function should utilize a stack data structure to efficiently manage the opening and closing brackets.

**Example Input/Output:**
- **Input**: `(a + b) * (c + d)`
- **Output**: True (Balanced)
- **Input**: `((a + b) * (c + d))`
- **Output**: False (Not Balanced)

#### Constraints
- The input string contains only round, curly, and square brackets.
- The function should return `True` if the brackets are balanced and `False` otherwise.

#### Solution
```python
def is_brackets_balanced(s: str) -> bool:
    # Create a dictionary mapping closing brackets to their corresponding opening brackets
    bracket_map = {')': '(', '}': '{', ']': '['}
    
    # Create a stack to store the opening brackets
    stack = []

    # Iterate through the string
    for char in s:
        # If the character is an opening bracket, push it onto the stack
        if char in bracket_map.values():
            stack.append(char)
        # If the character is a closing bracket, check if the stack is empty or its top element does not match with the current closing bracket
        elif char in bracket_map.keys():
            if not stack or stack.pop() != bracket_map[char]:
                return False
    
    # If the stack is empty after processing the entire string, the brackets are balanced
    return not stack

# Example usage
print(is_brackets_balanced('(a + b) * (c + d)'))  # True
print(is_brackets_balanced('((a + b) * (c + d))'))  # False
```

#### Analysis of Complexity and Difficulty Rating
**Time Complexity:** 
The time complexity of this solution is O(n), where n is the length of the input string. This is because we are iterating through the string once and performing constant time operations for each character.

**Space Complexity:** 
The space complexity is O(n) as well. The maximum size of the stack will be equal to the number of opening brackets in the string, which can be at most n.

**Difficulty Rating:** 
Difficulty: 1.5

This problem is a straightforward application of a stack data structure to solve a classic problem. The use of a dictionary to map closing brackets to their corresponding opening brackets simplifies the logic, making it easy to understand and implement. The constant time operations for pushing and popping from the stack ensure that the solution is both efficient and clear.

### Explanation of the Algorithm
1. **Initialization:** Create a dictionary `bracket_map` that maps closing brackets to their corresponding opening brackets.
2. **Iteration:** Iterate through each character in the input string.
3. **Opening Bracket:** If the character is an opening bracket, push it onto the stack.
4. **Closing Bracket:** If the character is a closing bracket, check if the stack is empty or its top element does not match with the current closing bracket. If either condition is true, return False.
5. **Post-Iteration Check:** After processing the entire string, check if the stack is empty. If it is, then all brackets were properly matched and return True; otherwise, return False.

This approach ensures that we correctly identify whether the brackets in any given string are balanced by maintaining a stack that mirrors the nesting of opening and closing brackets.