function validTime(str) {
    const time = str.split(':');
    const hour = parseInt(time[0]);
    const min = parseInt(time[1]);
    if(hour>24 || min>59) {
        return false;
    }
    return true;
}

/*
Check if the given string is a correct time representation of the 24-hour clock.
Hint : parseInt(), split()
*/
describe('validTime()', () => {
    it('returns true for valid time', () => {
        // arrange
        const str = '13:58';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(true);
    });

    it('returns false when invalid hours', () => {
        // arrange
        const str = '25:51';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(false);
    });

    it('returns false when invalid minutes', () => {
        // arrange
        const str = '02:76';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 3: ", result);
        
        // assert
        expect(result).toBe(false);
    });
});