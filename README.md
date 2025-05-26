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
**Duplicate Email Detection with Hash Table**

Given an array of email addresses, determine the number of duplicate email addresses and the number of unique email addresses. The solution should use a hash table to efficiently count the occurrences of each email address.

### Example Input/Output

**Input:** `emails = ["test.email+alex@leetcode.com", "test.e.mail+bob@leetcode.com", "testemail+david@lee.tcode.com"]`

**Output:** `{"test.email+alex@leetcode.com": 1, "test.e.mail+bob@leetcode.com": 1, "testemail+david@lee.tcode.com": 1}` 
- **Unique Emails:** 3
- **Duplicate Emails:** 0

### Constraints
- The input array will contain only unique strings.
- The email addresses may or may not contain special characters or numbers.
- The solution should handle edge cases where the input array is empty or contains a single unique email.

### Most Efficient Solution in Python

```python
def count_duplicate_emails(emails):
    # Initialize a hash table to store email addresses and their counts.
    email_counts = {}
    
    # Iterate over each email in the input array.
    for email in emails:
        # If the email is already in the hash table, increment its count.
        if email in email_counts:
            email_counts[email] += 1
        # If the email is not in the hash table, add it with a count of 1.
        else:
            email_counts[email] = 1
    
    # Calculate the number of unique emails and duplicate emails.
    unique_emails = sum(count == 1 for count in email_counts.values())
    duplicate_emails = len(emails) - unique_emails
    
    return email_counts, unique_emails, duplicate_emails

# Example usage:
emails = ["test.email+alex@leetcode.com", "test.e.mail+bob@leetcode.com", "testemail+david@lee.tcode.com"]

result, unique, duplicates = count_duplicate_emails(emails)
print("Email Counts:", result)
print("Unique Emails:", unique)
print("Duplicate Emails:", duplicates)
```

### Detailed Explanation of the Algorithm

1. **Initialization:** Create an empty dictionary `email_counts` to serve as our hash table.
2. **Iteration:** Iterate through each email address in the input array.
3. **Update Counts:** For each email, check if it already exists in `email_counts`. If it does, increment its count by 1; otherwise, add it with a count of 1.
4. **Unique and Duplicate Counts:** Calculate the number of unique emails by summing up all counts that are equal to 1. The total number of duplicate emails is then calculated as the difference between the total number of emails and the number of unique emails.

### Analysis of Time and Space Complexity

- **Time Complexity:** The time complexity is O(n), where n is the length of the `emails` array. This is because we are performing a constant-time operation (dictionary lookup/insertion) for each email.
- **Space Complexity:** The space complexity is also O(n), as in the worst case, every email could be unique and stored in our hash table.

### Optimal Approach Explanation

This solution is optimal because it leverages the efficient average time complexity of O(1) for dictionary operations (hash lookups and insertions). The use of a hash table allows us to handle multiple emails in constant time per operation, making this approach scalable for large inputs.

### Trade-offs

There are no significant trade-offs between time and space complexity in this solution. The choice to use a hash table ensures both efficient counting (time) and minimal additional storage (space), given that we are only storing key-value pairs for each unique email address.

### Difficulty Rating

This problem requires understanding basic hash table operations and applying them to count duplicates efficiently. The solution involves straightforward iteration over the input array and maintaining counts within the hash table. While it's not extremely challenging, it does require clarity on how to utilize a hash table effectively for counting occurrences.