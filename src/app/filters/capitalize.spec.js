describe('Filter: capitalize', () => {
    var capitalize;
    
    beforeEach(() => {
        angular.mock.module('app');        
    });
    beforeEach(inject((_capitalizeFilter_) => {
       capitalize = _capitalizeFilter_;
    }));

    it('can capitalize words', function() {
        expect(capitalize('hello')).toBe('Hello');
        expect(capitalize('hello world')).toBe('Hello World');
    });
  });