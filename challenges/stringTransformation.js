const readline = require('readline');

function isValidInput(input) {
    // Regular expression to match alphanumeric characters and spaces
    const regex = /^[a-zA-Z0-9\s]*$/;
    return regex.test(input) && input.length >= 1 && input.length <= 1000;
}

function transformString(input) {
    const length = input.length;
    let result;

    if (!isValidInput(input)) {
        console.log("Invalid input. Please enter a string containing 1 to 1000 alphanumeric characters and spaces only.");
        return;
    }

    if (length % 15 === 0) {
        // If divisible by 15, perform both transformations
        result = input.split('').map(char => char.charCodeAt(0)).join(' ');
        result = result.split('').reverse().join('');
        console.log("The string length is divisible by both 3 and 5.");
    } else if (length % 5 === 0) {
        // If divisible by 5, replace each character with its ASCII code
        result = input.split('').map(char => char.charCodeAt(0)).join(' ');
        console.log("The string length is divisible by 5 but not by 3.");
    } else if (length % 3 === 0) {
        // If divisible by 3, reverse the entire string
        result = input.split('').reverse().join('');
        console.log("The string length is divisible by 3 but not by 5.");
    } else {
        // If not divisible by 3 or 5, return the original string
        result = input;
        console.log("The string length is not divisible by 3 or 5.");
    }

    return result;
}

function getUserInput() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter a string: ', (input) => {
        const output = transformString(input);
        if (output) {
            console.log(`Output: "${output}"`);
        }
        rl.close();
    });
}

getUserInput();
