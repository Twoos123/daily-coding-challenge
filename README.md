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

**Hash Table: Duplicate Occurrences**

Given a list of integers and a target integer, find all pairs of integers in the list that sum up to the target integer. The pairs should be returned in any order. This problem requires using a hash table to efficiently keep track of the elements encountered so far and their counts.

### Example Input/Output

**Input:** `nums = [2, 7, 11, 15], target = 9`
**Output:** `[(2, 7), (7, 2)]`

### Constraints

- The input list `nums` contains distinct integers.
- Each input list will have exactly one solution for the given target.
- The solution should not use the same element twice for any pair.

### Most Efficient Solution in Python

```python
def find_pairs(nums, target):
    # Hash table to store encountered elements and their counts
    count_map = {}
    
    # List to store the pairs of integers that sum up to the target
    pairs = []

    for num in nums:
        complement = target - num
        
        # Check if the complement is already in the hash table
        if complement in count_map:
            # If it is, add the pair to the result list and remove the complement from the hash table 
            # to avoid using it again
            pairs.append((complement, num))
            count_map[complement] -= 1
            
            # Remove the element from the hash table if its count becomes zero
            if count_map[complement] == 0:
                del count_map[complement]
        
        # Add the current element to the hash table if it's not already there or update its count if it is
        count_map[num] = count_map.get(num, 0) + 1
    
    return pairs

# Example usage:
nums = [2, 7, 11, 15]
target = 9
print(find_pairs(nums, target))  # Output: [(2, 7), (7, 2)]
```

### Detailed Explanation of the Algorithm

1. **Initialization**:
   - `count_map`: A hash table where keys are the elements encountered so far and values are their counts.
   - `pairs`: A list to store the pairs of integers that sum up to the target.

2. **Iteration**:
   - For each element in `nums`, calculate its complement with respect to `target`.
   - Check if the complement is already in `count_map`. If it is:
     - Add the pair to `pairs`.
     - Decrement the count of the complement in `count_map`. If it becomes zero, remove it from `count_map`.
   - Add or update the current element in `count_map`.

3. **Return**:
   - Return all pairs found in `pairs`.

### Time Complexity Analysis

- The time complexity is O(n), where n is the length of `nums`. This is because each element in `nums` is processed once.
- The average lookup time in a hash table is O(1). However, in the worst case (when all elements map to the same index), it can be O(n). But since we're dealing with distinct integers here and using a reasonable hash function, this worst-case scenario is very unlikely.

### Space Complexity Analysis

- The space complexity is O(n), where n is the length of `nums`. This is because in the worst case, all elements might be stored in `count_map`.

### Why This Approach is Optimal

This approach is efficient because it leverages constant time lookups provided by hash tables (`O(1)` on average). This allows us to quickly check whether an element's complement has been encountered before and update counts accordingly without having to scan through all elements multiple times.

If we were to use nested loops without any optimization like this approach, it would result in quadratic time complexity (`O(n^2)`), which would be much slower for large inputs. By using a hashmap efficiently, we achieve linear time complexity without compromising on space usage significantly.