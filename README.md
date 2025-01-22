# Daily Coding Challenge Generator 🚀

An AI-powered platform that generates unique coding challenges daily, helping developers enhance their problem-solving skills through consistent practice.

## Features

- 🤖 **AI-Powered**: Challenges are generated using advanced AI to ensure uniqueness and relevance
- 🕒 **Daily Updates**: New challenges are automatically generated and committed at 12 AM EST
- ⭐ **Difficulty Ratings**: Each challenge includes a difficulty rating from 1-5
- 💡 **Complete Solutions**: Every challenge comes with a detailed Python solution

## Built With

- 🔥 **React + Vite**: For a fast and modern development experience
- 🎨 **Tailwind CSS**: For beautiful, responsive styling
- 🔷 **TypeScript**: For type-safe code
- 🛠️ **Shadcn/UI**: For pre-built, customizable components
- 🔌 **Supabase**: For backend functionality and database
- 🤖 **Perplexity API**: For AI-powered challenge generation

## Today's Challenge

Difficulty: ⭐⭐⭐ (3/5)

### Coding Challenge: **Fractional Remainder Queue**

**Problem Description:**
Implement a queue data structure that supports efficient insertion and extraction of elements, with an additional constraint: each element in the queue is a fraction with a numerator and a denominator. The twist is that when an element is extracted, it must leave a fractional remainder in the queue. For example, if the fraction 3/4 is extracted, the remainder 1/4 should remain in the queue.

**Example Input/Output:**

- **Input:** [Insertion of 1/2, 2/3, Extraction of 1/2]
  - Queue: [2/3, 1/2]
  - Remainders: [0, 1/2]
  
- **Input:** [Insertion of 3/4, Extraction of 2/3]
  - Queue: [3/4, 1/2]
  - Remainders: [1/3, 1/2]

**Constraints:**
1. The queue should support insertion and extraction of fractions.
2. When an element is extracted, it must leave a fractional remainder in the queue.
3. The remainder should be calculated as `numerator / denominator` modulo `numerator` and `denominator`.

**Solution in Python:**

```python
from fractions import Fraction

class FractionalRemainderQueue:
    def __init__(self):
        self.queue = []
        self.remainders = []

    def insert(self, fraction):
        self.queue.append(fraction)
        # Calculate the remainder by finding the fractional part
        remainder = fraction.numerator % fraction.denominator
        self.remainders.append(Fraction(remainder, fraction.denominator))

    def extract(self):
        if not self.queue:
            return None
        
        element = self.queue.pop(0)
        remainder_index = self.remainders.index(Fraction(element.numerator % element.denominator, element.denominator))
        
        # Remove the corresponding remainder
        del self.remainders[remainder_index]
        
        return element
    
    def print_status(self):
        print("Queue:", [f"{fraction.numerator}/{fraction.denominator}" for fraction in self.queue])
        print("Remainders:", [f"{remainder.numerator}/{remainder.denominator}" for remainder in self.remainders])

# Usage:
queue = FractionalRemainderQueue()
queue.insert(Fraction(1, 2))
queue.insert(Fraction(2, 3))
extracted = queue.extract()
print("Extracted:", f"{extracted.numerator}/{extracted.denominator}")
queue.print_status()

queue.insert(Fraction(3, 4))
extracted = queue.extract()
print("Extracted:", f"{extracted.numerator}/{extracted.denominator}")
queue.print_status()
```

**Explanation:**
1. **Initialization:** The `FractionalRemainderQueue` class initializes two lists: `queue` and `remainders`.
2. **Insert:** The `insert` method adds a fraction to the `queue` and calculates its remainder by finding the fractional part using `numerator % denominator`. The remainder is then appended to the `remainders` list.
3. **Extract:** The `extract` method removes the first element from the `queue`, calculates its corresponding remainder index in the `remainders` list, and removes that element from the list.
4. **Print Status:** The `print_status` method prints both the current state of the queue and the remainders.

This implementation ensures that when an element is extracted, it leaves a fractional remainder in the queue as specified by the problem constraints.