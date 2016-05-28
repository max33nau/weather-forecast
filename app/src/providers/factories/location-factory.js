'use strict';

export default function( ngModule ) {

  ngModule.factory( 'LocationService', ['$rootScope','$q','WEATHER_API_URL','$http', function($rootScope,$q, WEATHER_API_URL,$http) {
    var location = {};
    var deffered = $q.defer();
    location.defaultLocation = '97205';
    location.getCurrentLocation = function() {
      var latitude = $rootScope.root.latitude;
      var longitude = $rootScope.root.longitude;
      return $http.get(WEATHER_API_URL+'/conditions/lang:EN/q/'+latitude+','+longitude+'.json');
    };

    location.loadData = function(locationData) {
      var weather = {};
      weather.currentLocation = locationData.display_location.full;
      weather.zipcode = locationData.display_location.zip;
      weather.icon =locationData.icon_url;
      weather.temperatureF = locationData.temp_f;
      weather.temperatureC = locationData.temp_c;
      weather.type = locationData.weather;
      weather.feelsLikeF = locationData.feelslike_f;
      weather.feelsLikeC = locationData.feelslike_c;
      return weather;
    };

    location.loadForecastData = function(data,weather) {
      var forecast = {};
      forecast.days = [];
      data.simpleforecast.forecastday.forEach(function(day){
        var dayData = {};
        dayData.conditions = day.conditions;
        dayData.dayName = day.date.weekday;
        dayData.date= day.date.monthname + ' ' + day.date.day + ',' + ' ' + day.date.year;
        dayData.highF = day.high.fahrenheit;
        dayData.highC = day.high.celsius;
        dayData.lowF = day.low.fahrenheit;
        dayData.lowC = day.low.celsius;
        forecast.days.push(dayData);
      });
      var jj = 0;
      for(var ii = 0; ii< forecast.days.length; ii++) {
        var currentDay = data.txt_forecast.forecastday[jj];
        forecast.days[ii].textF = currentDay.fcttext;
        forecast.days[ii].textC = currentDay.fcttext_metric;
        forecast.days[ii].icon = currentDay.icon_url;
        jj = jj+2;
      }
      weather.today = forecast.days[0];
      weather.tomorrow = forecast.days[1];
      weather.day2 = forecast.days[2];
      weather.day3 = forecast.days[3];
      return weather;
    }


    location.getLocation = function(zipcode) {
      return $http.get(WEATHER_API_URL+'/conditions/lang:EN/q/'+zipcode+'.json');
    };

    location.getForecastZipcode = function(zipcode) {
      return $http.get(WEATHER_API_URL+'/forecast/lang:EN/q/'+zipcode+'.json');
    };

    return location;

 }]);

}
