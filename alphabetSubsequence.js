function alphabetSubsequence(str) {
    const text = str.split('');
    for(let i=0; i<text.length; i++) {
        if(str.charCodeAt(i)>=str.charCodeAt(i+1)) {
            return false;
        }
    }
    return true;
}


/*
Check whether the given string is a subsequence of the plaintext alphabet.
Hint :
size property,
charCodeAt() : 문자의 유니코드를 반환하는 함수,
split()
*/
describe('alphabetSubsequence()', () => {
    it('returns false when it has duplicate letters', () => {
        // arrange
        const str = 'effg';
        
        // act
        const result = alphabetSubsequence(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });

    it('returns false when NOT in ascending a - z order', () => {
        // arrange
        const str = 'cdce';
        
        // act
        const result = alphabetSubsequence(str);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(false);
    });
    
    it('returns true whenno duplicates and is ascending a - z order ', () => {
        // arrange
        const str = 'ace';
        
        // act
        const result = alphabetSubsequence(str);

        // log
        console.log("result 3: ", result);
        
        // assert
        expect(result).toBe(true);
    });
});