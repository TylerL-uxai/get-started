import angular from 'angular';
import angularMeteor from 'angular-meteor';
// import { name as Main } from '../imports/main/main';
import Main from '../imports/main/main';
import uiRouter from 'angular-ui-router';
import About from '../imports/pages/about/about';
import Home from '../imports/pages/home/home';
angular.module('simple-todos', [
  angularMeteor,
  Main.name,
  About.name,
  Home.name,
  uiRouter
]);
