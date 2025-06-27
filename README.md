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

### Problem Description

**Challenge:**
Given a large dataset of books, each book represented by its unique identifier and author name, implement a system to efficiently find the most frequent authors and their corresponding book counts.

**Constraints:**
- The dataset will be very large.
- Authors can have multiple books.
- The system should handle high query rates efficiently.

### Example Input/Output

**Input:**
```
[
  {"book_id": 1, "author": "John Doe"},
  {"book_id": 2, "author": "Jane Smith"},
  {"book_id": 3, "author": "John Doe"},
  {"book_id": 4, "author": "Alice Brown"},
  {"book_id": 5, "author": "Jane Smith"},
]
```

**Output:**
```
[
  {"author": "John Doe", "count": 2},
  {"author": "Jane Smith", "count": 2},
  {"author": "Alice Brown", "count": 1},
]
```

### Most Efficient Solution in Python

#### Algorithm Explanation

To solve this problem efficiently, we will use a hash table to count the occurrences of each author. This approach allows us to handle large datasets and high query rates in constant time.

1. **Initialization:**
   - Create an empty hash table (dictionary in Python).

2. **Counting Authors:**
   - Iterate through each book in the dataset.
   - For each book, use the author's name as the key and increment its count in the hash table.
   
3. **Finding Most Frequent Authors:**
   - Collect all entries from the hash table.
   - Sort these entries by their counts in descending order.
   - Select the top N entries where N is defined by constraints or requirements (e.g., top 3 most frequent authors).

4. **Output:**
   - Return a list of dictionaries containing the author names and their respective counts.

#### Code Implementation

```python
from collections import defaultdict

def find_most_frequent_authors(books, n=3):
    # Initialize a hash table to store author counts
    author_counts = defaultdict(int)

    # Count occurrences of each author
    for book in books:
        author_counts[book["author"]] += 1

    # Collect entries from the hash table and sort by count in descending order
    sorted_authors = sorted(author_counts.items(), key=lambda x: x[1], reverse=True)

    # Return top n entries (most frequent authors)
    return [{"author": author, "count": count} for author, count in sorted_authors[:n]]

# Example usage
books = [
    {"book_id": 1, "author": "John Doe"},
    {"book_id": 2, "author": "Jane Smith"},
    {"book_id": 3, "author": "John Doe"},
    {"book_id": 4, "author": "Alice Brown"},
    {"book_id": 5, "author": "Jane Smith"},
]

result = find_most_frequent_authors(books)
print(result)
```

### Analysis of Complexity

#### Time Complexity:
- **Initialization:** O(1)
- **Counting Authors:** O(m), where m is the number of books (as we iterate through each book once).
- **Sorting:** O(m log m) on average for sorting all entries.
- **Finding Top N:** O(m log m) if sorting is required to find top N authors.

However, since we are only interested in top N entries after sorting, we can achieve this in O(m log m) time complexity.

#### Space Complexity:
- **Hash Table:** O(m) as each entry in the hash table represents an author.
- **Additional Variables:** O(1) for variables like loop counters and temporary values.

Thus, the overall space complexity is O(m).

### Difficulty Rating

This problem requires efficient use of hash tables to handle large datasets and high query rates. The solution involves using a `defaultdict` to simplify counting occurrences of authors and then sorting these entries to find the most frequent ones. The time complexity is linear with respect to the number of books (m), but due to the sorting step required to find top entries, it reaches O(m log m). This problem is challenging but solvable with proper application of data structures like hash tables, making it suitable for an advanced level challenge.