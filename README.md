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

### Coding Challenge: "Restaurant Menu Balancer"

#### Problem Description:
You are given a list of menu items from a restaurant, each item with its price and the number of items available in stock. The goal is to balance the menu by ensuring that the total cost of the items in each category (e.g., appetizers, main courses, desserts) is as close to equal as possible. You must distribute the items across categories while minimizing the total cost difference between categories.

#### Example Input/Output:

**Input:**
```
menu_items = [
    {"name": "Appetizer1", "price": 10.99, "stock": 5},
    {"name": "Appetizer2", "price": 7.99, "stock": 3},
    {"name": "Main Course1", "price": 19.99, "stock": 4},
    {"name": "Main Course2", "price": 14.99, "stock": 6},
    {"name": "Dessert1", "price": 8.99, "stock": 2},
    {"name": "Dessert2", "price": 12.99, "stock": 5}
]
```

**Output:**
```
{
    "appetizers": [
        {"name": "Appetizer1", "price": 10.99, "stock": 3},
        {"name": "Appetizer2", "price": 7.99, "stock": 3}
    ],
    "main_courses": [
        {"name": "Main Course1", "price": 19.99, "stock": 2},
        {"name": "Main Course2", "price": 14.99, "stock": 4}
    ],
    "desserts": [
        {"name": "Dessert1", "price": 8.99, "stock": 2},
        {"name": "Dessert2", "price": 12.99, "stock": 3}
    ]
}
```

#### Constraints:
- The total number of items in each category must be distributed as evenly as possible.
- The total cost of each category must be as close to equal as possible.
- If an item's stock is less than the required number to distribute evenly, it should be placed in the category with the smallest total cost so far.

#### Solution in Python:

```python
def balance_menu(menu_items):
    # Group items by category (assuming categories are 'appetizers', 'main_courses', 'desserts')
    categories = {'appetizers': [], 'main_courses': [], 'desserts': []}
    
    # Initialize dictionaries to store items and their costs
    cost_dict = {'appetizers': 0, 'main_courses': 0, 'desserts': 0}
    
    # Distribute items into categories
    for item in menu_items:
        category = item['name'].split()[0]
        categories[category].append(item)
        cost_dict[category] += item['price'] * item['stock']
    
    # Distribute items as evenly as possible while minimizing cost difference
    result = []
    
    for category, items in categories.items():
        total_stock = sum(item['stock'] for item in items)
        total_cost = cost_dict[category]
        ideal_stock_per_item = total_stock // len(items)
        
        allocated_items = []
        
        remaining_items = items[:]
        
        while remaining_items:
            best_category_for_item = min(cost_dict, key=lambda k: cost_dict[k] / len(categories[k]))
            best_item = min(remaining_items, key=lambda i: abs(i['stock'] - ideal_stock_per_item))
            
            if best_item['stock'] <= ideal_stock_per_item:
                allocated_items.append(best_item)
                cost_dict[best_category_for_item] -= best_item['price']
                remaining_items.remove(best_item)
            else:
                allocated_items.append(best_item)
                cost_dict[best_category_for_item] -= best_item['price']
                remaining_items.remove(best_item)
                break
        
        result.append({'name': category, 'items': allocated_items})
    
    return result

# Example usage:
menu_items = [
    {"name": "Appetizer1", "price": 10.99, "stock": 5},
    {"name": "Appetizer2", "price": 7.99, "stock": 3},
    {"name": "Main Course1", "price": 19.99, "stock": 4},
    {"name": "Main Course2", "price": 14.99, "stock": 6},
    {"name": "Dessert1", "price": 8.99, "stock": 2},
   
