import { app } from '../../module';
import exampleTpl from './comp-example.html';

class CompExample{
    constructor(toastr){
        this.toastr = toastr;
    }

    toast(type){
        this.toastr[type]('Hello world!', 'Toastr fun!');
    }
}

CompExample.$inject = ['toastr'];

const compExample = {
    template: exampleTpl,
    controller: CompExample
};

app.component('compExample', compExample)