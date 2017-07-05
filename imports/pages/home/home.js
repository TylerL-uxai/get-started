import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './home.html';

class HomeCtrl {}

const name = 'home';

export default angular.module('home', [angularMeteor, uiRouter])
.component('home', {
  templateUrl: template,
  controllerAs: 'home',
  controller: HomeCtrl
})
.config(['$stateProvider', function($stateProvider){
  $stateProvider
  .state('home', {
    url: '/',
    template: '<home></home>'
  });
}]);
