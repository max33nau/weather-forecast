'use strict';

export default function( ngModule ) {

  ngModule.factory( 'LocationService', ['$window','$rootScope','$q', function($window,$rootScope,$q) {
    var location = {};
    var deffered = $q.defer();
    location.defaultLocation = '97205';
    return location;

 }]);

}
