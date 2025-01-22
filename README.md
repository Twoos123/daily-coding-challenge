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

Difficulty: ⭐⭐⭐⭐ (4/5)

### Coding Challenge: "Dynamic Taxi Dispatch System"

#### Problem Description

You are tasked with creating a dynamic taxi dispatch system that efficiently assigns taxis to passengers. The system should handle multiple pickups and drop-offs, ensuring that each taxi is maximized in terms of distance traveled and time spent. The system will be given a list of passenger locations (x, y coordinates) along with their desired drop-off locations. Your task is to develop an algorithm that assigns the closest available taxi to each passenger and minimizes the overall distance traveled by all taxis.

#### Example Input/Output

**Input:**
- List of passenger pickup locations: `[(1, 2), (3, 4), (5, 6)]`
- List of passenger drop-off locations: `[(7, 8), (9, 10), (11, 12)]`
- Initial taxi location: `(0, 0)`
- Number of taxis: `2`

**Output:**
- Assignment of taxis to passengers:
    - Taxi 1: `[Passenger 1 -> Drop-off 1, Passenger 2 -> Drop-off 2]`
    - Taxi 2: `[Passenger 3 -> Drop-off 3]`
- Total distance traveled by all taxis

#### Constraints

- The system should handle any number of passengers and taxis.
- The initial location of each taxi is at `(0, 0)`.
- The distance between two points `(x1, y1)` and `(x2, y2)` is calculated using the Euclidean distance formula: `√((x2 - x1)^2 + (y2 - y1)^2)`.
- Taxis cannot travel through each other.

#### Solution in Python

```python
import math

def calculate_distance(point1, point2):
    return math.sqrt((point2[0] - point1[0])**2 + (point2[1] - point1[1])**2)

def assign_taxis(pickup_locations, drop_off_locations, num_taxis):
    # Initialize taxis at origin
    taxis = [(0, 0) for _ in range(num_taxis)]
    
    # Assign closest taxi to each passenger
    assignments = [[] for _ in range(num_taxis)]
    
    for i, pickup in enumerate(pickup_locations):
        min_distance = float('inf')
        closest_taxi_index = None
        
        for j, taxi in enumerate(taxis):
            distance = calculate_distance(pickup, taxi)
            if distance < min_distance:
                min_distance = distance
                closest_taxi_index = j
        
        assignments[closest_taxi_index].append(f'Passenger {i + 1} -> Drop-off {i + 1}')
        
        # Update taxi position after each pickup
        taxis[closest_taxi_index] = drop_off_locations[i]
    
    return assignments

# Example usage
pickup_locations = [(1, 2), (3, 4), (5, 6)]
drop_off_locations = [(7, 8), (9, 10), (11, 12)]
num_taxis = 2

assignments = assign_taxis(pickup_locations, drop_off_locations, num_taxis)
total_distance_traveled = 0

for i, taxi_path in enumerate(assignments):
    for j in range(len(taxi_path)):
        if j == 0:
            # First point is pickup location
            current_point = pickup_locations[j]
        else:
            current_point = drop_off_locations[j - 1]
        
        next_point = drop_off_locations[j] if j < len(drop_off_locations) - 1 else (11, 12)
        
        distance_traveled = calculate_distance(current_point, next_point)
        total_distance_traveled += distance_traveled
    
    print(f'Taxi {i + 1}: {", ".join(taxi_path)}')

print(f'Total distance traveled by all taxis: {total_distance_traveled}')
```

#### Difficulty Rating: 4/5

This challenge requires the implementation of a dynamic assignment algorithm that optimizes taxi routes based on passenger pickups and drop-offs. The solution involves calculating distances using Euclidean distance and managing the state of each taxi to ensure efficient assignment. The difficulty level is high due to the need for efficient data structures and algorithms to handle multiple pickups and drop-offs while minimizing overall distance traveled.