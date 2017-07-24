import { app } from '../module';

interceptor.$inject = ['$rootScope', 'i18n', '$q'];
function interceptor($rootScope, i18n, $q) {

    var back_server = 'http://localhost:3000'; //-> default json-server

    function request(config) {
        if (config.url.startsWith('/')) {
            if (config.url.indexOf('//') !== -1 || config.url.slice(-1) === "=") {
                throw new Error(`Error: bad request ${config.url}`);
            } else {
                config.url = `${back_server}${config.url}`;
                if (config.method === 'GET') {
                    let language = i18n.getLocale();
                    config.params = Object.assign({}, config.params, { lang: language });
                }
            }
        }
        return config;
    }
    
    function response(responseObj) {
        //TODO: create automatic success modals when create or update models
        return responseObj;
    }

    function responseError(responseObj) {
        //TODO: create automatic error modals when create or update models
        return responseObj;
    }

    return {
        request: request,
        response: response,
        responseError: responseError
    };
}

app.factory('httpInterceptor', interceptor);