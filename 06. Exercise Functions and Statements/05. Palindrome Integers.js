function solve(numbers) {
    // numbers.forEach(number => printPalindromeResult(number))
    numbers.forEach(printPalindromeResult)

    function isPalindrome(number) {
        const forwardNumber = number.toString();
        const backwardNumber = forwardNumber.split('').reverse().join('');
    
        return forwardNumber === backwardNumber;
    }
    
    function printPalindromeResult(number) {
        console.log(isPalindrome(number))
    }
}
