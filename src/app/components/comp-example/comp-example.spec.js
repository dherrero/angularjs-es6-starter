describe('Component compExample', () => {
    var component;

    beforeEach(() => {
        angular.mock.module('app');        
    });

    beforeEach(inject((_$componentController_) => {
        component = _$componentController_('compExample');
    }));

    it('compExample should exists', () => {
        expect(component).toBeDefined();
    });
});