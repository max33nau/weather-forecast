'use strict';
/* Styling */
import './style/main.scss';

/* Vendors */
import angular from 'angular' ;
import angularStateRouter from 'angular-ui-router';


/* $stateProvider Configuration */
import configStateProvider from './providers/state-provider';


/* state controllers */
import stateCtrls from './providers/state-provider/state-controllers';

const app = angular.module('weatherApp', [
  angularStateRouter,
  stateCtrls
]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/weather-forecast');
  configStateProvider($stateProvider);
}])

angular.element(document).ready(function() {
  angular.bootstrap(document, ['weatherApp']);
});
