'use strict';
import template from './weather-forecast.html';

export default {
  url: '/weather-forecast',
  template,
  controller: 'weatherForecastCtrl',
  resolve: {
    waitForGeoLocation: function($q, $timeout){ // Give geo location a chance to respond with data otherwise go to default location
      var deferred = $q.defer();
      $timeout(function() {
          deferred.resolve(true);
        }, 5000);
      return deferred.promise;
    }
  }
};
