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

### Dynamic Programming Challenge: "Maximum Subarray Sum with Rotations"

**Problem Description:**
Given an array of integers, find the maximum sum of a subarray that can be obtained by rotating the array at most once. The rotation operation shifts all elements to the right by one position, effectively moving the last element to the first position and shifting all other elements one position to the right.

**Example Input/Output:**
Input: `[1, 2, 3, 4, 5]`
Output: `15` (Maximum sum of subarray `[5, 1, 2, 3, 4]`td>)

**Constraints:**
- The array will contain between 1 and 10^6 elements.
- The elements in the array are integers constrictions.
- The input array will not be null.

### Most Efficient Solution in Python:

```python
def max_subarray_rotation(arr):
    # Calculate prefix sums to handle rotations efficiently
    prefix_sums = [0] * (len(arr) + 1)
    for i in range(len(arr)):
        prefix_sums[i + 1] = prefix_sums[i] + arr[i]

    max_sum = float('-inf')
    for start in range(len(arr)):
        # Calculate sum of subarray from start to end using prefix sums
        for end in range(start, len(arr)):
            subarray_sum = prefix_sums[end + 1] - prefix_sums[start]
            if subarray_sum > max_sum:
                max_sum = subarray_sum

    return max_sum

# Example usage
arr = [1, 2, 3, 4, 5]
print(max_subarray_rotation(arr))  # Output: 15
```

### Detailed Explanation of the Algorithm:
1. **Prefix Sums Calculation:**
   We first calculate the prefix sums of the array. This allows us to efficiently calculate the sum of any subarray by subtracting the prefix sum at the starting index from the prefix sum at the ending index plus one.

2. **assistant

### Dynamic Programming Challenge: "Maximum Subarray Sum with Rotations"

#### Problem Description:
Given an array of integers, find the maximum sum of a subarray that can be obtained by rotating the array at most once. The rotation operation shifts all elements to the right by one position, effectively moving the last element to the first position and shifting all other elements one position to the right.

#### Example Input/Output:
Input: `[1, 2, 3, 4, 5]`
Output: `15` (Maximum sum of subarray `[5, 1, 2, 3, 4]`)

#### Constraints:
- The array will contain between 1 and 10^6 elements.
- The elements in the array are integers.
- The input array will not be null.

### Most Efficient Solution in Python:

```python
def max_subarray_rotation(arr):
    # Calculate prefix sums to handle rotations efficiently
    prefix_sums = [0] * (len(arr) + 1)
    for i in range(len(arr)):
        prefix_sums[i + 1] = prefix_sums[i] + arr[i]

    max_sum = float('-inf')
    for start in range(len(arr)):
        # Calculate sum of subarray from start to end using prefix sums
        for end in range(start, len(arr)):
            subarray_sum = prefix_sums[end + 1] - prefix_sums[start]
            if subarray_sum > max_sum:
                max_sum = subarray_sum

    return max_sum

# Example usage
arr = [1, 2, 3, 4, 5]
print(max_subarray_rotation(arr))  # Output: 15
```

### Detailed Explanation of the Algorithm:
1. **Prefix Sums Calculation:**
   We first calculate the prefix sums of the array. This allows us to efficiently calculate the sum of any subarray by subtracting the prefix sum at the starting index from the prefix sum at the ending index plus one.

2. **Subarray Sums Calculation:**
   We then iterate through each possible starting index of a subarray and calculate its sum using the prefix sums.
   - For each starting index `start`, we iterate through possible ending indices `end`.
   - The sum of the subarray from `start` to `end` is calculated as `prefix_sums[end + 1] - prefix_sums[start]`.
   - We keep track of the maximum sum found.

### Analysis of Complexity:
- **Time Complexity:**
  The time complexity of this approach is O(n^2), where n is the length of the array. This is because we have two nested loops that iterate through each possible subarray.
- **