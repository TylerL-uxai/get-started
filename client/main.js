import angular from 'angular';
import angularMeteor from 'angular-meteor';
// import { name as Main } from '../imports/main/main';
import Main from '../imports/main/main';
import uiRouter from 'angular-ui-router';

angular.module('portfolio', [
  angularMeteor,
  Main.name,
  uiRouter
]);
