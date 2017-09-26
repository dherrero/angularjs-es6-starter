import { app } from '../module';

app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.trim().split(' ').map(e => e ? e.charAt(0).toUpperCase() + e.substr(1).toLowerCase() : '').join(' ') : '';
    }
});