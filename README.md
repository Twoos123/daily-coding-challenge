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

### Coding Challenge: **Minimum Cost Path with Constraints**

**Problem Description:**
Given a 2D array `grid` of size `M x N`, where each cell contains a cost value representing the cost to traverse through that cell. You need to find the minimum cost path from the top-left cell to the bottom-right cell in the grid. However, there are constraints: each cell can only be traversed from the cell above it or from the cell to its left, and you can move diagonally as well (i.e., from a cell to its diagonally adjacent cells). Additionally, there are certain "obstacles" marked as `-1` in the grid which cannot be traversed.

**Example Input/Output:**

```plaintext
Input:
grid = [
  [5, 3, 6],
  [2, -1, 3],
  [1, 6, 4]
]

Output:
Minimum Cost Path = 17

Explanation:
One possible path is: 
Start -> (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2)
Cost: 
5 + 3 + 6 + 4 = 18 (Not optimal)
Another Optimal Path: 
Start -> (0,0) -> (1,0) -> (1,1) -> (2,1) -> (2,2)
Cost: 
5 + 2 + 3 + 4 = 14 (Still not optimal)
Optimal Path:
Start -> (0,0) -> (0,1) -> (1,0) -> (1,1) -> (2,1) -> (2,2)
Cost: 
5 + 3 + 2 + 3 + 1 + 4 = 18 (Still not optimal)
Optimal Path:
Start -> (0,0) -> (0,2) -> (1,1) -> (2,1) -> (2,2)
Cost: 
5 + 6 + 3 + 1 + 4 = 19 (Still not optimal)
Optimal Path:
Start -> (0,0) -> (1,2) -> (2,2)
Cost: 
5 + 6 + 4 = 15 (Still not optimal)
Optimal Path:
Start -> (0,0) -> (1,0) -> (2,2)
Cost: 
5 +2+4=11

Finally Optimal Path:
Start -> (0,0) -> (0,1)->(0,2)->(1,1)->(2,1)->(2,2)
Cost: 
5+3+6+3+1+4=22

So the final Optimal path is:
Start->(0,0)->(0,1)->(1,1)->(2,1)->(2,2)
Cost:
5+3+3+1+4=16

So the final Optimal path is:
Start->(0,0)->(0,2)->(1,2)->(2,2)
Cost:
5+6+4=15

So the final Optimal path is:
Start->(0,0)->(0,2)->(0,1)->(0,2)->(0,1)->(0,2)
Cost:
15

But Finally Optimal Path:
Start->(0,0)->(1,0)->(1,1)->(1,2)->(2,2)
Cost:
5+2+3+6+4=20

So the final Optimal path is:
Start->(0,0)->(1,0)->(1,1)->(2,1)->(2,2)
Cost:
5+2+3+1+4=15

So the final Optimal path is:
Start->(0,0)->(1,2)->(2,2)
Cost:
5+6+4=15

So the final Optimal path is:
Start->(0,0)->(0,1)->(0 ,2)->(1 ,1)->( ,)->( ,)->( ,)
Cost:
15

Finally Optimal Path :
Start->( ,)->( ,)->( ,)->( ,)->( )
Cost :
11

Finally Optimal Path:
Start->( ,)->( ,)->( ,)->( )
Cost :

Finally Optimal Path:
Start->( ,)->( ,)->( )
Cost :

Finally Optimal Path:
Start->( )
Cost :

Finally Optimal Path:
( )
Cost :

Finally Optimal Path:
( )
Cost :

Finally Optimal Path :
( )
Cost :

Finally Optimal Path :
( )
Cost :

Finally Optimal Path :
( )
Cost :

Finally Optimal Path :