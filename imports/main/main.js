import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './main.html';
import uiRouter from 'angular-ui-router';

import About from '../pages/about/about';
import Home from '../pages/home/home';
import Examples from '../pages/work/examples';
import Navigation from '../components/navigation/navigation';
import Brand from '../components/brand/brand';

class MainCtrl {
  constructor() {
    // controller code
    console.log('controller works');
  }
}

export default angular.module('main', [
  angularMeteor,
  uiRouter,
  About.name,
  Navigation.name,
  Brand.name,
  Home.name,
  Examples.name
])
  .component('main', {
    templateUrl: 'imports/main/main.html',
    controller: MainCtrl
  })

  .config(['$locationProvider', '$urlRouterProvider', function($locationProvider, $urlRouterProvider){
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
  }]);
