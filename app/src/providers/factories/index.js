'use strict';
import angular from 'angular';
import locationFactory from './location-factory';


const factories = angular.module( 'factories', [] );

locationFactory(factories);

export default factories.name;
