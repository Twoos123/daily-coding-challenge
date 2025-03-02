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

### Hash Table Challenge: "Duplicate Value Finder"

#### Problem Description
You are given an array of integers, and you need to find all duplicate values using a hash table. The hash table should be used to efficiently keep track of the elements in the array and their counts. The challenge requires you to return a list of unique element values that appear more than once in the array.

#### Example Input/Output
- **Input**: `[1, 2, 2, 3, 4, 4, 5, 6, 6]`
- **Output**: `[2, 4, 6]`

#### Constraints
- The array will contain only positive integers.
- The array will have at least one duplicate value.

### Most Efficient Solution

```python
def find_duplicates(nums):
    # Create a hash table to store counts of elements
    count_table = {}
    
    # Initialize an empty list to store duplicate values
    duplicates = []
    
    # Iterate over each element in the array
    for num in nums:
        # If the element is already in the hash table, increment its count
        if num in count_table:
            count_table[num] += 1
            
            # If this is the second occurrence, add to the list of duplicates
            if count_table[num] == 2:
                duplicates.append(num)
        else:
            # If not, initialize its count to 1
            count_table[num] = 1
    
    return duplicates

# Example usage:
nums = [1, 2, 2, 3, 4, 4, 5, 6, 6]
print(find_duplicates(nums))  # Output: [2, 4, 6]
```

### Detailed Explanation
1. **Hash Table Initialization**:
   - We initialize an empty hash table `count_table` to keep track of element counts.

2. **Iterate Through Array**:
   - We iterate through each element in the input array.
   - For each element, we check if it is already in the hash table.

3. **Update Counts and Check Duplicates**:
   - If the element is already in the hash table, we increment its count.
   - If this is the second occurrence (i.e., `count == 2`), we add it to our list of duplicates.

4. **Return Duplicates List**:
   - At the end of the iteration, we return the list of unique element values that appear more than once.

### Complexity Analysis
- **Time Complexity**: O(n)
  - Each element is processed once, leading to a linear time complexity.
  
- **Space Complexity**: O(n)
  - In the worst case, every element could be a duplicate and could be stored in our hash table with its count.

This approach is optimal because it leverages the efficient lookup and update abilities of a hash table. It ensures that we only iterate through the array once, making it efficient in terms of both time and space complexity.

### Difficulty Rating: 3

The difficulty rating is 3 because while it involves implementing a hash table and handling duplicate values efficiently, it does not require advanced techniques like collision resolution or secondary hash functions. It is still a straightforward application of hash tables but requires understanding basic hash table operations and handling edge cases like duplicates.