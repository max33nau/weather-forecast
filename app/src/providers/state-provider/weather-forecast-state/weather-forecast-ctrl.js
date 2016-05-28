'use strict';
export default function(ngModule) {
  ngModule.controller('weatherForecastCtrl', ['$scope','$rootScope',function($scope, $rootScope) {
    $scope.weather = {};
    $scope.weather.title = 'Weather Forecast';
    if($rootScope.root.latitude) {
      console.log('true');
    }
  }]);
}
