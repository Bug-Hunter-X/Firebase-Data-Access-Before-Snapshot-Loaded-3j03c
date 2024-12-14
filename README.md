# Firebase Data Access Before Snapshot Loaded

This repository demonstrates a common error in Firebase: attempting to access data from a document snapshot before the asynchronous operation to fetch the data has completed.  The example showcases the problem and provides a solution using promises and async/await.

## Problem

The `bug.js` file shows how accessing the data directly leads to an error because the snapshot is not yet populated with data when you try to access it.

## Solution

The `bugSolution.js` file demonstrates how to correctly handle asynchronous operations using `.then()` to ensure the data is ready before accessing it.  This prevents errors and ensures your application functions correctly.

## How to reproduce

1. Clone this repository.
2. Install the Firebase SDK. 
3. Run the `bug.js` file and observe the error.
4. Run the `bugSolution.js` file and observe the correct behavior.