'use strict';
/* Styling */
import './style/main.scss';

/* Vendors */
import angular from 'angular' ;
import angularStateRouter from 'angular-ui-router';
import angularMessages from 'angular-messages';

/* $stateProvider Configuration */
import configStateProvider from './providers/state-provider';

/* state controllers */
import stateCtrls from './providers/state-provider/state-controllers';

/* factories */
import factories from './providers/factories';

const app = angular.module('weatherApp', [
  angularStateRouter,
  stateCtrls,
  factories,
  angularMessages
]);


app.constant('WEATHER_API_URL', WEATHER_API_URL + WEATHER_API_KEY);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/weather-forecast');
  configStateProvider($stateProvider);
}])
.run(function($rootScope, LocationService, $window){
  $rootScope.root = {};
  if($window.navigator.geolocation) { $window.navigator.geolocation.getCurrentPosition(function(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    $rootScope.$apply(function(){
      $rootScope.root.latitude = latitude;
      $rootScope.root.longitude = longitude;
    });
  });
}
});

angular.element(document).ready(function() {
  angular.bootstrap(document, ['weatherApp']);
});
