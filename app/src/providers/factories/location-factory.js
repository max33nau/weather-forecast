'use strict';

export default function( ngModule ) {

  ngModule.factory( 'LocationService', ['$rootScope','$q','WEATHER_API_URL','$http', function($rootScope,$q, WEATHER_API_URL,$http) {
    var location = {};
    var deffered = $q.defer();
    location.defaultLocation = '97205';
    location.getCurrentLocation = function() {
      
    };
    return location;

 }]);

}
