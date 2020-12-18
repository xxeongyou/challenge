function differentSymbolsNaive(str) {
    let arr = [];
    str.split('').forEach(element => {
       if(arr.includes(element)===false) {
           arr.push(element);
       } 
    });
    return arr.length;
}



/*
Given a string. find the number of different characters in it.
Hint :
includes() : 배열에 해당 값이 포함되어있는지 판별 있다면 true 없다면 false를 반환,
split(),
push()
*/
describe('differentSymbolsNaive()', () => {
    it('returns count of unique characters', () => {
        // arrange
        const str = 'cabca';
        
        // act
        const result = differentSymbolsNaive(str);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(3);
    });
});