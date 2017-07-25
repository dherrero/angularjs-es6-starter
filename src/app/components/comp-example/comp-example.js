import { app } from '../../module';
import exampleTpl from './comp-example.html';

class CompExample{
    constructor(toastr, $filter){
        this.toastr = toastr;
        this.$filter = $filter;
    }

    toast(type){
        let hi = this.$filter('translate')('APP_HI');
        let ex = this.$filter('translate')('APP_EXAMPLE');
        let capName = this.$filter('capitalize')(type);
        let typeName = this.$filter('translate')(capName);

        this.toastr[type](hi, `${ex} ${typeName}`);
    }
}

CompExample.$inject = ['toastr', '$filter'];

const compExample = {
    template: exampleTpl,
    controller: CompExample
};

app.component('compExample', compExample)