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

### Problem Description

**Challenge: Reverse Vowels in a String**

Given a string containing only lowercase letters and spaces, reverse only the vowels in the string. For example, if the input string is "hello", the output should be "holle".

### Example Input/Output

- **Input:** "hello"
- **Output:** "holle"

- **Input:** "world"
- **Output:** "world"

### Constraints

- The input string contains only lowercase letters and spaces.
- The task is to reverse only the vowels in the string.

### Solution

To solve this problem efficiently, we use a two-pointer technique. One pointer will track the position of the vowels to be reversed, and the other will traverse through the string to find vowels and swap them with the vowel at the first pointer's position.

```python
def reverse_vowels(s):
    vowels = 'aeiou'
    left, right = 0, len(s) - 1

    # Convert the string to a list for easier manipulation (since strings are immutable in Python)
    s_list = list(s)
    
    while left < right:
        # Find a vowel from the left and move it to the right position if it's not already there
        while s_list[left] not in vowels:
            left += 1
        
        # Find a vowel from the right and move it to the left position if it's not already there
        while s_list[right] not in vowels:
            right -= 1
        
        # Swap the vowels found on both sides
        s_list[left], s_list[right] = s_list[right], s_list[left]
        
        # Move both pointers after swapping
        left += 1
        right -= 1
    
    # Convert the list back to a string and return
    return ''.join(s_list)

print(reverse_vowels("hello"))  # Output: "holle"
```

### Analysis

- **Time Complexity:** The time complexity of this solution is O(n), where n is the length of the string. This is because we are traversing through the string twice at most (once for each pointer).

- **Space Complexity:** The space complexity is O(n) as well because we convert the string into a list for manipulation.

This approach is optimal because it uses a simple and efficient technique that only requires two passes through the string. The use of a set for vowels could potentially make it more efficient if we were dealing with a large set of characters, but since 'aeiou' is a small set, using a string is sufficient and straightforward.

### Difficulty Rating

The difficulty level for this problem would be rated as a 3 out of 5. It requires understanding and applying basic string manipulation techniques along with proper use of data structures like lists in Python. However, it's not overly complex or requiring advanced algorithms like some other string manipulation problems might.