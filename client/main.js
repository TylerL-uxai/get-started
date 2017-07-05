import angular from 'angular';
import angularMeteor from 'angular-meteor';
// import { name as Main } from '../imports/main/main';
import Main from '../imports/main/main';

angular.module('simple-todos', [
  angularMeteor,
  Main.name
]);
