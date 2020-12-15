function arrayMaximalAdjacentDifference(nums) {
    console.log(Math.abs(nums[0]-nums[0+1]));
    const arr = [];
    for(let i=0 ; i<nums.length-1 ; i++) {
        arr.push(Math.abs(nums[i]-nums[i+1]));
    }
    return Math.max(...arr);
}

/*
Given an array of integers, findthe maximal absolute difference between any two of its adjacent elements.
Hint : Math.abs() 절대값을 구함.
*/
describe('arrayMaximalAdjacentDifference()', () => {
    it('returns largest difference between adjacent values', () => {
        // arrange
        const nums = [2, 4, 1, 0];
        
        // act
        const result = arrayMaximalAdjacentDifference(nums);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(3);
    });

    it('returns largest difference between adjacent values example 2', () => {
        // arrange
        const nums = [2, 9, 1, 0];
        
        // act
        const result = arrayMaximalAdjacentDifference(nums);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});