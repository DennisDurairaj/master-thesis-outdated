'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
  .controller('MainCtrl', function () {
    var vm = this;

    vm.generatePDF = function () {
      console.log('clicked');
      var doc = new jsPDF();
      doc.text(vm.name, 10, 10);
      doc.save('a4.pdf');
    };
  });
