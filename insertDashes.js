function insertDashes(arr) {
    const word = arr.split(' ');
    const dashedArr = [];
    for(let i=0; i<word.length; i++) {
        const dashedWord = word[i].split('').join('-');
        dashedArr.push(dashedWord);
    }
    return dashedArr.join(' ');
}



/*
Transform a given sentence into a new one with dashes between each two consecutive letters
Hint : Join, split
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});