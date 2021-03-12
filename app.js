
document.addEventListener('deviceready', function onDeviceReady() {
  console.log('DEVICE IS READY  ---- angular.bootstrap');
    angular.bootstrap(document, ['BluKee']);
}, false);


var your_password = "F$9Yhe3hJ%"
var your_database = "postgres"
// var Database={your_database}; Data Source=tcs-import.postgres.database.azure.com; User Id=adminPG@tcs-import; Password={your_password}


if('serviceWorker'in navigator) {
    window.addEventListener('load', () =>{
        navigator.serviceWorker.register('service-worker.js')
        .then(registration =>{
            console.log('service worker is registered', registration);
        })
        .catch(err => {
            console.error('Registration failed', err
            )
        })
    });
}

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

var app = angular.module('DVIR', ['ui.router']);

app.config( function( $provide, $stateProvider, $urlRouterProvider, $compileProvider) {
  $stateProvider
  .state('splash', {
    url: '/splash',
    views: {
        'contentMain': {templateUrl: 'view/splash/splash.html', controller: 'SplashController'}
    }})
  .state('home', {
    url: '/',
    views: {
        'contentMain': {templateUrl: 'view/home/home.html', controller: 'HomeController'}
    }})
  .state('scan', {
    url: '/scan',
    views: {
        'contentMain': {templateUrl: 'view/scanner.html', controller: 'ScanController'}
    }});
       
  $urlRouterProvider.otherwise("home");
});

app.controller('SplashController', function ($scope, $rootScope, $window, $timeout, $state) {

  $timeout(function() {
       $state.go('home');
     }, 2000);

});

app.controller('HomeController', function ($scope, $rootScope, $window) {

  window.scope = $scope;

});

app.controller('ScanController', function ($scope, $rootScope, $window) {

});

app.run(function($state, $rootScope, $timeout) {

  $state.transitionTo('splash');

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

      // if (toState.authenticate && !AuthService.isAuthenticated()){
      //   // User isn’t authenticated
      //   console.log('User not authenticated, goto login screen.');
      //   $state.transitionTo("login");
      //   event.preventDefault();
      // }
      // $rootScope.state = toState.name;

  });
});