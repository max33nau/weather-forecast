'use strict';
/* Styling */
import './style/main.scss';

/* Vendors */
import angular from 'angular' ;

const app = angular.module('weatherApp', []);

angular.element(document).ready(function() {
  angular.bootstrap(document, ['weatherApp']);
});
