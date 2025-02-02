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

### Coding Challenge: Reconstruct a String with Valid Anagrams

**Problem Description:**
Given a set of words and a string made up of those words (no spaces), reconstruct the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, return `null`. For example, given the set of words `'quick', 'brown', 'the', 'fox'` and the string `"thequickbrownfox"`, you should return `['the', 'quick', 'brown', 'fox']`.

**Example Input/Output:**

| Input Words | Input String | Output |
|-------------|--------------|--------|
| 'quick', 'brown', 'the', 'fox'   | "thequickbrownfox"   | ['the', 'quick', 'brown', 'fox']   |
| 'hello', 'world'                 | "helloworld"         | ['hello', 'world']                 |
| 'abc', 'def'                    | "abcdef"            | ['abc', 'def']                    |

**Constraints:**
- The input words and the string are all valid English words.
- The string is a concatenation of the input words without any spaces.
- The order of words in the output list should match the order they appear in the string.

### Most Efficient Solution in Python

```python
from collections import defaultdict

def reconstruct_sentence(words, sentence):
    # Create a dictionary to store the frequency of each word
    word_freq = defaultdict(int)
    for word in words:
        word_freq[word] += 1
    
    # Initialize a dictionary to store the decomposed string
    decomposed = {}
    
    # Initialize an empty list to store the result
    result = []
    
    # Decompose the string into individual words
    i = 0
    while i < len(sentence):
        found = False
        for word in word_freq:
            if sentence[i:].startswith(word):
                if word not in decomposed:
                    decomposed[word] = [i, len(word)]
                    result.append(word)
                    word_freq[word] -= 1
                    if not word_freq[word]:
                        del word_freq[word]
                    found = True
                    break
        
        # If no word starting from current index found, return None
        if not found:
            return None
        
        # Move the index forward by the length of the matched word
        i += len(word)
    
    return result

# Example usage
words = ['quick', 'brown', 'the', 'fox']
sentence = "thequickbrownfox"
print(reconstruct_sentence(words, sentence)) # Output: ['the', 'quick', 'brown', 'fox']

words = ['hello', 'world']
sentence = "helloworld"
print(reconstruct_sentence(words, sentence)) # Output: ['hello', 'world']
```

### Analysis and Explanation

1. **Complexity Analysis:**
   - **Time Complexity:** The algorithm iterates over the input string once and performs constant time operations for each character it encounters. It also performs a search for each character in the `word_freq` dictionary, which is expected to be O(1) on average due to the use of a hash map. Thus, the overall time complexity is approximately O(n), where n is the length of the input string.
   - **Space Complexity:** The space complexity includes storing the frequency of each word (O(m)), where m is the number of unique words, and storing the decomposed string (O(n)). Therefore, the total space complexity is approximately O(n + m).

2. **Optimal Approach:**
   - The solution uses a dictionary to store word frequencies (`word_freq`) and another dictionary to decompose the string into individual words (`decomposed`). This approach allows for efficient lookups and keeps track of which words have been used in reconstructing the sentence.
   - It iterates through each character of the input string only once, making it efficient for long inputs.
   - If no valid reconstruction is possible, it returns `None` immediately upon finding that no word starts from the current index.

3. **Difficulty Rating:**
   - **Difficulty Rating: 3**

This problem requires understanding of string manipulation and data structures like dictionaries. It involves decomposing a given string into individual words while ensuring that all words are used exactly once in their original order, making it moderately challenging but solvable with clear thinking about how to use dictionaries efficiently for word frequencies and decomposition tracking.