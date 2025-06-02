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

### Problem Description: Hash Table - Unique Substring Count

Given a string `s` and a character `c`, count the number of unique substrings in `s` that contain at least one occurrence of `c`. You should implement this using a hash table to efficiently track and count these substrings.

### Example Input/Output

**Input:**
- `s = "abaccabaa"` 
- `c = 'a'`

**Output:**
- `6`

### Constraints

- The string `s` can be very long (up to 10^4 characters).
- The character `c` is a single character.

### Most Efficient Solution in Python

```python
def count_unique_substrings(s, c):
    n = len(s)
    count = 0  # To count unique substrings containing 'c'

    hash_set = set()  # Hash set to track unique substrings

    for i in range(n):  # Iterate through the string
        start = i
        while start < n and s[start] == c:
            end = start + 1
            temp_str = ""
            while end < n and s[end] != c:
                temp_str += s[end]
                end += 1
            if temp_str:
                hash_set.add(temp_str)
            start += 1
    
    return len(hash_set)
```

### Detailed Explanation of the Algorithm

1. **Initialization**:
   - Initialize a set `hash_set` to store unique substrings containing `c`.
   - Initialize a counter `count` to zero.

2. **Iterate Through String**:
   - Iterate through each character in the string.
   - When `s[i] == c`, start a substring by continuously adding characters until you encounter another occurrence of `c` or reach the end of the string.

3. **Tracking Substrings**:
   - For each substring ending at an index where `s[end] != c`, add it to `hash_set`.

4. **Return Result**:
   - The size of `hash_set` gives you the number of unique substrings containing at least one occurrence of `c`.

### Time and Space Complexity Analysis

- **Time Complexity:**
  - The solution has a time complexity of O(n), where n is the length of the string. This is because we are iterating through the string once and potentially adding elements to the set for each character.

- **Space Complexity:**
  - The space complexity is also O(n) due to storing all unique substrings in `hash_set`. However, since we are using a set which automatically removes duplicates, only O(k) space would be used where k is the number of unique substrings.

### Optimal Approach Explanation

Using a hash table (implemented here using Python's built-in set) allows us to efficiently track and count unique substrings by avoiding duplicate entries directly. The time complexity remains linear as we only iterate through each character once or twice for each substring found.

### Trade-offs Between Time and Space

While both time and space complexities are linear in terms of input size (O(n)), using a hash set ensures that we do not store duplicate entries which could otherwise inflate our space usage beyond what is necessary. This approach ensures that we achieve both optimal time and space complexities given our constraints.

### Difficulty Rating (Machine-Readable Format)
This problem requires understanding how to efficiently use hash tables to count unique substrings but does not involve complex collision resolution techniques or advanced algorithms, making it moderately challenging.