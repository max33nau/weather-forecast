'use strict';
import weatherForecastState from './weather-forecast-state/weather-forecast';


export default function($stateProvider) {
  $stateProvider
    .state('weather-forecast', weatherForecastState );
}
