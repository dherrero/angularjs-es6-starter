import _moment from 'moment';
import _momentTz from 'moment-timezone';
// include moment locale in the bundle... if do that add in 'src/app/services/i18nService.js' line localesInit the locale code.
// example:
// import _momentEs from 'moment/locale/es'
// 'src/app/services/i18nService.js' ---> localesInit = ['en', 'es'];

window.moment = _moment;

export const moment = _moment;