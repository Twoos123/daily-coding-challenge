## About

This repository contains daily coding challenges generated using the Perplexity API. Each challenge is automatically generated and committed to this repository at 12 AM EST everyday.

## Today's Challenge

Difficulty: ⭐⭐⭐⭐ (4/5)

### Coding Challenge: "Efficiently Merging Sorted Files"

#### Problem Description:
Given two sorted text files, merge them into a single sorted file efficiently. The output file should contain all lines from both input files in ascending order.

#### Example Input/Output:

**Input Files:**
- `file1.txt`: 
  ```
  Alice,30
  Bob,25
  Charlie,35
  ```

- `file2.txt`: 
  ```
  David,28
  Emily,32
  Frank,42
  ```

**Output File (merged.txt):**
```
Alice,30
Bob,25
Charlie,35
David,28
Emily,32
Frank,42
```

#### Constraints:
- Both input files are sorted in ascending order by a key (e.g., name or age).
- The output file should also be sorted in ascending order.
- The solution should be efficient in terms of time complexity.
- The solution should handle cases where the input files are empty or contain different keys.

#### Solution in Python:

```python
def merge_sorted_files(file1, file2, output_file):
    with open(file1, 'r') as f1, open(file2, 'r') as f2, open(output_file, 'w') as fo:
        line1 = next(f1)
        line2 = next(f2)
        
        while line1 and line2:
            if line1.split(',')[1] <= line2.split(',')[1]:
                fo.write(line1)
                line1 = next(f1, '')
            else:
                fo.write(line2)
                line2 = next(f2, '')
        
        # Write any remaining lines from either file
        while line1:
            fo.write(line1)
            line1 = next(f1, '')
        
        while line2:
            fo.write(line2)
            line2 = next(f2, '')

# Example usage:
merge_sorted_files('file1.txt', 'file2.txt', 'merged.txt')
```

#### Difficulty Rating: 4/5

This challenge requires understanding of file I/O operations in Python and efficient sorting techniques. The solution needs to handle edge cases where one file might be empty or contain different keys, ensuring that the output remains sorted.

---

This challenge is designed to test your ability to handle file operations and sorting algorithms efficiently while ensuring that the output remains sorted.