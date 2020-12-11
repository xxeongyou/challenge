function adjacentElementsProduct(nums) {
    let multiples = [];
    for(let i=0; i<nums.length-1; i++) {
        multiples.push(nums[i]*nums[i+1]);
    }
    const max = Math.max(...multiples); // spread operator
    return max;
}



/**
* Test Suite 
*/
describe('adjacentElementsProduct()', () => {
    it('returns largest product of adjacent values', () => {
        // arrange
        const nums = [3, 6, -2, -5, 7, 3];
        
        // act
        const result = adjacentElementsProduct(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(21);
    });
});