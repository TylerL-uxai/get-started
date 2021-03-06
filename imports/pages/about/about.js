import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './about.html';

class About {}

const name = 'about';

export default angular.module(name, [angularMeteor, uiRouter])
.component(name, {
  templateUrl: template,
  controllerAs: name,
  controller: About
})
.config(['$stateProvider', function($stateProvider){
  $stateProvider
  .state('about', {
    url: '/about',
    template: '<about></about>'
  });
}]);
