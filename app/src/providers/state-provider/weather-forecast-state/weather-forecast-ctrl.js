'use strict';
export default function(ngModule) {
  ngModule.controller('weatherForecastCtrl', ['$scope','$rootScope','LocationService',function($scope, $rootScope, LocationService) {
    $scope.weather = {};
    $scope.weather.title = 'Weather Forecast';
    $scope.weather.currentLocation = 'Portland, OR';
    if($rootScope.root.latitude && $rootScope.root.longitude) {
      LocationService.getCurrentLocation().then(function(response){
        var locationData = response.data.current_observation;
        $scope.weather = LocationService.loadData(locationData);
        LocationService.getForecastZipcode($scope.weather.zipcode).then(function(response){
          var forecastData = LocationService.loadForecastData(response.data.forecast);
          $scope.weather.today = forecastData.days[0];
          $scope.weather.tomorrow = forecastData.days[1];
          $scope.weather.day2 = forecastData.days[2];
          $scope.weather.day3 = forecastData.days[3];
        });
      })
      .catch(function(error){
        console.log(error);
      });
    } else {
      LocationService.getLocation($scope.currentLocation.zip).then(function(response){
        var locationData = response.data.current_observation;
        $scope.weather = LocationService.loadData(locationData);
        LocationService.getForecastZipcode($scope.weather.zipcode).then(function(response){
          var forecastData = LocationService.loadForecastData(response.data.forecast);
          $scope.weather.today = forecastData.days[0];
          $scope.weather.tomorrow = forecastData.days[1];
          $scope.weather.day2 = forecastData.days[2];
          $scope.weather.day3 = forecastData.days[3];
        });
      })
      .catch(function(error){
        console.log(error);
      });
    }
    $scope.weather.changeLocation= function() {
      LocationService.getLocation($scope.weather.zipcode).then(function(response){
        var locationData = response.data.current_observation;
        $scope.weather = LocationService.loadData(locationData);
        LocationService.getForecastZipcode($scope.weather.zipcode).then(function(response){
          var forecastData = LocationService.loadForecastData(response.data.forecast);
          $scope.weather.today = forecastData.days[0];
          $scope.weather.tomorrow = forecastData.days[1];
          $scope.weather.day2 = forecastData.days[2];
          $scope.weather.day3 = forecastData.days[3];
        });
      })
    };
  }]);
}
