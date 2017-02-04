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
    vm.name, vm.email, vm.address = '';
    vm.generatePDF = function () {
        if(vm.email && vm.name) {
            vm.doc = new jsPDF();
            vm.doc.text('Name: ' + vm.name, 10, 10);
            vm.doc.text('Email: ' + vm.email, 10, 20);
            vm.doc.text('Address: ' + vm.address, 10, 30);
            var pdf = vm.doc.output('datauristring');
            $('iframe').attr('src', pdf);
        }
        else {
            vm.error = true;
        }
    };

    vm.downloadPDF = function () {
        if(vm.doc) {
            vm.doc.save('yourPDF.pdf');
        }
    };
  });
