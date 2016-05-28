'use strict';
describe('Test Weather Forecast State Ctrl ', function(){
  beforeEach(angular.mock.module('weatherApp'));
  var $scope;
  var $controller;
  beforeEach(angular.mock.inject(function(_$rootScope_, _$controller_) {
    $scope = _$rootScope_.$new();
    $controller = _$controller_;
  }));

  it( 'should have a weather object attached to the $scope object with a property name title = Weather Forecast ', function()  {
    $controller('weatherForecastCtrl', { $scope } );
    expect($scope.weather.title).to.deep.equal('Weather Forecast');
  });

});
