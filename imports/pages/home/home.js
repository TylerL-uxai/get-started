import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './home.html';

class HomeCtrl {}

const name = 'home';

export default angular.module(name, [angularMeteor, uiRouter])
.component(name, {
  templateUrl: template,
  controllerAs: name,
  controller: HomeCtrl
})
.config(config);

function config($stateProvider) {
  'ngInject';

  $stateProvider
  .state('home', {
    url: '/',
    template: '<home></home>'
  });
}
