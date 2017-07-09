import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './brand.html';

class BrandCtrl {
}

const name = 'brand';

export default angular.module('brand', [angularMeteor])
.component('brand', {
  templateUrl: template,
  controllerAs: 'brand',
  controller: BrandCtrl
});
