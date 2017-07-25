import { app } from '../../module';
import mainMenuTpl from './main-menu.html';
import './main-menu.css';

class MainMenu {
    constructor(i18n, supportedLanguages, $state){
        this.i18n = i18n;
        this.languages = supportedLanguages;
        this.$state = $state;
        this.langSelected = i18n.getLocale();
    }
    changeLanguage(lang){
        this.langSelected = lang;
        this.i18n.changeLocale(lang);
    }
}

MainMenu.$inject = ['i18n', 'supportedLanguages', '$state'];

app.component('mainMenu', {
    template: mainMenuTpl,
    controller: MainMenu
});