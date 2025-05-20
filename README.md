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

### Coding Challenge: Find Duplicates in a List with Constraints

**Problem Description:**
Given an integer list where some numbers appear twice, find all duplicates in the list while maintaining a specific constraint that each unique number can only be stored once in the hash table. The list can contain negative integers and zeros.

**Example Input/Output:**
- **Input:** `[1, 2, 3, 4, 2, 3, 5]`
- **Output:** `[2, 3]`

**Constraints:**
- The list can contain negative integers, zeros, and positive integers.
- Each unique number can only be stored once in the hash table.
- The hash table should be used efficiently to reduce time complexity.

### Analysis and Solution

#### Most Efficient Solution in Python:

```python
def find_duplicates(nums):
    """
    Finds all duplicate numbers in a list while maintaining a constraint that each unique number can only be stored once in the hash table.
    
    Args:
        nums (list): A list of integers where some numbers appear twice.
    
    Returns:
        list: A list of all duplicate numbers.
    """
    
    # Initialize a hash table (dictionary) to keep track of seen numbers
    seen = {}
    
    # Initialize a set to store unique duplicates
    duplicates = set()
    
    # Iterate through the list
    for num in nums:
        # If the number is already in the hash table, it's a duplicate
        if num in seen:
            # Add it to the set of duplicates
            duplicates.add(num)
        else:
            # Otherwise, add it to the hash table with a count of 1
            seen[num] = 1
    
    # Convert the set of duplicates to a list and return it
    return list(duplicates)

# Example usage:
input_list = [1, 2, 3, 4, 2, 3, 5]
output = find_duplicates(input_list)
print(output)  # Output: [2, 3]
```

### Detailed Explanation:
1. **Hash Table Initialization:**
   - We initialize an empty dictionary `seen` to keep track of each number we've seen so far.
   - We also initialize an empty set `duplicates` to store unique duplicate numbers.

2. **Iteration Through List:**
   - For each number in the input list, we check if it already exists in the `seen` dictionary.
   - If it does (`num in seen`), it means we've seen this number before, so it's a duplicate. We add it to the `duplicates` set.
   - If it doesn't (`num not in seen`), we add it to the `seen` dictionary with a count of 1.

3. **Returning Duplicates:**
   - Finally, we convert the set of duplicates to a list and return it.

### Complexity Analysis:
- **Time Complexity:**
  - The iteration through the list is O(n), where n is the length of the input list.
  - Checking if a key exists in a dictionary and adding a key to a set are both O(1) operations on average.
  - Therefore, the overall time complexity remains O(n).

- **Space Complexity:**
  - We use a dictionary to store seen numbers which can potentially store all unique numbers in the list (worst-case scenario).
  - This results in a space complexity of O(n).
  - The set used to store duplicates also grows up to n elements in the worst case but since sets use hash tables internally, this complexity is also O(n).

### Difficulty Rating: 
This challenge balances complexity with constraints that require efficient use of a hash table. It's neither too trivial nor overly complex, making it suitable for someone who has a good grasp of basic data structures but needs to apply them in a slightly more nuanced way.