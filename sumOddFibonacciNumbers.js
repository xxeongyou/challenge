function sumOddFibonacciNumbers(num) {
    let firstNum = 1;
    let secondNum = 1;
    let thirdNum;
    let sum = firstNum; // secondNum만 더해지기 때문에 젤 처음 sum에 최초의 firstNum을 담아줌.
    while(secondNum<=num) {
       if(secondNum<=num && secondNum%2===1) { // secondNum가 바뀌기 전에 sum을 위한 if문 실행.
           sum+=secondNum;
       }  
       thirdNum = firstNum + secondNum;
       firstNum = secondNum;
       secondNum = thirdNum;
    }
    return sum;
}

/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.
The first six numbers of the Fibonacci sequence are 1,1,2,3,5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1,1,3 and 5.
*/
describe('sumOddFibonacciNumbers()', () => {
    it('returns sum of all odd Fibonnci numbers', () => {
        // arrange
        const num = 10;
        
        // act
        const result = sumOddFibonacciNumbers(num);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(10);
    });

    it('returns sum of all odd Fibonnci numbers 2nd example', () => {
        // arrange
        const num = 1000;
        
        // act
        const result = sumOddFibonacciNumbers(num);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(1785);
    });
});