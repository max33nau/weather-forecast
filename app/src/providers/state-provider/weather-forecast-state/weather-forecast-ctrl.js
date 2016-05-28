'use strict';
export default function(ngModule) {
  ngModule.controller('weatherForecastCtrl', ['$scope',function($scope) {
    $scope.weather = {};
    $scope.weather.title = 'Weather Forecast';
  }]
  );
}
