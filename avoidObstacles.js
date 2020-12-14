function avoidObstacles(nums) {
    const arr = nums.sort();
    let i = 1;
    while(true) {
        const res = arr.every(element => element%i != 0);
        if(res){
            return i;
            break;
        }
        i++;
    }
}

/*
You are given an array of integers representing coordinates of obstacles situated on a straight line.
Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by som integer.
Find the minimal length of the jump enough to avoid all the obstacles.

Hints : sort(), every()
*/
describe('avoidObstacles()', () => {
    it('returns minimal number of jumps in between numbers', () => {
        // arrange
        const nums = [5, 3, 6, 7, 9];
        
        // act
        const result = avoidObstacles(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(4);
    });
});