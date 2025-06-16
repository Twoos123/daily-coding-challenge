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

****

### Problem Description

**Challenge:**
Given a list of integers that represent the ages of people, find the first pair of ages where the difference in ages is exactly `k` years. If such a pair exists, return the ages of the pair; otherwise, return an empty list.

For example, if the input list is `[20, 50, 40, 30, 60]` and `k = 10`, the output should be `[30, 40]`.

### Constraints
- The list of ages will contain at least two elements.
- The ages are positive integers.
- The value of `k` is a positive integer.

### Example Input/Output

**Input:** `[20, 50, 40, 30, 60]`, `k = 10`
**Output:** `[30, 40]`

**Input:** `[1, 2, 3]`, `k = 2`
**Output:** `[1, 3]`

### Solution

To solve this problem efficiently using a hash table, we can maintain a set of ages we've seen so far and check for the presence of an age that is `k` years different from the current age.

```python
def find_aging_pair(ages, k):
    age_set = set()
    
    for age in ages:
        if age - k in age_set:
            return [age - k, age]
        elif age + k in age_set:
            return [age, age + k]
        
        age_set.add(age)
    
    return []

# Example usage:
ages = [20, 50, 40, 30, 60]
k = 10
print(find_aging_pair(ages, k))  # Output: [30, 40]

```

### Algorithm Explanation

1. **Initialize a Set:** Create an empty set `age_set` to keep track of ages we've seen so far.
2. **Iterate Through Ages:** For each age in the input list:
   - Check if `age - k` is in `age_set`. If it is, return the pair `[age - k, age]`.
   - Check if `age + k` is in `age_set`. If it is, return the pair `[age, age + k]`.
   - Add the current age to `age_set`.
3. **Return Result:** After iterating through all ages, return an empty list if no pair found.

### Time Complexity Analysis

- The operations inside the loop are constant-time lookups and insertions (`O(1)`).
- The iteration itself is linear (`O(n)`), where n is the number of ages.

Thus, the overall time complexity of this algorithm is `O(n)`.

### Space Complexity Analysis

- We are using a set (`age_set`) which in the worst case scenario will contain one entry for each age (`O(n)`).

So, the space complexity is `O(n)`.

### Conclusion

This solution is optimal because it uses a constant-time data structure (set) to keep track of seen ages. It ensures that we can find pairs quickly by maintaining only one pass through the list of ages.