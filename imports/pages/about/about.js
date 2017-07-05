import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './about.html';

class About {}

const name = 'about';

export default angular.module('about', [angularMeteor, uiRouter])
.component('about', {
  templateUrl: template,
  controllerAs: 'about',
  controller: About
})
.factory('AboutService', AboutService);

AboutService.$inject = ['$stateProvider'];

function AboutService($stateProvider) {
  $stateProvider
  .state('about', {
    url: '/about',
    template: '<about></about>'
  });
}
