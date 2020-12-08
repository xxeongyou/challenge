function countVowelConsonant(str) {
    const arr = str.split('');
    let arrNum = [];
    for(let i=0 ; i<arr.length ; i++) {
        switch (arr[i]) {
            case 'a' : case 'e' : case 'i' : case 'o' : case 'u' :
                arrNum.push(1);
                break;
            default :
                arrNum.push(2);
                break;
        }
    }
    const reduceArr = (accumulator, currentValue) => accumulator + currentValue;
    const sum = arrNum.reduce(reduceArr);
    return sum;
}
  
  
  
  /*
  you are given a string s that consist of only lowercase English letters.
  if vowels are given a value of 1 and consonants are given a value 2,
  return the sum of all of the letters in the input string.
  */
  describe('countVowelConsonant()', () => {
      it('returns total of vowels(1) and consonants(2) to be added', () => {
          // arrange
          const value = 'abcde';
          
          // act
          const result = countVowelConsonant(value);
  
          // log
          console.log("result: ", result);
          
          // assert
          expect(result).toBe(8);
      });
  });