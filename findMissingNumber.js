function findMissingNumber(arr, N) {
    // Calculate the sum of all numbers from 1 to N using the formula (N * (N + 1)) / 2
    const expectedSum = (N * (N + 1)) / 2;

    // Calculate the sum of elements in the input array
    const actualSum = arr.reduce((acc, num) => acc + num, 0);

    // The missing number is the difference between the expected sum and the actual sum
    const missingNumber = expectedSum - actualSum;

    return missingNumber;
}
const inputArray = [1, 2, 4, 5, 6]; // One number (3) is missing
const N = 6; // Maximum number in the range

const missingNumber = findMissingNumber(inputArray, N);
console.log(missingNumber); // Output: 3
