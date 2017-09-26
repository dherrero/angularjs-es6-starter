describe('Filter: capitalize', () => {
    var capitalize;
    
    beforeEach(() => {
        angular.mock.module('app');        
    });
    beforeEach(inject((_capitalizeFilter_) => {
       capitalize = _capitalizeFilter_;
    }));

    describe('basic scenarios', () => {
        it('can capitalize strings', function() {
            expect(capitalize('hello')).toBe('Hello');
            expect(capitalize('hello world')).toBe('Hello World');
            expect(capitalize('HELLO WORLD')).toBe('Hello World');
            expect(capitalize('hElLo WoRLD')).toBe('Hello World');
        });
    });

  });