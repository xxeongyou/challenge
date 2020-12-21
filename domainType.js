function domainType(domains) {
    const domainType = [];
    domains.forEach(domain => {
        // const domains = domain.split('.').slice(-1).join();
        const domains = domain.split('.').pop();
        switch (domains) {
            case 'org': domainType.push('organization'); break;
            case 'com': domainType.push('commercial'); break;
            case 'net': domainType.push('network'); break;
            case 'info': domainType.push('information'); break;
        }
    })
    return domainType;
}

/*
Hint : split(), push()
pop() : 배열의 마지막 요소를 제거하고 그 요소를 반환
*/
describe('domainType()', () => {
    it('returns list of domain types', () => {
        // arrange
        const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];
        
        // act
        const result = domainType(domains);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(["organization", "commercial", "network", "information"]);
    });
});