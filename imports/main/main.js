import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './main.html';
import uiRouter from 'angular-ui-router';

import About from '../pages/about/about';
import Home from '../pages/home/home';
import Navigation from '../components/navigation/navigation';

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
  Home.name
])
  .component('main', {
    templateUrl: 'imports/main/main.html',
    controller: MainCtrl
  })
  .config(config);

function config($locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');
}
