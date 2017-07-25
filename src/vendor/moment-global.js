import _moment from 'moment';
import _momentTz from 'moment-timezone';
// include moment locale in the bundle... if do that add in 'src/app/services/i18nService.js' line 7: localesInit the locale code.
// example:
// in this file:
// import _momentEs from 'moment/locale/es'
// in file: 'src/app/services/i18nService.js' line 7:
// localesInit = ['en', 'es']; // --> avoid script injection in to <body> 

window.moment = _moment;

export const moment = _moment;