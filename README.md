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

### Problem: **Word Chain Segmentation**

**Problem Description:**
Given a list of words and a target word, find all possible word chains that can be formed by concatenating words from the list such that the final concatenated string matches the target word. Each word in the chain must be distinct, and no word can be used more than once within a single chain.

**Example Input/Output:**
- Input: `words = ["cat", "dog", "tac", "god", "good"], target = "dog"`
- Output: `[["cat", "dog"]], [["tac", "god"]]`
- Input: `words = ["apple", "banana", "cherry", "date", "elderberry"], target = "date"`
- Output: `[["apple", "date"]]`

**Constraints:**
- Each word in `words` is at most 10 characters long.
- The target word is also at most 10 characters long.
- All words are valid English words.
- The list of words can contain duplicates, but each instance of a word must be treated as distinct.

### Efficiency Analysis & Difficulty Rating

#### Complexity Analysis:
- **Time Complexity:** The time complexity for this problem can be quite high if not optimized correctly. A naive approach would involve generating all permutations of words and checking each permutation against the target string. This would result in an exponential time complexity (O(n)) where n is the number of words.
  
However, we can optimize this using a more intelligent approach:

1. **Dynamic Programming with Memoization:** We can use dynamic programming with memoization to keep track of the valid word chains. For each word in `words`, we check if it matches the remaining part of the target word. If it does, we add it to our result list and recursively generate chains for the remaining target string.

This approach ensures we avoid redundant computations and significantly reduces the time complexity to linear (O(n*m)) where n is the number of words and m is the average length of words.

2. **Space Complexity:** The space complexity would be linear (O(n+m)) due to the recursion stack and memoization table.

#### Difficulty Rating:
- **Difficulty Rating: 4**
  - The problem requires a good understanding of string manipulation techniques and dynamic programming principles. While it's not extremely challenging, it demands careful planning and optimization to achieve an efficient solution.

### Optimal Solution

```python
def word_chain_segmentation(words, target):
    def dfs(current_chain, remaining_target):
        if not remaining_target:  # If remaining target is empty, return current chain
            result.append(current_chain[:])
            return
        
        for word in words:
            if not remaining_target.startswith(word):  # Check if word matches starting part of remaining target
                continue
            
            current_chain.append(word)
            dfs(current_chain, remaining_target[len(word):])  # Recursively generate chains for remaining target
            
            current_chain.pop()  # Backtrack by removing last added word
    
    result = []
    
    dfs([], target)
    
    return result

# Example usage:
words = ["cat", "dog", "tac", "god", "good"]
target = "dog"
print(word_chain_segmentation(words, target))  # Output: [["cat", "dog"], ["tac", "god"]]
```

### Explanation:
1. **Function `word_chain_segmentation`:**
   - It initializes an empty list `result` to store all valid word chains.
   - It defines a helper function `dfs` which performs depth-first search.

2. **Helper Function `dfs`:**
   - It takes two parameters: `current_chain` which represents the current chain of words found so far and `remaining_target` which is the part of the target string that has not been matched yet.
   - If `remaining_target` is empty, it means we've found a valid chain and adds it to `result`.
   - It iterates over each word in `words`. If any word matches the starting part of `remaining_target`, it recursively calls itself with updated parameters (`current_chain` appended with this word and `remaining_target` updated by removing this word).
   - After the recursive call returns (which might have added more chains), it backtracks by removing the last added word from `current_chain`.

This approach ensures that we explore all possible valid chains efficiently while avoiding redundant computations due to memoization-like behavior provided by recursive function calls.