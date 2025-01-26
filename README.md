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

### Coding Challenge: Maximum Product Subarray with Constraints

#### Problem Description

Given an array of integers and a constraint on the maximum sum of any subarray, find the maximum product of a subarray that does not exceed the given constraint.

**Algorithmic Approach:**

1. **Dynamic Programming:** To find the maximum product subarray, we will use a dynamic programming approach. We will maintain two arrays: one for the maximum product ending at each position and one for the minimum product ending at each position. This is because a negative number can change the maximum product to minimum and vice versa.

2. **Sliding Window:** To enforce the constraint on the maximum sum of any subarray, we will use a sliding window approach. We will slide the window over the array, ensuring that the sum of elements in the current window does not exceed the given constraint.

#### Example Input/Output

**Input:**
```
Array: [4, 1, -1, 3, -2]
Constraint: 10
```

**Output:**
```
Maximum Product Subarray: [4, 1, -1] or [1, -1, 3]
Maximum Product: 4 * 1 * -1 = -4 or 1 * -1 * 3 = -3
```

#### Constraints

- The array contains only integers.
- The constraint on the maximum sum of any subarray is a positive integer.

#### Solution in Python

```python
def max_product_subarray(arr, max_sum_constraint):
    n = len(arr)
    max_product_end = [0] * n
    min_product_end = [0] * n
    
    max_product_end[0] = min_product_end[0] = arr[0]
    
    for i in range(1, n):
        max_product_end[i] = max(arr[i], max_product_end[i-1] * arr[i], min_product_end[i-1] * arr[i])
        min_product_end[i] = min(arr[i], max_product_end[i-1] * arr[i], min_product_end[i-1] * arr[i])
        
        # Enforce constraint using sliding window approach
        if sum(arr[i-n+1:i+1]) > max_sum_constraint:
            max_product_end[i] = float('-inf')
            min_product_end[i] = float('inf')

    max_product = float('-inf')
    
    for i in range(n):
        if max_product_end[i] > max_product and min_product_end[i] <= max_sum_constraint:
            max_product = max_product_end[i]

    return max_product

# Example usage
arr = [4, 1, -1, 3, -2]
max_sum_constraint = 10
print("Maximum Product Subarray:", max_product_subarray(arr, max_sum_constraint))
```

#### Explanation

1. **Dynamic Programming:** We initialize `max_product_end` and `min_product_end` arrays to keep track of the maximum and minimum product ending at each position.
2. **Sliding Window:** We check if the sum of elements in the current window exceeds the given constraint. If it does, we reset our dynamic programming arrays.
3. **Maximum Product Calculation:** We iterate through the array to find the maximum product that does not exceed the constraint.

This solution leverages dynamic programming for finding maximum and minimum products efficiently while enforcing a constraint using a sliding window approach.

---