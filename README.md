# Daily Coding Challenge Project

## About

This repository contains daily coding challenges generated using the Perplexity API. Each challenge is automatically generated and committed to this repository.

## Today's Challenge

### Coding Challenge: "Optimizing Stock Trading with Moving Averages"

#### Problem Description
Create a TypeScript program that simulates stock trading using a moving average strategy. The program should take the following inputs:
- An array of daily stock prices.
- The window size for the moving average.
- The threshold value for buying and selling.

The program should output the total profit made over the given period. The moving average strategy works as follows:
1. Calculate the moving average over the window size.
2. If the current price is below the moving average and it hasn't been below for the last `window_size` days, buy a stock.
3. If the current price is above the moving average and it hasn't been above for the last `window_size` days, sell a stock.

#### Example Input/Output
**Input:**
```typescript
const stockPrices = [100, 80, 70, 60, 50, 40, 30, 20, 10];
const windowSize = 3;
const threshold = 10;
```
**Output:**
```plaintext
Total Profit: 10
```
Explanation:
- Day 1: Price = 100, Moving Average = (100 + 100 + 100)/3 = 100. No action.
- Day 2: Price = 80, Moving Average = (100 + 100 + 80)/3 = 93.33. No action.
- Day 3: Price = 70, Moving Average = (100 + 80 + 70)/3 = 83.33. No action.
- Day 4: Price = 60, Moving Average = (80 + 70 + 60)/3 = 70. No action.
- Day 5: Price = 50, Moving Average = (70 + 60 + 50)/3 = 60. Buy stock.
- Day 6: Price = 40, Moving Average = (60 + 50 + 40)/3 = 50. No action.
- Day 7: Price = 30, Moving Average = (50 + 40 + 30)/3 = 40. No action.
- Day 8: Price = 20, Moving Average = (40 + 30 + 20)/3 = 30. Buy stock.
- Day 9: Price = 10, Moving Average = (30 + 20 + 10)/3 = 20. Sell stock.

Total Profit = (10 - 10) + (10 - 10) = 0

#### Constraints
1. The `windowSize` should be a positive integer.
2. The `threshold` should be a positive integer.
3. The `stockPrices` array should contain positive integers.

#### Solution in TypeScript
```typescript
function movingAverageProfit(stockPrices: number[], windowSize: number, threshold: number): number {
    if (windowSize <= 0 || threshold <= 0) {
        throw new Error("Window size and threshold must be positive integers.");
    }

    let totalProfit = 0;
    let boughtStocks = 0;
    let lastBelowThresholdDays = 0;
    let lastAboveThresholdDays = 0;

    for (let i = 0; i < stockPrices.length; i++) {
        if (i >= windowSize) {
            const movingAverage = stockPrices.slice(i - windowSize, i).reduce((acc, price) => acc + price, 0) / windowSize;
            
            if (stockPrices[i] < movingAverage && lastBelowThresholdDays === windowSize) {
                boughtStocks++;
                totalProfit -= stockPrices[i];
                lastBelowThresholdDays = 1;
            } else if (stockPrices[i] > movingAverage && lastAboveThresholdDays === windowSize) {
                boughtStocks--;
                totalProfit += stockPrices[i];
                lastAboveThresholdDays = 1;
            } else {
                if (stockPrices[i] < movingAverage) {
                    lastBelowThresholdDays++;
                } else {
                    lastAboveThresholdDays++;
                }
            }
        } else {
            if (stockPrices[i] < movingAverage) {
                lastBelowThresholdDays++;
            } else {
                lastAboveThresholdDays++;
            }
        }
    }

    return totalProfit;
}

// Example usage:
const stockPrices = [100, 80, 70, 60, 50, 40, 30, 20, 10];
const windowSize = 3;
const threshold = 10;

console.log(movingAverageProfit(stockPrices, windowSize, threshold));
```

This solution calculates the moving average for each window and checks if it's below or above the threshold while keeping track of the number of days the stock price has been below or above the moving average. It adjusts the