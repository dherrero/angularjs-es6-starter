import { app } from '../module';

i18nFactory.$inject = ['$translate', 'amMoment', 'initialLocale'];

function i18nFactory(translate, amMoment, initialLocale) {
    var locale_key = initialLocale;
    //languages preloaded into the bundle
    var localesInit = ['en']; 

    function addLocaleScript(locale) {
        if (localesInit.indexOf(locale) === -1 && locale.length === 2) {
            localesInit.push(locale);
            var body = document.body || document.getElementsByTagName('body')[0],
                script = document.createElement('script');
            script.src = './node_modules/moment/locale/' + locale + '.js';
            body.appendChild(script);
        }
    }
    var changeLocale = function (locale) {
        if (locale) {
            translate.use(locale);
            amMoment.changeLocale(locale);
            window.moment.locale(locale);
            addLocaleScript(locale);
            locale_key = locale;
        }
        return locale_key;
    };

    var getLocale = function () {
        return locale_key;
    };

    return {
        changeLocale: changeLocale,
        getLocale: getLocale
    };
}
app.factory('i18n', i18nFactory);

