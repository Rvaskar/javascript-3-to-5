//!1. Return prime numbers in an array:

const primeNumbers = [1,2,3,4,5,6,7,8];
const primeArray = primeNumbers.filter(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
});
console.log("Prime Numbers:", primeArray);

//!2. Return Armstrong numbers in an array:

const armstrongNumbers = [153, 371, 1634, 8208, 9474];
const armstrongArray = armstrongNumbers.filter(num => {
    const strNum = num.toString();
    const power = strNum.length;
    let sum = 0;

    for (let digit of strNum) {
        sum += Math.pow(parseInt(digit), power);
    }

    return sum === num;
});
console.log("Armstrong Numbers:", armstrongArray);

//!3. Find Fibonacci series of a number:

let n = 10;
const fibonacciSeries = [0, 1];
for (let i = 2; i <= n; i++) {
    fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
}
console.log("Fibonacci Series:", fibonacciSeries);

//!4. Return 3rd biggest and 3rd smallest element in an array:

const numbersArray = [8, 2, 5, 1, 9, 7, 3, 10];
const sortedArray = numbersArray.sort((a, b) => a - b);
const result = {
    thirdSmallest: sortedArray[2],
    thirdBiggest: sortedArray[sortedArray.length - 3]
};
console.log("3rd Smallest and 3rd Biggest:", result);

//!5. Sort the number array without using the sort method:

const unsortedArray = [4, 2, 8, 1, 6, 3];
const a = unsortedArray.length;

// Bubble Sort algorithm
for (let i = 0; i < a - 1; i++) {
    for (let j = 0; j < a - 1 - i; j++) {
        // Swap if the element found is greater than the next element
        if (unsortedArray[j] > unsortedArray[j + 1]) {
            const temp = unsortedArray[j];
            unsortedArray[j] = unsortedArray[j + 1];
            unsortedArray[j + 1] = temp;
        }
    }
}

console.log("Sorted Array:", unsortedArray);


//!6.Check if the given string is PALINDROME or not:

const testString = "A man, a plan, a canal, Panama!";
const cleanedStr = testString.toLowerCase().replace(/[^a-z0-9]/g, '');
const reversedStr = cleanedStr.split('').reverse().join('');

const isPalindrome = cleanedStr === reversedStr;
console.log("Is Palindrome:", isPalindrome);

//!7. Find the sum of numbers in an ALPHA NUMERIC STRING:

const alphaNumericString = "abc123def456ghi";
const numbers = alphaNumericString.match(/\d+/g);
const sum = numbers ? numbers.reduce((acc, num) => acc + parseInt(num), 0) : 0;

console.log("Sum of Numbers:", sum);

//!8. Count the number of characters in each WORD and count them:

const inputSentence = "Hello World! This is a sample sentence.";
const words = inputSentence.split(/\s+/);
const wordCounts = {};

words.forEach(word => {
    const cleanedWord = word.replace(/[^a-zA-Z]/g, '');
    wordCounts[cleanedWord] = (wordCounts[cleanedWord] || 0) + cleanedWord.length;
});

console.log("Character Counts in Each Word:", wordCounts);


//!9. Reverse the words in a SENTENCE:

const inputSentenceForReversal = "This is a sample sentence.";
const reversedSentence = inputSentenceForReversal.split(/\s+/).reverse().join(' ');

console.log("Reversed Words:", reversedSentence);

//!10. Convert BINARY to DECIMAL:

const binaryNumber = "101010";
const decimalEquivalent = parseInt(binaryNumber, 2);

console.log("Decimal Equivalent:", decimalEquivalent);
