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
**Title:** `Netflix Recommendation System`
**Objective:** 
Design a hash table-based system to manage movie recommendations for a streaming service like Netflix. The system should efficiently store and retrieve movie recommendations based on user preferences.

**Input:**
- **Users:** A list of unique user IDs.
- **Movies:** A list of unique movie titles.
- **User Preferences:** A mapping of user IDs to their preferred movie genres (e.g., action, comedy, drama).

**Output:**
- **Recommended Movies for Each User:** A list of recommended movie titles for each user.

### Constraints
- Each user has a unique set of preferred genres.
- Each movie belongs to one or more genres.
- The system should handle a large number of users and movies efficiently.

### Example Input/Output

**Input:**
```python
users = ["user1", "user2", "user3"]
movies = ["Movie A", "Movie B", "Movie C"]
user_preferences = {
    "user1": ["action", "comedy"],
    "user2": ["drama", "thriller"],
    "user3": ["action", "comedy"]
}
```

**Output:**
```python
recommended_movies = {
    "user1": ["Movie A", "Movie C"],  # Both movies are in 'action' or 'comedy'
    "user2": ["Movie B"],           # Only one movie matches 'drama' or 'thriller'
    "user3": ["Movie A", "Movie B"]  # Both movies are in 'action' or 'comedy'
}
```

### Detailed Explanation

To solve this problem efficiently, we will use a hash table to store the user preferences and movie genres. The key will be the user ID, and the value will be a set of preferred genres for that user. Similarly, we will store the movie genres in another hash table where the key is the movie title and the value is a set of genres associated with that movie.

#### Step-by-Step Solution

1. **Hash Table Initialization:**

   ```python
   user_preferences = {}  # Key: User ID, Value: Set of preferred genres
   movie_genres = {}       # Key: Movie Title, Value: Set of genres
   ```

2. **Populating `user_preferences` and `movie_genres`:**

   ```python
   for user_id, genres in user_preferences.items():
       user_preferences[user_id] = set(genres)
   
   for movie_title, genres in movie_genres.items():
       movie_genres[movie_title] = set(genres)
   ```

3. **Finding Recommended Movies for Each User:**

    For each user, iterate through their preferred genres and find movies that belong to those genres.

    ```python
    recommended_movies = {}
    
    for user_id in users:
        recommended_movies[user_id] = []
        
        for movie_title in movies:
            if (user_preferences.get(user_id) & movie_genres.get(movie_title)).issubset(user_preferences[user_id]):
                recommended_movies[user_id].append(movie_title)
                
    return recommended_movies
```

#### Explanation

- **Time Complexity:** The overall time complexity is O(n*m*avg_len), where n is the number of users or movies (whichever is larger), m is the average number of preferred genres per user or associated genres per movie (whichever is larger), and avg_len is the average length of sets involved in intersection operations.
  
  - Initializing hash tables (O(n + m))
  - Populating hash tables (O(n*m))
  - Finding recommended movies (O(n*m*avg_len))

- **Space Complexity:** The space complexity is O(n + m), as we need to store information about each user's preferences and each movie's genres.

### Optimal Solution

This approach ensures that we can efficiently handle large datasets by using hash tables to store and retrieve data quickly. The use of sets for storing genres allows for efficient intersection operations when finding matching movies.

### Difficulty Rating
This problem requires understanding how to efficiently manage and manipulate data using hash tables while ensuring scalability for large datasets. The intersection operation adds a layer of complexity but is still within the realm of manageable algorithms for experienced developers.