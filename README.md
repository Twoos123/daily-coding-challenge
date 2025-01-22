## About

This repository contains daily coding challenges generated using the Perplexity API. Each challenge is automatically generated and committed to this repository.

## Today's Challenge

### Coding Challenge: "Restaurant Seating Arrangement"

#### Problem Description
You are a manager at a busy restaurant, and you need to optimize the seating arrangement for your customers. Given a list of customer preferences and table capacities, determine the most efficient seating arrangement that maximizes customer satisfaction.

#### Example Input/Output

**Input:**
- `customers`: A list of customer preferences in the format `[customer_id, preference (high/medium/low)]`.
- `tables`: A dictionary of tables with their capacities.

**Output:**
- A dictionary where keys are customer IDs and values are the table numbers assigned to them.

#### Constraints:
- The preferences are sorted in descending order (high > medium > low).
- The tables are available on a first-come, first-served basis.
- Each customer can only be seated at one table.

#### Example:
```plaintext
customers = [
    (1, 'high'),
    (2, 'medium'),
    (3, 'high'),
    (4, 'low'),
    (5, 'medium')
]

tables = {
    10: 5,
    11: 3,
    12: 4,
    13: 2,
    14: 6
}
```

**Expected Output:**
```plaintext
seating_arrangement = {
    1: 10,
    2: 11,
    3: 10,
    4: 12,
    5: 13
}
```

#### Solution in Python

```python
def restaurant_seating(customers, tables):
    # Sort customers by preference and then by ID
    customers.sort(key=lambda x: (-[preference for preference in ['high', 'medium', 'low'] if preference == x[1]], x[0]))

    # Initialize the seating arrangement dictionary
    seating_arrangement = {}
    
    # Iterate over available tables in ascending order of capacity
    sorted_tables_by_capacity = sorted(tables.items(), key=lambda item: item[1])
    
    for i, customer in enumerate(customers):
        # Assign the next available table to the current customer
        for table_number, capacity in sorted_tables_by_capacity:
            if capacity > 0:
                seating_arrangement[customer[0]] = table_number
                tables[table_number] -= 1 # Decrement capacity after assignment
                break
    
    return seating_arrangement

# Example usage:
customers = [
    (1, 'high'),
    (2, 'medium'),
    (3, 'high'),
    (4, 'low'),
    (5, 'medium')
]

tables = {
    10: 5,
    11: 3,
    12: 4,
    13: 2,
    14: 6
}

print(restaurant_seating(customers, tables))
```

This solution sorts the customers based on their preferences and then by their IDs. It then iterates through the available tables in ascending order of capacity, assigning each customer to the next available table based on their preference. The output will be the most efficient seating arrangement that maximizes customer satisfaction.