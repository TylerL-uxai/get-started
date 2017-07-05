import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './navigation.html';

class NavigationCtrl {
}

const name = 'navigation';

export default angular.module('navigation', [angularMeteor])
.component('navigation', {
  templateUrl: template,
  controllerAs: 'navigation',
  controller: NavigationCtrl
});
