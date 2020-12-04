function chunkyMonkey(values, size) {
    let arr = [];
    for(i=0;i<values.length;i=i+size){
        const res = values.slice(i,i+size);
        arr.push(res);
    }
    return arr;
}

/**
* Test Suite 
*/
describe('chunkyMonkey()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const values = ["a", "b", "c", "d","e","f","g","h","i"];
        const size = 3;
        
        // act
        const result = chunkyMonkey(values, size);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([["a", "b"], ["c", "d"]]);
    });
});