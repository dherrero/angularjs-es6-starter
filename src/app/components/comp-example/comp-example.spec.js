describe('Component compExample', () => {
    var component;
    var $document;

    beforeEach(() => {
        angular.mock.module('app');        
    });

    beforeEach(inject((_$componentController_, _$document_) => {
        component = _$componentController_('compExample');
        $document = _$document_;
    }));

    afterEach(() => {
        $document.find('#toast-container').remove();
    });

    describe('basic scenarios', () => {
        it('should exists', () => {
            expect(component).toBeDefined();
        });

        it('should show toast when click button error', () =>{
            component.toast('error');
            setTimeout(()=>{
                expect($('#toast-container .toast-error').length > 0).toBe(true);
            },500);
        });
    });
});