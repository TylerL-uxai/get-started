import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './main.html';

class MainCtrl {
  constructor() {
    // controller code
    console.log('controller works');
  }
}

export default angular.module('main', [
  angularMeteor
])
  .component('main', {
    templateUrl: 'imports/main/main.html',
    controller: MainCtrl
  });
