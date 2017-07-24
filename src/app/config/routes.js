import { app } from '../module';
import layout from '../views/layout.html';
import home from '../views/home.html';
import example from '../views/example.html';

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
            template: example
        })
        ;
        
}
routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

app.config(routeConfig);