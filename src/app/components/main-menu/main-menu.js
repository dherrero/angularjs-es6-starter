import { app } from '../../module';
import mainMenuTpl from './main-menu.html';
import './main-menu.css';

class MainMenu {
    constructor(i18n){
        this.i18n = i18n;
        this.languages = [
            {id:'es', name : 'Español'},
            {id:'en', name : 'English'}
        ];
        this.langSelected = 'es';
    }
    changeLanguage(lang){
        this.langSelected = lang;
        this.i18n.changeLocale(lang);
    }
}

MainMenu.$inject = ['i18n'];

app.component('mainMenu', {
    template: mainMenuTpl,
    controller: MainMenu
});