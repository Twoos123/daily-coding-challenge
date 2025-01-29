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

### Coding Challenge: "Array of Trailing Zeros in Factorials"

**Problem Description:**
Given an integer `n`, find the number of trailing zeros in `n` (factorial). This problem involves understanding the concept of trailing zeros in factorials and leveraging dynamic programming to efficiently calculate the result.

**Algorithmic Approach:**
To solve this problem, we need to understand that trailing zeros in a factorial are caused by pairs of 2 and 5. Since there are always more factors of 2 than 5, we only need to count the factors of 5. We will use dynamic programming to count the number of times 5 is a factor in all numbers from 1 to `n`.

**Data Structures Used:**
- **Dynamic Programming:** To count the number of times 5 is a factor in all numbers from 1 to `n`.

**Constraints:**
- The input `n` is a single integer.
- The result should be an integer representing the number of trailing zeros in `n`.

**Example Input/Output:**

| Input | Output |
|-------|--------|
| 5    | 1      |
| 10   | 2      |
| 25   | 6      |

**Solution in Python:**

```python
def trailing_zeros(n):
    # Initialize count of trailing zeros
    count = 0
    
    # Loop through powers of 5
    i = 5
    while n // i >= 1:
        count += n // i
        i *= 5
    
    return count

# Example usage:
print(trailing_zeros(5))   # Output: 1
print(trailing_zeros(10))  # Output: 2
print(trailing_zeros(25))  # Output: 6
```

**Explanation:**
1. **Initialization:** We start with `count` initialized to 0.
2. **Looping through Powers of 5:** We use a loop that starts with `i = 5` and multiplies it by 5 each iteration, effectively stepping through each power of 5.
3. **Accumulating Count:** For each iteration, we add the integer division of `n` by the current power of 5 to `count`. This effectively counts how many times that power of 5 is a factor in all numbers up to `n`.
4. **Returning Result:** Finally, we return the accumulated count.

This solution leverages dynamic programming by breaking down the problem into smaller sub-problems (counting factors of powers of five) and storing solutions to these sub-problems in a structured way to avoid redundant calculations.