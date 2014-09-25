'use strict';

angular.module('impactApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('demande.recapitulatif', {
        url: '/recapitulatif',
        templateUrl: '/app/demande/recapitulatif/recapitulatif.html',
        controller: 'RecapitulatifCtrl',
      });
  });