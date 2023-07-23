# findMissingNumber
To find the missing number in an array containing numbers from 1 to N, we can use the concept of summation. If we know the sum of all numbers from 1 to N, and we also have the sum of the elements in the array, then we can find the missing number by subtracting the latter from the former.
Thought Process:

    The function findMissingNumber takes two parameters: arr, the array containing numbers from 1 to N (with one number missing), and N, the maximum number in the range.
    We first calculate the sum of all numbers from 1 to N using the formula (N * (N + 1)) / 2. This sum represents the total sum if all numbers were present in the array.
    Next, we calculate the sum of elements in the input array arr using the reduce method. This sum represents the actual sum of the elements in the array.
    The missing number is the difference between the expected sum (calculated in step 2) and the actual sum (calculated in step 3). We store this missing number in the variable missingNumber.
    We then return the missingNumber.

Edge Cases to Consider:

    Empty Array: If the input array is empty, we can assume that the missing number is 1, as the array should contain numbers from 1 to N (inclusive) with one number missing.
    Missing Number is N: If the missing number is N, then N is not present in the array. The function should handle this case correctly and return N as the missing number.
    Duplicate Numbers: The input array should not contain duplicate numbers, as it will lead to incorrect results.
    In this example, the findMissingNumber function correctly identifies that the missing number in the array is 3.
