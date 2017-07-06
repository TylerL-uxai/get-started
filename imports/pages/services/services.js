import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './services.html';

class ServicesCtrl {}

const name = 'services';

export default angular.module(name, [angularMeteor, uiRouter])
.component(name, {
  templateUrl: template,
  controllerAs: name,
  controller: ServicesCtrl
})
.config(['$stateProvider', function($stateProvider){
  $stateProvider
  .state('services', {
    url: '/services',
    template: '<services></services>'
  });
}]);
