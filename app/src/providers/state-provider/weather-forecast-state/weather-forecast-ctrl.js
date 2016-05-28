'use strict';
export default function(ngModule) {
  ngModule.controller('weatherForecastCtrl', ['$scope','$rootScope','LocationService',function($scope, $rootScope, LocationService) {
    $scope.weather = {};
    $scope.weather.error = {};
    $scope.weather.title = 'Weather Forecast';
    $scope.weather.currentLocation = 'Portland, OR';
    if($rootScope.root.latitude && $rootScope.root.longitude) {
      LocationService.getCurrentLocation().then(function(response){
        $scope.weather = LocationService.loadData(response.data.current_observation);
        LocationService.getForecastZipcode($scope.weather.zipcode).then(function(response){
          $scope.weather = LocationService.loadForecastData(response.data.forecast, $scope.weather);
        });
      })
      .catch(function(error){
        console.log(error);
      });
    } else {
      LocationService.getLocation($scope.currentLocation.zip).then(function(response){
        $scope.weather = LocationService.loadData(response.data.current_observation);
        LocationService.getForecastZipcode($scope.weather.zipcode).then(function(response){
          $scope.weather = LocationService.loadForecastData(response.data.forecast, $scope.weather);
        });
      })
      .catch(function(error){
        console.log(error);
      });
    }
    $scope.changeLocation= function() {
      LocationService.getLocation($scope.weather.zipcode).then(function(response){
        $scope.weather = LocationService.loadData(response.data.current_observation);
        LocationService.getForecastZipcode($scope.weather.zipcode).then(function(response){
          $scope.weather = LocationService.loadForecastData(response.data.forecast, $scope.weather);
        });
      })
      .catch(function(error){
        console.log(error);
      })
    };
  }]);
}
