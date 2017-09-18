import { app } from '../module';
import es from '../i18n/es.json';
import en from '../i18n/en.json';

i18nConfig.$inject = ['$translateProvider', 'i18nProvider', 'momentPickerProvider', 'initialLocale'];

function i18nConfig($translateProvider, i18n, momentPickerProvider, initialLocale) {
    $translateProvider.useSanitizeValueStrategy('escapeParameters');

    $translateProvider.translations('en', en);
    $translateProvider.translations('es', es);

    $translateProvider.preferredLanguage(initialLocale);

    i18n.$get().changeLocale(initialLocale);
    momentPickerProvider.options({ locale: initialLocale });
    window.moment.locale(initialLocale);
}
app.config(i18nConfig);