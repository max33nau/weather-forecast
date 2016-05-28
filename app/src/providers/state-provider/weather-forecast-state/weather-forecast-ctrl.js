'use strict';
export default function(ngModule) {
  ngModule.controller('weatherForecastCtrl', ['$scope','$rootScope','LocationService',function($scope, $rootScope, LocationService) {
    $scope.weather = {};
    $scope.weather.title = 'Weather Forecast';
    if($rootScope.root.latitude) {
      console.log('here');
      LocationService.getCurrentLocation();
    }
    $scope.weather.changeLocation= function() {
      console.log('change ');
    };
  }]);
}
