function arrayPreviousLess(nums) {
    const arr = [];
    for(let i=nums.length-1; i>=0; i--) {
        if(nums[i]-nums[i-1]>0){
            arr.unshift(nums[i-1]);
        } else {
            arr.unshift(-1);
        }
    }
    return arr;
}

/*Given an array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. Store that value at position i in the answer. If no such value can found, store -1 instead.
Hint : unshift() : 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환.
*/
describe('arrayPreviousLess()', () => {
    it('shift previous postions from the left to a smaller value or store -1', () => {
        // arrange
        const nums = [3, 5, 2, 4, 5];
        
        // act
        const result = arrayPreviousLess(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([-1, 3, -1, 2, 4]);
    });
});