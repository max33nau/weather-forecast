'use strict';
import template from './weather-forecast.html';

export default {
  url: '/weather-forecast',
  template,
  controller: 'weatherForecastCtrl',
  resolve: {
    waitForGeoLocation: function($q, $timeout){
      var deferred = $q.defer();
      $timeout(function() {
          deferred.resolve(true);
        }, 1000);
      return deferred.promise;
    }
  }
};
