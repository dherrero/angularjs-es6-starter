import { app } from '../module';

httpConfig.$inject = ['$httpProvider'];

function httpConfig($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
}
app.config(httpConfig);

