import { app } from '../module';
import layout from '../views/layout.html';
import home from '../views/home.html';

function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            abstract: true,
            template: layout
        })
        .state('app.home', {
            url: '/',
            template: home
        })
        .state('app.example', {
            url: '/example',
            component: 'compExample'
        })
        ;

}
routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

app.config(routeConfig);