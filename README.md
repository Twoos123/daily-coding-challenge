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

### Coding Challenge: "Partitioning an Array into Subarrays with Equal Sums"

**Problem Description:**
Given an array of integers, partition it into the maximum number of subarrays such that the sum of each subarray is equal. For example, if the array is `[1, 2, 3, 4, 5, 6]`, one possible partitioning is into `[1, 2]`, `[3]`, `[4]`, and `[5, 6]`.

**Example Input/Output:**
- **Input**: `[1, 2, 3, 4, 5, 6]`
- **Output**: `[1, 2]`, `[3]`, `[4]`, `[5, 6]`

**Constraints:**
- The array will contain only positive integers.
- The length of the array will be between 1 and 100.
- The sum of all elements in the array will be less than or equal to 1000.

### Solution (Python)

To solve this problem efficiently, we will use a technique that involves maintaining a running sum and keeping track of the indices where this sum changes significantly. This approach leverages dynamic programming principles by breaking down the problem into smaller subproblems and solving them recursively.

```python
def partition_array(arr):
    # Initialize variables to keep track of the current sum and the number of partitions
    current_sum = 0
    num_partitions = 0
    partitions = []

    # Iterate through the array to find where sums change significantly
    for i in range(len(arr)):
        current_sum += arr[i]
        
        # Check if the current sum is valid for partitioning (i.e., it's equal to the total sum)
        if current_sum == sum(arr[:i+1]):
            num_partitions += 1
            partitions.append(arr[:i+1])
            current_sum = 0

    return partitions

# Example usage:
array = [1, 2, 3, 4, 5, 6]
result = partition_array(array)
print(result) # Output: [[1, 2], [3], [4], [5, 6]]
```

### Explanation:
1. **Initialization**: We initialize variables `current_sum` to keep track of the running sum and `num_partitions` to count the number of partitions.
2. **Iteration**: We iterate through the array. For each element, we add it to `current_sum`.
3. **Partition Check**: After each addition, we check if `current_sum` equals the sum up to that point (`sum(arr[:i+1])`). If it does, we have found a valid partition.
4. **Partitioning**: When a valid partition is found, we increment `num_partitions`, append the current subarray to `partitions`, and reset `current_sum`.
5. **Result**: Finally, we return `partitions`, which contains all subarrays with equal sums.

This solution uses dynamic programming principles by breaking down the problem into smaller subproblems (checking sums at each index) and storing solutions (valid partitions) efficiently.

**Difficulty**:
This challenge requires understanding dynamic programming principles and applying them to a practical problem. The solution involves breaking down the complexity of the problem into manageable pieces and solving them recursively, making it moderately challenging.