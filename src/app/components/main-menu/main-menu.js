import { app } from '../../module';
import mainMenuTpl from './main-menu.html';
import './main-menu.css';

class MainMenu {
    constructor(i18n, supportedLanguages, $state){
        this.i18n = i18n;
        this.languages = supportedLanguages;
        this.$state = $state;
        this._langSelected = i18n.getLocale();
    }
    get langSelected(){
        return this._langSelected;
    }
    set langSelected(value){
        this._langSelected = value;
        this.i18n.changeLocale(value);
    }
}

MainMenu.$inject = ['i18n', 'supportedLanguages', '$state'];

app.component('mainMenu', {
    template: mainMenuTpl,
    controller: MainMenu
});