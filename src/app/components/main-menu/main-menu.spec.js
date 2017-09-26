describe('Component mainMenu', () => {
    var component;    
    var i18n;
    beforeEach(() => {
        angular.mock.module('app');        
    });

    beforeEach(inject((_$componentController_, _i18n_) => {
        component = _$componentController_('mainMenu');
        i18n = _i18n_;
    }));

    describe('basic scenarios', () => {
        it('should exists', () => {
            expect(component).toBeDefined();
        });

        it('should change language when change selected languge', () => {
            var setter = spyOnProperty(component, 'langSelected', 'set');
            component.langSelected = 'es';
            expect(setter).toHaveBeenCalled();
            setTimeout(()=>{
                expect(i18n.getLocale()).toBe('es');
            });
        });
    });
});