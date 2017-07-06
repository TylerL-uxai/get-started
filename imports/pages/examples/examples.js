import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './examples.html';

class ExamplesCtrl {}

const name = 'examples';

export default angular.module(name, [angularMeteor, uiRouter])
.component(name, {
  templateUrl: template,
  controllerAs: name,
  controller: ExamplesCtrl
})
.config(['$stateProvider', function($stateProvider){
  $stateProvider
  .state('examples', {
    url: '/examples',
    template: '<examples></examples>'
  });
}]);
