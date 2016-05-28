import angular from 'angular';
import weatherForecastCtrl from '../weather-forecast-state/weather-forecast-ctrl';
const stateCtrls = angular.module( 'statecontrollers', [] );

weatherForecastCtrl(stateCtrls);

export default stateCtrls.name;
