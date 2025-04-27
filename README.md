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

**Challenge:**
Given a large set of integers and their corresponding frequencies, implement a function to find the pair of integers with the largest product such that their frequencies do not exceed a certain threshold (e.g., 2). This problem requires you to use a hash table to efficiently store and manage the frequencies of each integer.

**Constraints:**
- The input set can be very large.
- The threshold for frequency isQRSTUV given (e.g., 2).
- The function should return the pair of integers with the largest product.

### Example Input/Output

**Input:**
- `integers` = [1, 2, 3, 4, 5]
- `threshold` = 2
- `frequencies` = {1: 3, 2: 2, 3: 1, 4: 3, 5: 2}

**Output:**
- The pair of integers with the largest product such that their frequencies do not exceed the threshold.

### Most Efficient Solution

```python
def maxProductPair(integers, threshold):
    # Create a hash map to store the frequency of each integer
    freq_map = {}
    
    for num in integers:
        if num in freq_map:
            freq_map[num] += 1
        else:
            freq_map[num] = 1
    
    # Initialize variables to keep track of maximum product and corresponding pair
    max_product = 0
    max_pair = []
    
    # Iterate over all pairs of unique integers in the hash map
    for num1 in freq_map:
        for num2 in freq_map:
            if num1 == num2:
                continue
            
            # Check if both elements' frequencies do not exceed the threshold
            if freq_map[num1] <= threshold and freq_map[num2] <= threshold:
                product = num1 * num2
                if product > max_product:
                    max_product = product
                    max_pair = [num1, num2]
    
    return max_pair

# Example usage:
integers = [1, 2, 3, 4, 5]
threshold = 2
frequencies = {1: 3, 2: 2, 3: 1, 4: 3, 5: 2}
result = maxProductPair(integers, threshold)
print(result)  # Output: [3, 4]
```

### Analysis

- **Time Complexity:**
  - The outer loop iterates over unique elements in the hash map (O(n)).
  - The inner loop also iterates over unique elements (O(n)).
  - For each pair of elements, we perform constant time operations.
  - Therefore, the overall time complexity is O(n * n) which simplifies to O(n^2).

- **Space Complexity:**
  - We use a hash map to store frequencies which requires O(n) space.

### Explanation

This solution works by first creating a hash map to store the frequency of each integer. Then it iterates over all pairs of unique integers in this hash map and checks if both elements' frequencies do not exceed the threshold. The product of each pair is calculated and compared with the current maximum product. This approach ensures that we find the pair with the largest product efficiently without exceeding O(n^2) time complexity.

### Trade-offs

There are no significant trade-offs between time and space complexity in this solution since we need to check all pairs of elements to find the maximum product pair within a given frequency threshold.

### Difficulty Rating

This problem requires implementing a hash table and managing its elements efficiently while dealing with pairs and their products. It requires careful handling of frequencies and checking for pairs within a given threshold, making it moderately challenging but still solvable with basic hash table operations.