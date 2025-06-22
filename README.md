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
**Task:**
Implement a function `anagramGroups` that takes a list of strings as input and returns a list of lists where each sublist contains all the anagrams from the input list. For example, if the input is `["eat", "tea", "tan", "ate", "nat", "bat"]`, the output should be `[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]`.

### Example Input/Output
Input: `["eat", "tea", "tan", "ate", "nat", "bat"]`
Output: `[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]`

### Constraints
- The length of each string in the input list is between 1 and 10 characters.
- All strings in the input list can be anagrams of each other.

### Difficulty Rating: **4**

### Implementation in Python

```python
def anagramGroups(strings):
    # Create a hashmap where each key is a sorted string and value is a list of strings
    anagram_map = {}
    
    for string in strings:
        sorted_string = ''.join(sorted(string))
        if sorted_string not in anagram_map:
            anagram_map[sorted_string] = [string]
        else:
            anagram_map[sorted_string].append(string)
    
    # Convert the hashmap values to a list of lists and return
    return list(anagram_map.values())

# Example usage:
strings = ["eat", "tea", "tan", "ate", "nat", "bat"]
print(anagramGroups(strings)) # Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
```

### Detailed Explanation:
1. **Algorithm Overview**: The approach here is to use a hash map where each key is a sorted version of a string from the input list, and each value is a list of strings that are anagrams of that key.

2. **Time Complexity**:
   - **Hashing and Insertion**: For each string in the input list, we perform O(n log n) sorting (since we sort each string) and then hash it. If it's not already in our hashmap, we add it with O(1) complexity. If it's already present, we append it to the corresponding list with O(1) complexity.
   - **Total Time Complexity**: Since we iterate through all strings exactly once (O(n)) and perform O(n log n) sorting for each string, the overall time complexity is O(n * n log n).

3. **Space Complexity**:
   - **Hash Map**: The space complexity is O(n), where n is the number of unique sorted strings. Since we only store unique sorted strings once and reference them multiple times, this space usage is efficient.

4. **Optimality**:
   - The approach is optimal because it ensures that all anagrams are grouped together efficiently without having to compare all pairs of strings directly.

5. **Trade-offs**:
   - The use of sorting introduces a time penalty but ensures that anagrams are correctly grouped.
   - The space usage is efficient as we only store unique sorted strings and their corresponding groups.

This solution should be able to handle large inputs efficiently by leveraging the properties of hash tables effectively.