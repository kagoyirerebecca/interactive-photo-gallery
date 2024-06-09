const readline = require('readline');

function getUserInput(callback) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter the array elements separated by commas: ', (arrInput) => {
        rl.question('Enter the target sum: ', (targetInput) => {
            const arr = arrInput.split(',').map(Number);
            const target = parseInt(targetInput, 10);
            callback(arr, target);
            rl.close();
        });
    });
}

function hasSubarrayWithTargetSum(arr, target) {
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        // Ensure the currentSum does not exceed the target
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        // Check if the currentSum is equal to the target
        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

// Time Complexity: O(n) - We traverse the array once with the sliding window approach.
// Space Complexity: O(1) - We use a constant amount of extra space.

getUserInput((arr, target) => {
    // Check if the input respects the constraints
    if (arr.length < 1 || arr.length > 100000) {
        console.log("Array size out of constraints");
        return;
    }
    if (Math.max(...arr) > 1000000000 || Math.min(...arr) < -1000000000) {
        console.log("Array elements out of constraints");
        return;
    }
    if (target > 1000000000 || target < -1000000000) {
        console.log("Target sum out of constraints");
        return;
    }

    const result = hasSubarrayWithTargetSum(arr, target);
    console.log(result ? "true" : "false");
});
